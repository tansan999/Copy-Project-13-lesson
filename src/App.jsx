import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { GlobalStyles } from "./components/styles/gllodalStyles";
import { Summary } from "./components/Summary";
import { Meals } from "./components/Meals";
import { DUMMY_MEALS } from "./data/Index";
import Button from "./components/UI/Button";

// theme переменый для передачи цветов по  <ThemeProvider theme={theme}>
const theme = {
  colors: {
    cherry: "#8a2b06",
    darkCherry: "#5A1F08",
    grey: "#383838",
    orenge: " rgb(173, 85, 2)",
  },
};

function App() {
  return (
    // <ThemeProvider theme={theme}> даю глобальный стиль (цвета) через theme
    <ThemeProvider theme={theme}>
      {/* при каждом инпорте  <GlobalStyles />  дает цепную реакцию  */}
      <GlobalStyles />
      <Header />
      <Summary />
      <Meals DUMMY_MEALS={DUMMY_MEALS} />

      <Button/>
    </ThemeProvider>
  );
}

export default App;

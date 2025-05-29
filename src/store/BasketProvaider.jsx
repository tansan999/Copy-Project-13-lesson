import { Children, createContext, useState } from "react";

// создаем createContext ---->name: BasketContext
export const BasketContext = createContext({
  meals: [],
});

export const BasketProvider = ({ children }) => {
  // открыли состояние
  const [meals, setMeals] = useState([]);

  const addToBasket = (food) => {
    // find нужен что бы проверить есть ли блюда в коорзине
    const exsistingFood = meals.find((item) => item.id === food.id);
    // и если есть блюда
    if (exsistingFood) {
      // добавляем его
      exsistingFood.amount = +food.amount + +exsistingFood.amount;
      // берём прощлые и все данные
      const updatedFoods = [...meals];
      // и меняем его
      setMeals(updatedFoods);
    } else {
      setMeals([...meals, food]);
    }

    // при обновление копируем и вставляем новую инфу (это происходит при нажати на  + Add )
    // setMeals((prevMeals) => [...prevMeals, food]); // это правивльный синтаксис

    // Обновляем состояние meals (список блюд/продуктов)
    setMeals((prevMeals) => {
      // Проверяем, есть ли уже такое блюдо в списке по его id
      const exists = prevMeals.find((item) => item.id === food.id);

      // Если блюдо уже есть в списке
      if (exists) {
        // Обновляем список: увеличиваем количество (amount) этого блюда на 1
        return prevMeals.map(
          (item) =>
            item.id === food.id
              ? { ...item, amaunt: (item.amaunt || 1) + 1 } // Если это нужное блюдо - увеличиваем amount (или ставим 1, если amount отсутствовал)
              : item // Остальные блюда оставляем без изменений
        );
      }

      // Если блюда нет в списке - добавляем его с начальным количеством (amount = 1)
      return [...prevMeals, { ...food, amaunt: 1 }];
    });
  };

  // тут дойём по id что бы при отмене он читал по id карточкам
  const removeFromBasket = (id) => {
    const exsistingFood = meals.find((item) => item.id === id);
    if (!exsistingFood) return;
    if (exsistingFood.amount === 1) {
      const filteredMeals = meals.filter(
        (item) => item.id !== exsistingFood.id
      );
      // убираем filteredMeals если количество меньше 1
      setMeals(filteredMeals);
    } else {
      exsistingFood.amount = exsistingFood.amount - 1;
      const updateMeals = [...meals];
      setMeals(updateMeals);
    }
  };

  const addEromBasket = (id) => {
    const exsistingFood = meals.find((item) => item.id === id);
    exsistingFood.amount = exsistingFood.amount + 1;
    const updateMeals = [...meals];
    setMeals(updateMeals);
  };

  return (
    <BasketContext.Provider
      value={{ meals, addToBasket, removeFromBasket, addEromBasket }}
    >
      {/* сюда приходит то что обрачиваеетсяя внутрь useContext  childrens}*/}
      {children}
    </BasketContext.Provider>
  );
};

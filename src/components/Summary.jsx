// Delicious Food, Delivered To You ------- компонентс для него
import styled from "styled-components";
import FonImg from "../assets/fon_bluda_.png";

// список блюд
export const Summary = () => {
  return (
    <MealsWraper>
      <TextWraper>
        <h3>Delicious Food, Delivered To You</h3>
        <h4>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious <br /> lunch or dinner at home.
        </h4>
        <h5>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by <br />
           experienced chefs!
        </h5>
      </TextWraper>
    </MealsWraper>
  );
};

const MealsWraper = styled.div`
  background: url(${FonImg}) center center/cover no-repeat;
  min-height: 432px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: end;
`;

const TextWraper = styled.div`
  padding: 36px 54px;
  background-color: ${({ theme }) => theme.colors.grey};
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 853px;
  border-radius: 16px;
  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.3);
  color: white;
  position: absolute;
  bottom: -70px;

  h3 {
    font-size: 36px;
    font-weight: 600;
    line-height: 54px;
    margin-bottom: 28px;
  }

  h4 {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }

  h5 {
    margin-bottom: 20px;
    font-size: 500;
    line-height: 24px;
  }
`;

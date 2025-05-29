import styled, { keyframes, css } from "styled-components";
import BasketIcon from "../assets/basket.png";
import { useContext, useEffect, useState } from "react";
import { BasketContext } from "../store/BasketProvaider";

// Header

export default function Header(props) {
  // defauldprops  это ---->  mealsCount = 0 <-----статичное значение (0 ноль это defaul ный значение)
  const { onOpen } = props;
  const { meals } = useContext(BasketContext);
  const [animation, setAnimation] = useState(false);

  const mealCountReduse = meals.reduce((prev, curr) => {
    return prev + +curr.amount;
  }, 0);

  useEffect(() => {
    setAnimation(true);
    const timer = setTimeout(() => {
      setAnimation(false);
    }, 500);
    // clearTimeout(timer); ---> это нужно что бы очистить  не нужные данные 
    return () => {
      clearTimeout(timer);
    };
  }, [meals]);

  return (
    <StyleHeader>
      <Wrapper>
        <Title>ReactMeals</Title>
        {/* при нажатии на <BasketWraper onClick={onOpen}> у нас открывается модальное окно при повторном закрывается   */}
        <BasketWraper onClick={onOpen} $animation={animation}>
          <img src={BasketIcon} alt="Basket" />
          <YouCardDiv>Your Cart</YouCardDiv>
          <CountOfMils>{mealCountReduse}</CountOfMils>
        </BasketWraper>
      </Wrapper>
    </StyleHeader>
  );
}

const StyleHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.cherry};
  color: white;
  position: fixed;
  width: 100%;
  z-index: 10000;
`;

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  padding: 21px 0px;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 38px;
  font-weight: 600;
`;

const jumping = keyframes`
  from{
    transform: translateY(-5px);
  }
  to{
    transform: translateY(5px);
  }
`;
function animate(props) {
  const { $animation } = props;

  if (!$animation) {
    return css``;
  }

  return css`
    animation: ${jumping} 0.1s linear infinite alternate-reverse;
  `;
}

const BasketWraper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkCherry};
  border-radius: 30px;
  padding: 20px 33px;
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    ${animate}
  }
`;

const YouCardDiv = styled.div`
  font-weight: 600;
  margin-left: 12px;
  margin-right: 24px;
`;

const CountOfMils = styled.span`
  width: 51px;
  height: 35px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.cherry};
  display: flex;
  justify-content: center;
  align-items: center;
`;

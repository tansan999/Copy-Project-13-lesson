import styled from "styled-components";
import BasketIcon from "../assets/basket.png";

// Header

export default function Header(props) {
  // defauldprops  это ---->  mealsCount = 0 <-----статичное значение (0 ноль это defaul ный значение)
  const { mealsCount = 0 } = props;
  return (
    <StyleHeader>
      <Wrapper>
        <Title>ReactMeals</Title>
        <BasketWraper>
          <img src={BasketIcon} alt="Basket" />
          <YouCardDiv>Your Cart</YouCardDiv>
          <CountOfMils>{mealsCount}</CountOfMils>
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

const BasketWraper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkCherry};
  border-radius: 30px;
  padding: 20px 33px;
  display: flex;
  align-items: center;
  cursor: pointer;
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

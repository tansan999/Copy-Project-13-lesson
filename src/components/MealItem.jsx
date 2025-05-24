// Оно внутри meals : Карточки списков блюд

import { BtnPlusAddDiv } from "../components/styles/StyleButton";
import styled from "styled-components";

// stateFull ---- если есть компонент state
// stateless ---- если без state но через props это
export const MealItem = (props) => {
  const { description, id, price, title } = props;
  return (
    <StyleDiv>
      <MealeItemDescription
        description={description}
        price={price}
        title={title}
      />

      <MealItemAction />
    </StyleDiv>
  );
};

const MealeItemDescription = ({ description, price, title }) => {
  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledPrise>{price}</StyledPrise>
    </div>
  );
};

const MealItemAction = () => {
  
  return (
    <div>
      <div>
        <StyledLabale htmlFor="">Amount</StyledLabale>
        <StyledInput type="number" />
      </div>
      <BtnPlusAddDiv>+ Add</BtnPlusAddDiv>
    </div>
  );
};

const StyledLabale = styled.label`
  color: rgb(34, 34, 34);
  font-size: 18px;
  font-weight: 600;
`;

const StyledInput = styled.input`
  padding: 8px 8px;
  border-radius: 8px;
  color: rgb(34, 34, 34);
  font-weight: 500;
  width: 60px;
  border: none;
  border: 1px solid grey;
  outline: none;
  margin-left: 20px;
`;

const StyleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0px 1px 0px 0px rgba(36, 36, 36, 0.08);
  border-bottom: 1px solid rgb(214, 214, 214);
`;

const StyledTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
`;

const StyledDescription = styled.div`
  font-style: italic;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
`;

const StyledPrise = styled.div`
  color: ${({ theme }) => theme.colors.orenge};

  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: left;
`;

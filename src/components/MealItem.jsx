// Оно внутри meals : Карточки списков блюд

import { useContext, useRef } from "react";
import { BtnPlusAddDiv } from "../components/styles/StyleButton";
import styled from "styled-components";
import { BasketContext } from "../store/BasketProvaider";

// stateFull ---- если есть компонент state
// stateless ---- если без state но через props это
export const MealItem = (props) => {
  const { description, id, price, title } = props;
  const ctx = useContext(BasketContext);
  const inputRef = useRef(null);

  const OnSabmit = (e) => {
    // e.preventDefault() ---> что бы страница не обновлялся при нажатии + Add
    e.preventDefault();

    const mealeInfo = {
      id: id,
      price: price,
      title: title,
      amount: inputRef.current.value
    };
    // перевод данные в ---> BasketContext через ctx
    ctx.addToBasket(mealeInfo);
  };

  console.log("inputRef: ", inputRef);
  return (
    <StyleDiv onSubmit={OnSabmit}>
      <MealeItemDescription
        description={description}
        price={price}
        title={title}
      />
      {/* amaunt ---- количество  */}
      <MealItemAction id={id} ref={inputRef} />
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

const MealItemAction = ({ id, ref }) => {
  return (
    <div>
      <div>
        <StyledLabale htmlFor={`amount-input-${id}`}>Amount</StyledLabale>
        {/* StyledInput ---- input */}
        <StyledInput
          id={`amount-input-${id}`}
          ref={ref}
          defaultValue="1"
          // value={ref.current.value}
          type="number"
        />
      </div>
      {/*нажати + Add --- из input добавить в amount в количество */}
      <BtnPlusAddDiv type="submit">+ Add</BtnPlusAddDiv>
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

const StyleDiv = styled.form`
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

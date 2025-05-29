import styled from "styled-components";
import {
  BtnClose_,
  BtnMinus_,
  BtnOrder_,
  BtnPlus_,
} from "./styles/StyleButton";
import { useContext } from "react";
import { BasketContext } from "../store/BasketProvaider";
// Modal корзина покупок с scrollом

const Basket_Aitem = [];

export const Basket = (props) => {
  const { onClous } = props;
  const ctx = useContext(BasketContext);

  const totalEmauntOfFood = ctx.meals.reduce((prev, curr) => {
    return prev + curr.amount * curr.price;
  }, 0);

  return (
    <DivAllModalSroll>
      {/* (оборачиваем внурть скролл )даем скролл  */}
      <ScrollBar>
        {ctx.meals.map((food) => (
          <BasketItem
            key={food.id}
            {...food}
            onMinus={ctx.removeFromBasket}
            onPilus={ctx.addEromBasket}
          />
        ))}
        {/* {ctx.meals.map((food, idx) => (
          <BasketItem key={`${food.id}-${idx}`} {...food} onMinus={ctx.removeFromBasket} />
        ))} */}
      </ScrollBar>
      <TototalAmaount onClous={onClous} tototalAmaount={totalEmauntOfFood} />
    </DivAllModalSroll>
  );
};

//todo  ---- Basket

const ScrollBar = styled.div`
  max-height: 250px;
  overflow: auto;
`;

const DivAllModalSroll = styled.div`
  /* Modal/ scroll */
  position: relative;
  width: 671px;
  border-radius: 20px;
  background: rgb(255, 255, 255);
`;

const TototalAmaount = (props) => {
  const { onClous, tototalAmaount } = props;
  return (
    // тут карточка внурти модалки
    <>
      <NameResult>
        <Name>Total Amount</Name>
        <Price_>${tototalAmaount.toFixed(2)}</Price_>
      </NameResult>
      <BtnAddOrNo>
        <BtnClose_ onClick={onClous}>Close</BtnClose_>
        <BtnOrder_>Order</BtnOrder_>
      </BtnAddOrNo>
    </>
  );
};

// todo  ----  TototalAmaount

const NameResult = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
const Name = styled.div`
  /* border: solid red 3px; */
  color: rgb(34, 34, 34);
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: center;
`;

const Price_ = styled.div`
  /* border: solid red 3px; */
  color: rgb(138, 43, 6);
  font-family: Poppins;
  font-size: 22px;
  font-weight: 600;
  line-height: 33px;
  letter-spacing: 0px;
  text-align: left;
`;

const BtnAddOrNo = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 24px;
  gap: 16px;
`;

export const BasketItem = (props) => {
  const { title, price, amount, onMinus, onPilus, id } = props;
  return (
    <CardFood>
      <InfoCardFood>
        <NameQuantityPrice>
          <NameFood>{title}</NameFood>
          <QuantityPrice>
            <Price>${price}</Price>
            <Quantity>x {amount}</Quantity>
          </QuantityPrice>
        </NameQuantityPrice>
        <PlusMinus>
          <BtnMinus_ onClick={() => onMinus(id)}>
            <span>-</span>
          </BtnMinus_>
          <BtnPlus_ onClick={() => onPilus(id)}>
            <span>+</span>
          </BtnPlus_>
        </PlusMinus>
      </InfoCardFood>

      <BorderSolid></BorderSolid>
    </CardFood>
  );
};

//todo  ---- BasketIitem

const CardFood = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23.5px;
`;

const InfoCardFood = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NameQuantityPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const NameFood = styled.p`
  color: rgb(34, 34, 34);
  font-family: Poppins;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: center;
`;

const QuantityPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 47px; */
  width: 153px;
`;

const Price = styled.div`
  color: rgb(173, 85, 2);
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  text-align: left;
`;
const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 46px;
  height: 36px;

  box-sizing: border-box;
  border: 1px solid rgb(214, 214, 214);
  border-radius: 6px;
`;

const PlusMinus = styled.div`
  display: flex;
  align-items: end;
  gap: 14px;
`;

const BorderSolid = styled.div`
  box-sizing: border-box;
  border: 1px solid rgb(214, 214, 214);
  /* Shadow */
  box-shadow: 0px 6px 12px 0px rgba(36, 36, 36, 0.08);
`;

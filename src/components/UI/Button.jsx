import { useState } from "react";
import {
  BtnPlus_,
  BtnMinus_,
  BtnPlusAddDiv,
  BtnClose_,
  BtnOrder_,
  Disabled,
  DivAllBtn_All,
  DivAllBtn,
} from "../styles/StyleButton";

export default function Button() {
  const [disabled, setDisabled] = useState(false);

  const DisabledClick = () => {
    setDisabled(!disabled);
  };

  return (
    <DivAllBtn_All>
      <DivAllBtn>
        <BtnPlus_ disabled={disabled}>
          <span>+</span>
        </BtnPlus_>

        <BtnMinus_ disabled={disabled}>
          <span>-</span>
        </BtnMinus_>

        <BtnPlusAddDiv disabled={disabled}>+ Add</BtnPlusAddDiv>
        <BtnClose_ disabled={disabled}>Close</BtnClose_>
        <BtnOrder_ disabled={disabled}>Order</BtnOrder_>
      </DivAllBtn>
      <>
        <Disabled onClick={DisabledClick}>disabled</Disabled>
      </>
    </DivAllBtn_All>
  );
}

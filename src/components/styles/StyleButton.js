import styled from "styled-components";

//  +
export const BtnPlus_ = styled.button`
  width: 48px;
  height: 36px;
  box-sizing: border-box;
  border: 1px solid rgb(138, 43, 6);
  border-radius: 6px;

  span {
    /* plus */
    width: 20px;
    height: 20px;
    color: rgb(138, 43, 6);
    font-size: 20px;
  }
  &:hover {
    border-radius: 6px;
    background: rgb(138, 43, 6);
    span {
      color: white;
    }
  }
  &:active {
    border-radius: 6px;
    background: rgb(153, 49, 8);
    span {
      color: white;
    }
    &:disabled {
      box-sizing: border-box;
      border: 1px solid rgb(202, 198, 196);
      border-radius: 6px;

      spam {
        color: rgb(202, 198, 196);
      }
    }
  }
`;

//  -
export const BtnMinus_ = styled.button`
  width: 48px;
  height: 36px;
  box-sizing: border-box;
  border: 1px solid rgb(138, 43, 6);
  border-radius: 6px;

  span {
    /* plus */
    width: 20px;
    height: 20px;
    color: rgb(138, 43, 6);
    font-size: 20px;
  }
  &:hover {
    border-radius: 6px;
    background: rgb(138, 43, 6);
    span {
      color: white;
    }
  }
  &:active {
    border-radius: 6px;
    background: rgb(153, 49, 8);
    span {
      color: white;
    }
    &:disabled {
      box-sizing: border-box;
      border: 1px solid rgb(202, 198, 196);
      border-radius: 6px;

      spam {
        color: rgb(202, 198, 196);
      }
    }
  }
`;

//  + Add
export const BtnPlusAddDiv = styled.button`
  /* 1 */
  width: 99px;
  height: 41px;
  /* Автолейаут */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 24px 10px 16px;

  color: rgb(255, 255, 255);
  /* font-family: Poppins; */
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  text-align: left;
  text-transform: capitalize;
  word-spacing: 10px;

  border-radius: 20px;
  background: rgb(138, 43, 6);

  &:hover {
    border-radius: 20px;
    background: rgb(126, 42, 10);
  }
  &:active {
    border-radius: 20px;
    background: rgb(153, 49, 8);
  }
  &:disabled {
    border-radius: 20px;
    background: rgb(202, 198, 196);
  }
`;

// Close
export const BtnClose_ = styled.button`
  /* button */
  position: relative;
  width: 110px;
  height: 44px;
  /* Автолейаут */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10;
  padding: 10px 20px 10px 20px;

  color: rgb(138, 43, 6);
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid rgb(138, 43, 6);
  border-radius: 20px;
  &:hover {
    border-radius: 20px;
    background: rgb(138, 43, 6);
    color: rgb(255, 255, 255);
  }
  &:active {
    border-radius: 20px;
    background: rgb(153, 49, 8);
    color: rgb(255, 255, 255);
  }
  &:disabled {
    box-sizing: border-box;
    border: 1px solid rgb(202, 198, 196);
    border-radius: 20px;
    color: rgb(202, 198, 196);
  }
`;

//  Order
export const BtnOrder_ = styled.button`
  /* button */
  position: relative;
  width: 110px;
  height: 44px;
  /* Автолейаут */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10;
  padding: 10px 20px 10px 20px;

  color: rgb(255, 255, 255);
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  border-radius: 20px;
  background: rgb(138, 43, 6);

  &:hover {
    border-radius: 20px;
    background: rgb(126, 42, 10);
    color: rgb(255, 255, 255);
  }
  &:active {
    border-radius: 20px;
    background: rgb(153, 49, 8);
    color: rgb(255, 255, 255);
  }
  &:disabled {
    border-radius: 20px;
    background: rgb(202, 198, 196);
    color: rgb(255, 255, 255);
  }
`;

// disabled
export const Disabled = styled.button`
  width: 120px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 28px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(90deg, #1e2a78 0%, #233b97 50%, #1e2a78 100%);
  border: none;
  border-radius: 22px;
  box-shadow: 0 0 16px 2px #233b9788;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.2s;

  &:hover {
    box-shadow: 0 0 32px 4px #233b97cc;
    transform: scale(1.04);
  }

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      120deg,
      transparent 0%,
      #fff8 40%,
      #fff 50%,
      #fff8 60%,
      transparent 100%
    );
    opacity: 0.7;
    transform: rotate(25deg) translateX(-100%);
    animation: shine 2.2s infinite;
    pointer-events: none;
  }

  @keyframes shine {
    0% {
      transform: rotate(25deg) translateX(-100%);
    }
    60% {
      transform: rotate(25deg) translateX(120%);
    }
    100% {
      transform: rotate(25deg) translateX(120%);
    }
  }
`;

//  --------- 1
export const DivAllBtn_All = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  background-color: #60232333;
  border: 4px solid red;
  gap: 30px;
`;
//  --------- 2
export const DivAllBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

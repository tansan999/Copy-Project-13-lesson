import { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Backdrop = (props) => {
  return <StyledBackdrop onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <StyledModal>
      <StyledContent>{props.children}</StyledContent>
    </StyledModal>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const { open } = props;
  return (
    open && (
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop onClose={props.onClose} />,
          portalElement
        )}
        {ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portalElement
        )}
      </Fragment>
    )
  );
};

export default Modal;

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const StyledModal = styled.div`
  position: fixed;
  background-color: white;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10000;
  transform: translate(-50%, 20%);
  top: 0%;
  left: 50%;
  margin-top: 100px;
`;

const StyledContent = styled.div`
  padding: 20px;
`;

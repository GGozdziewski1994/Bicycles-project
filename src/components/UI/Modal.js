import styled from "styled-components";

const Modal = styled.div`
      position: fixed;
      width: 30rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      border-radius: 7px;
      z-index: 100;

      @media only screen and (max-width: 500px) {
            width: 23rem;
      }
`;

export default Modal;
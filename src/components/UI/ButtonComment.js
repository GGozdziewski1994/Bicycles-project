import styled from "styled-components";

export const ButtonComment = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: #00125A;
  color: #D2CFD7;
  font-weight: bold;
  margin-left: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  &:hover {
    cursor: pointer;
    background: #213EB4;
  }
  &:disabled,
  :disabled:hover,
  :disabled:active {
    background: lightblue;
    color: white;
    cursor: not-allowed; 
  }

  @media only screen and (max-width: 768px) {
    padding: 0.35rem 0.6rem;
  }

  @media only screen and (max-width: 425px) {
    margin-left: 0;
  }
`;

export default ButtonComment;
import styled from "styled-components";

const AddComm = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  & .title {
    text-align: center;
    margin-bottom: 1rem;
  }
  & .comment {
    display: grid;
    grid-template-columns: 60% 40%;
    padding: 0.5rem;
    & textarea {
      grid-column: span 2;
      resize: none;
      padding: 0.5rem;
      border: none;
      border-radius: 5px;
      box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.12);
      font-family: inherit;
    }
    &__button {
      grid-column: 2;
      text-align: end;
      margin-top: 1rem;
    }
  }
`;

export default AddComm;
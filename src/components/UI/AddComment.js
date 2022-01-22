import styled from "styled-components";

const AddComment = styled.div`
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

  @media only screen and (max-width: 768px) {
    margin-top: 1.5rem;
    padding: 0.5rem 0;

    & .title {
      margin-bottom: 0.5rem;
    }

    & .comment {
      padding: 0 0.5rem;
    }
  }

  @media only screen and (max-width: 425px) {
    margin-top: 1rem;

    & .comment__button {
      grid-column: 2 span;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default AddComment;
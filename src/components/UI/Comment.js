import styled from "styled-components";

const Comment = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #fafafa;
  border-radius: 8px;

  & .tittle {
    text-align: center;
    margin-bottom: 1rem;
  }

  & .comment {
    padding: 1rem;
    margin-bottom: 2rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    & h4 {
      padding-bottom: 1rem;
    }
    & p {
      padding-bottom: 1rem;
    }
    &__buttons {
      display: flex;
      justify-content: end;
      &-remove {
        background: #E80C34;
        color: white;
        &:hover {
          background: #F85775;
        }
      }
    }
    &__form {
      display: grid;
      grid-template-columns: 10% 90%;
      & textarea {
        resize: none;
      }
      &-button {
        grid-column: 2;
        display: flex;
        justify-content: right;
        margin-top: 1rem;
      }
    }
  }
`;

export default Comment;
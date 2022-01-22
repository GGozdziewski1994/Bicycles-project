import styled from "styled-components";

const Comment = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #fafafa;
  border-radius: 8px;

  & .title {
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
      grid-template-columns: 15% 85%;
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

  @media only screen and (max-width: 768px) {
    padding: 0.5rem;
    margin-top: 1rem;

    & .comment {
      &__form {
        grid-template-columns: 25% 75%;
      }
    }

    & .title {
      margin-bottom: 0.5rem;
    }
  }

  @media only screen and (max-width: 425px) {
    & .comment {
      &__buttons {
        justify-content: space-between;
      }

      &__form-button {
        grid-column: 2 span;
        justify-content: space-between;
      }
    }
  }
`;

export default Comment;
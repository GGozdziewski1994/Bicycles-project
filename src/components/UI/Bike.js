import styled from "styled-components";

const Bike = styled.div`
    background: #C5CCE6;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
  
  & .bike {
    display: grid;
    &__img {
      grid-row: 1 / span 2;
      max-width: 200px;
      max-height: 200px;
      & img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
          transform: scale(1.03);
        }
      }
    }
    
    &__info {
      grid-column: 2;
      text-align: right;
      line-height: 2rem;
      font-weight: bold;
      font-size: 1.5rem;
      &--rating {
        display: grid;
        & button {
          border: none;
          background: transparent;
          font-size: 2rem;
          margin: 0;
          padding: 0;
          float: right;
          &:hover,
          :hover + button,
          :hover + button + button,
          :hover + button + button + button,
          :hover + button + button + button + button {
            color: #e7ff00;
            cursor: pointer;
          }
        }
        & p {
          font-size: 1rem;
        }
      }
    }

    &__add-comment {
      grid-column: 2;
      display: flex;
      justify-content: right;
      align-items: end;
      padding: 0.5rem 0;
      & button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        background: #969292;
        color: #dedcdc;
        font-weight: bold;
        cursor: pointer;
        &:hover {
          background: #806F6F;
        }
      }
    }
  }
  & .show-comments {
    padding-top: 0.5rem;
    text-align: center;
    & button {
      border: none;
      background: inherit;
      opacity: 0.5;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    & .bike {
      &__img {
        min-width: 150px;
        min-height: 150px;
      }

      &__info {
        font-size: 1rem;
        line-height: 1.5rem;
        &--rating {
          & button {
            font-size: 1.5rem;
          }
        }
      }

      &__add-comment {
        & button {
          padding: 0.35rem 0.5rem;
        }
      }
    }
  }

  @media only screen and (max-width: 425px) {
    padding: 0.75rem 0.25rem;

    & .bike {
      display: block;

      &__img {
        margin: 0 auto;
      }

      &__info {
        text-align: center;
        &--rating {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }

      &__add-comment {
        justify-content: center;
      }
    }
  }
`;

export default Bike;
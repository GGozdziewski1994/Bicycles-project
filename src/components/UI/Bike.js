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
      width: 200px;
      height: 200px;
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
      padding: 0.5rem;
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
`;

export default Bike;
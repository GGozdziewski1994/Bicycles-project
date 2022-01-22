import styled from "styled-components";

const NewBike = styled.div`
  & .model {
    padding: 2rem;
  }

  & .title {
    text-align: center;
  }

  & .control {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 20% 80%;

    & input, select {
      border: solid 1px #6c6262;
      font-size: 16px;
      padding: 0.25rem;
      border-radius: 5px;
      box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.15);
    }
    &-error {
      margin-top: 0.5rem;
      grid-column: 2;
      color: red;
    }
  }
  
  & .actions {
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
    &__button {
      margin: 0;
    }
  }

  & .invalid input {
    border-color: #b40e0e;
    background-color: #fddddd;
  }

  @media only screen and (max-width: 500px) {
    & .model {
      padding: 1rem;
    }
  }
`;

export default NewBike;
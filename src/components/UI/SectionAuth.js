import styled from "styled-components";

const SectionAuth = styled.section`
  margin: 10rem auto;
  width: 80%;
  max-width: 30rem;
  border-radius: 6px;
  background:#040B29;
  box-shadow: 0 4px 6px 2px rgba(0, 0, 0, 0.4);
  padding: 4rem;
  text-align: center;
  color: white;
  
  & .control {
    margin: 1rem 0;
    &-error {
      margin-top: 0.5rem;
      color: red;  
    }

    & label {
      display: block;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    & input {
      font: inherit;
      background: #A2B2F0;
      color: #061450;
      border-radius: 4px;
      border: 1px solid white;
      width: 100%;
      text-align: left;
      padding: 0.25rem;
    }
    &-admin {
      margin: 1.5rem 0;
      & :nth-child(n) {
        cursor: pointer;
        &:hover {
          
        }
      }
      & label {
        padding-left: 0.25rem;
        font-weight: bold;
      }
    }
  }
  
  & .actions {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    & button {
      cursor: pointer;
      font: inherit;
      color: white;
      background: #213EB4;
      border: 1px solid #213EB4;
      border-radius: 4px;
      padding: 0.5rem 2.5rem;
      &:hover {
        background-color: #A2B2F0;
        border-color: #213EB4;
      }
      &:disabled,
      :disabled:hover,
      :disabled:active {
        background: lightblue;
        color: white;
        cursor: not-allowed; 
      }
    }
    
    & .toggle {
      margin-top: 1rem;
      background-color: transparent;
      color: #A2B2F0;
      border: none;
      padding: 0.15rem 1.5rem;
      &:hover {
        background-color: transparent;
        color: #213EB4;
      }
    }
  }

  & .invalid input {
    border-color: #b40e0e;
    background-color: #fddddd;
  }
`;

export default SectionAuth;
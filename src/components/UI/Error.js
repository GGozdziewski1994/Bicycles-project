import styled from "styled-components";

const Error = styled.div`
  & .title {
        margin: 0;
        padding: 1rem;
        background: #ff2058;
        color: white;
        border-radius: 7px 7px 0 0;
      }
  
  & .children {
        padding: 1rem;
      }
  
  & .actions {
        display: flex;
        justify-content: flex-end;
        padding: 0 0.5rem;
        & button {
          font: inherit;
          background: #ff2058;
          padding: 0.5rem 2rem;
          color: white;
          border: 1px solid #ff2058;
          margin: 0.5rem 0;
          border-radius: 5px;
          cursor: pointer;
        }
        & :hover,
        :active {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
        }
        & :focus {
          outline: none;
        }
      }
`;

export default Error;
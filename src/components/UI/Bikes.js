import styled from "styled-components";

export const Bikes = styled.section`
  padding: 2rem 5rem;
  background: #eff2ff;

  & .control__button {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
    border-bottom: solid 1px white;
  }
`;

export const ButtonFilter = styled.button`
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  background: inherit;
  color: #5a5ad0;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    background: #E2E5FC;
  }
`;

export const ButtonAddNew = styled.button`
  padding: 0.5rem 1rem;
  background: #05165B;
  color: white;
  border-radius: 25px;
  border: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  &:hover {
    background: #213EB4;
  }
`;
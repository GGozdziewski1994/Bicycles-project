import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 4rem;
  background: #040B29 ;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;

  & a {
    text-decoration: none;
    color: #CDA71D;
    font-weight: bold;
  }

  & div {
    font-size: 2rem;
    color: #CDA71D;
  }

  & ul {
    list-style: none;
    display: flex;
    align-items: baseline;

    & li {
      margin: 0 1rem;
    }
  }
`;

export default Header;
import styled from "styled-components";

const Main = styled.main`
  position: absolute;
  right: 0;
  left: 250px;
  min-height: 100%;
  background-color: ${props => props.theme.layout.background};
`;

const Container = styled.div`
  max-width: 1140px;
  padding: 20px 40px;
`;

export { Main, Container };

import styled from "styled-components";

const Main = styled.main`
  position: absolute;
  right: 0;
  left: ${props => (props.extend ? 0 : 250)}px;
  min-height: 100%;
  background-color: ${props => props.theme.layout.background};
`;

const Container = styled.div`
  padding: 20px 40px;
  margin-top: 68px;
  height: 100%;
  min-height: calc(100vh - 68px);
`;

export { Main, Container };

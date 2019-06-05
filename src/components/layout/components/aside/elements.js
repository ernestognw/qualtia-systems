import styled from "styled-components";

const AsideContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 250px;
  height: 100%;
  max-height: 100%;
`;

const AsideBlock = styled.aside`
  position: relative;
  width: 100%;
  height: 100%;
  border-right: 1px solid ${props => props.theme.layout.border};
  background-color: ${props => props.theme.layout.background};
`;

const LogoContainer = styled.div`
  height: 68px;
  padding: 1rem 15px 1rem 30px;
`;

const Logo = styled.img`
  height: 35px;
  width: auto;
`;

export { AsideContainer, AsideBlock, LogoContainer, Logo };

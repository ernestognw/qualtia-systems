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

const Menu = styled.div`
  height: calc(100vh - 140px);
  overflow-y: auto;
`;

const TitleContainer = styled.div`
  padding: 0.5rem 15px 0.5rem 30px;
`;

const List = styled.ul`
  margin-bottom: 30px;
  list-style-type: none;
`;

const ListElement = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 0.3125rem 10px 0.3125rem 30px;
  border-left: 3px solid transparent;
  font-size: 0.875rem;
  font-weight: light;
  cursor: pointer;

  svg {
    font-size: 18px;
    margin-right: 10px;
  }

  ${props =>
    props.active &&
    `
    &::after {
      width: 2px;
      content: '';
      position: absolute;
      background-color: ${props.theme.color.primary};
      right: 0;
      height: 2rem;
    }

    svg {
      color: ${props.theme.color.primary};
    }
  `};

  &:hover {
    color: ${props => props.theme.color.primary};
  }
`;

export {
  AsideContainer,
  AsideBlock,
  LogoContainer,
  Logo,
  Menu,
  TitleContainer,
  List,
  ListElement
};

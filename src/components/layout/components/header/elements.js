import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  min-width: 100%;
  padding: 20px 40px;
  border-bottom: 1px solid ${props => props.theme.layout.border};
  background-color: #fff;
`;

export { HeaderContainer };

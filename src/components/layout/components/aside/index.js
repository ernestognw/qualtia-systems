import React from "react";
import {
  AsideContainer,
  AsideBlock,
  LogoContainer,
  Logo,
  Menu,
  TitleContainer,
  List,
  ListElement
} from "./elements";
import { Link, withRouter } from "react-router-dom";
import RoundHome from "react-md-icon/dist/RoundHome";
import RoundViewList from "react-md-icon/dist/RoundViewList";
import Typography from "components/common/typography";

const Aside = ({ location: { pathname } }) => (
  <AsideContainer>
    <AsideBlock>
      <LogoContainer>
        <Logo src="/static/images/brand/original-horizontal.svg" />
      </LogoContainer>
      <Menu>
        <TitleContainer>
          <Typography variant="heading" greyColor="lightGrey">
            MENU
          </Typography>
        </TitleContainer>
        <List>
          <Link to="/">
            <ListElement active={pathname === "/"}>
              <RoundHome />
              <Typography variant="heading">Home</Typography>
            </ListElement>
          </Link>
          <Link to="/history">
            <ListElement active={pathname.includes("history")}>
              <RoundViewList />
              <Typography variant="heading">Historial</Typography>
            </ListElement>
          </Link>
        </List>
      </Menu>
    </AsideBlock>
  </AsideContainer>
);

export default withRouter(Aside);

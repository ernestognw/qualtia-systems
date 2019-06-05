import React, { Fragment } from "react";
import Aside from "./components/aside/index";
import Header from "./components/header/index";
import { Main, Container } from "./elements";

const Layout = ({ children }) => (
  <Fragment>
    <Aside />
    <Main>
      <Header />
      <Container>{children}</Container>
    </Main>
  </Fragment>
);

export default Layout;

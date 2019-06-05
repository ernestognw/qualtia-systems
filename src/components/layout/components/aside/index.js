import React from "react";
import { AsideContainer, AsideBlock, LogoContainer, Logo } from "./elements";

const Aside = () => (
  <AsideContainer>
    <AsideBlock>
      <LogoContainer>
        <Logo src="/static/images/brand/original-horizontal.svg" />
      </LogoContainer>
    </AsideBlock>
  </AsideContainer>
);

export default Aside;

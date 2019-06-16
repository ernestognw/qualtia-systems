import styled from "styled-components";
import CommonTypography from "components/common/typography";

const Typography = styled(CommonTypography)`
  span {
    font-weight: bolder;
  }
`;

const Divider = styled.hr`
  border: 0.5px solid ${props => props.theme.color.primary};
  margin: 10px 0;
`;

export { Typography, Divider };

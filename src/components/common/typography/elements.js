import styled from "styled-components";

const H1 = styled.h1`
  font-size: ${props => props.theme.fontSize.heading1};
  margin: 0;
  font-weight: ${props => props.weight || "initial"};

  ${props => {
    switch (props.align) {
      case "right":
        return `text-align: right;`;
      case "left":
        return `text-align: left;`;
      case "center":
        return `text-align: center`;
      default:
        return `text-align: left;`;
    }
  }};

  ${props =>
    props.fontSize &&
    `
    font-size: ${props.fontSize};
    `};
  ${props =>
    props.marginT &&
    `
    margin-top: ${props.marginT}px;
  `};
  ${props =>
    props.marginL &&
    `
    margin-left: ${props.marginL}px;
  `};
  ${props =>
    props.marginR &&
    `
    margin-right: ${props.marginR}px;
  `};
  ${props =>
    props.marginB &&
    `
    margin-bottom: ${props.marginB}px;
  `};
  ${props =>
    props.gutterBottom &&
    `
    margin-bottom: 0.5rem;
  `};
  color: ${props => props.theme.color[props.color]};
  ${props => props.greyColor && `color: ${props.theme.grey[props.greyColor]};`};
  ${props => props.underline && `text-decoration: underline`};
`;

const H2 = styled.h2`
  font-size: ${props => props.theme.fontSize.heading2};
  margin: 0;
  font-weight: ${props => props.weight || "initial"};

  ${props => {
    switch (props.align) {
      case "right":
        return `text-align: right;`;
      case "left":
        return `text-align: left;`;
      case "center":
        return `text-align: center`;
      default:
        return `text-align: left;`;
    }
  }};

  ${props =>
    props.fontSize &&
    `
    font-size: ${props.fontSize};
    `};
  ${props =>
    props.marginT &&
    `
    margin-top: ${props.marginT}px;
  `};
  ${props =>
    props.marginL &&
    `
    margin-left: ${props.marginL}px;
  `};
  ${props =>
    props.marginR &&
    `
    margin-right: ${props.marginR}px;
  `};
  ${props =>
    props.marginB &&
    `
    margin-bottom: ${props.marginB}px;
  `};
  ${props =>
    props.gutterBottom &&
    `
    margin-bottom: 0.5rem;
  `};
  color: ${props => props.theme.color[props.color]};
  ${props => props.greyColor && `color: ${props.theme.grey[props.greyColor]};`};
  ${props => props.underline && `text-decoration: underline`};
`;

const H3 = styled.h3`
  font-size: ${props => props.theme.fontSize.heading3};
  margin: 0;
  font-weight: ${props => props.weight || "initial"};
  color: ${props => props.theme.color[props.color]};

  ${props => {
    switch (props.align) {
      case "right":
        return `text-align: right;`;
      case "left":
        return `text-align: left;`;
      case "center":
        return `text-align: center`;
      default:
        return `text-align: left;`;
    }
  }};

  ${props =>
    props.fontSize &&
    `
    font-size: ${props.fontSize};
    `};
  ${props =>
    props.marginT &&
    `
    margin-top: ${props.marginT}px;
  `};
  ${props =>
    props.marginL &&
    `
      margin-left: ${props.marginL}px;
    `};
  ${props =>
    props.marginR &&
    `
      margin-right: ${props.marginR}px;
    `};
  ${props =>
    props.marginB &&
    `
      margin-bottom: ${props.marginB}px;
    `};
  ${props =>
    props.gutterBottom &&
    `
      margin-bottom: 0.5rem;
    `};

  ${props => props.greyColor && `color: ${props.theme.grey[props.greyColor]};`};
  ${props => props.underline && `text-decoration: underline`};
`;

const H4 = styled.h4`
  font-size: ${props => props.theme.fontSize.heading4};
  margin: 0;
  font-weight: ${props => props.weight || "initial"};

  ${props => {
    switch (props.align) {
      case "right":
        return `text-align: right;`;
      case "left":
        return `text-align: left;`;
      case "center":
        return `text-align: center`;
      default:
        return `text-align: left;`;
    }
  }};

  ${props =>
    props.fontSize &&
    `
    font-size: ${props.fontSize};
    `};
  ${props =>
    props.marginT &&
    `
    margin-top: ${props.marginT}px;
  `};
  ${props =>
    props.marginL &&
    `
    margin-left: ${props.marginL}px;
  `};
  ${props =>
    props.marginR &&
    `
    margin-right: ${props.marginR}px;
  `};
  ${props =>
    props.marginB &&
    `
    margin-bottom: ${props.marginB}px;
  `};
  ${props =>
    props.gutterBottom &&
    `
    margin-bottom: 0.5rem;
  `};
  color: ${props => props.theme.color[props.color]};
  ${props => props.greyColor && `color: ${props.theme.grey[props.greyColor]};`};
  ${props => props.underline && `text-decoration: underline`};
`;

const H5 = styled.h5`
  font-size: ${props => props.theme.fontSize.heading5};
  margin: 0;
  font-weight: ${props => props.weight || "initial"};

  ${props => {
    switch (props.align) {
      case "right":
        return `text-align: right;`;
      case "left":
        return `text-align: left;`;
      case "center":
        return `text-align: center`;
      default:
        return `text-align: left;`;
    }
  }};

  ${props =>
    props.fontSize &&
    `
    font-size: ${props.fontSize}px;
    `};
  ${props =>
    props.marginT &&
    `
    margin-top: ${props.marginT}px;
  `};
  ${props =>
    props.marginL &&
    `
    margin-left: ${props.marginL}px;
  `};
  ${props =>
    props.marginR &&
    `
    margin-right: ${props.marginR}px;
  `};
  ${props =>
    props.marginB &&
    `
    margin-bottom: ${props.marginB}px;
  `};
  ${props =>
    props.gutterBottom &&
    `
    margin-bottom: 0.5rem;
  `};
  color: ${props => props.theme.color[props.color]};
  ${props => props.greyColor && `color: ${props.theme.grey[props.greyColor]};`};
  ${props => props.underline && `text-decoration: underline`};
`;

const H6 = styled.h6`
  font-size: ${props => props.theme.fontSize.heading6};
  margin: 0;
  font-weight: ${props => props.weight || "initial"};

  ${props => {
    switch (props.align) {
      case "right":
        return `text-align: right;`;
      case "left":
        return `text-align: left;`;
      case "center":
        return `text-align: center`;
      default:
        return `text-align: left;`;
    }
  }};

  ${props =>
    props.fontSize &&
    `
    font-size: ${props.fontSize};
    `};
  ${props =>
    props.marginT &&
    `
    margin-top: ${props.marginT}px;
  `};
  ${props =>
    props.marginL &&
    `
    margin-left: ${props.marginL}px;
  `};
  ${props =>
    props.marginR &&
    `
    margin-right: ${props.marginR}px;
  `};
  ${props =>
    props.marginB &&
    `
    margin-bottom: ${props.marginB}px;
  `};
  ${props =>
    props.gutterBottom &&
    `
    margin-bottom: 0.5rem;
  `};
  color: ${props => props.theme.color[props.color]};
  ${props => props.greyColor && `color: ${props.theme.grey[props.greyColor]};`};
  ${props => props.underline && `text-decoration: underline`};
`;

const P = styled.p`
  color: ${props => props.theme.color[props.color]};
  ${props =>
    props.greyColor &&
    `color: ${props.theme.grey[props.greyColor]};`} font-size: 1rem;
  margin: 0;
  font-weight: ${props => props.weight || "initial"};

  ${props => {
    switch (props.align) {
      case "right":
        return `text-align: right;`;
      case "left":
        return `text-align: left;`;
      case "center":
        return `text-align: center`;
      default:
        return `text-align: left;`;
    }
  }};

  ${props =>
    props.variant === "muted" &&
    `
    color: ${props.theme.grey.lightGrey};
  `};

  ${props =>
    props.variant &&
    `
    font-size: ${props.theme.fontSize[props.variant]};
  `};
  ${props =>
    props.fontSize &&
    `
    font-size: ${props.fontSize};
    `};

  ${props =>
    props.marginT &&
    `
    margin-top: ${props.marginT}px;
  `};

  ${props =>
    props.marginL &&
    `
    margin-left: ${props.marginL}px;
  `};
  ${props =>
    props.marginR &&
    `
    margin-right: ${props.marginR}px;
  `};
  ${props =>
    props.marginB &&
    `
    margin-bottom: ${props.marginB}px;
  `};
  ${props =>
    props.gutterBottom &&
    `
    margin-bottom: 0.35rem;
  `};
`;

export { H1, H2, H3, H4, H5, H6, P };

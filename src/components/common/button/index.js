import styled from "styled-components";

const Button = styled.button`
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  width: max-content;
  text-transform: ${props => (props.textNormal ? "initial" : "uppercase")};
  letter-spacing: 1px;
  font-family: "Lato";

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem
      ${props =>
        props.theme.color[
          props.color !== "gradient" ? props.color : "primary"
        ]}90;
  }

  ${props => {
    switch (props.size) {
      case "small":
        return `padding: .25rem .5rem`;
      case "large":
        return `padding: .875rem 1rem`;
      default:
        return `padding: .625rem 1.25rem`;
    }
  }};
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
    props.disabled &&
    `
      cursor: initial;
    `};
  ${props =>
    props.fullWidth &&
    `
        width: 100%;
    `};
  ${props => {
    switch (props.variant) {
      case "outlined":
        return `border: 1px solid ${
          props.theme.color[props.color || "default"]
        };
                    color: ${props.theme.color[props.color || "default"]};
                    background-color: transparent;
                    &:hover {
                      background: ${
                        props.theme.color[props.color || "default"]
                      };
                      color: #fff;
                      transition: 0.2s all;
                    }`;
      case "soft":
        return `background: ${props.theme.color[props.color || "default"]}64;
                    color: ${props.theme.color[props.color || "default"]}64;
                    &:hover {
                      box-shadow: 0 2px 1px -1px ${
                        props.theme.color[props.color || "default"]
                      }33,
                                  0 1px 1px 0 ${
                                    props.theme.color[props.color || "default"]
                                  }26,
                                  0 1px 3px 0 ${
                                    props.theme.color[props.color || "default"]
                                  }1A;
                    }`;
      case "link":
        return `background: transparent;
                    padding: 0;`;
      default:
        return `background: ${props.theme.color[props.color || "default"]};
                    color: #fff;
                    &:hover {
                      box-shadow: 0 2px 1px -1px ${
                        props.theme.color[props.color || "default"]
                      }33,
                                  0 1px 1px 0 ${
                                    props.theme.color[props.color || "default"]
                                  }26,
                                  0 1px 3px 0 ${
                                    props.theme.color[props.color || "default"]
                                  }1A;
                    }`;
    }
  }};
  ${props =>
    props.disabled &&
    `
        color: ${props.theme.grey.dark};
        background: ${props.theme.grey.veryLightGrey};
    `};

  ${props =>
    props.alignSelf &&
    `
			align-self: ${props.alignSelf};
		`};
`;

export default Button;

import styled from "styled-components";
import RoundArrowDropDown from "react-md-icon/dist/RoundArrowDropDown";

const Container = styled.div`
  position: relative;
  margin-top: 10px;
  width: 100%;

  ${props =>
    props.marginT &&
    `
    margin-top: ${props.marginT}px;
  `};
  ${props =>
    props.marginB &&
    `
    margin-bottom: ${props.marginB}px;
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
`;

const Label = styled.label`
  display: inline-block;
  font-size: 0.875rem;
  color: ${props => props.theme.color.default};
  text-align: left;
  margin-bottom: 10px;
`;

const Message = styled.div`
  font-size: 0.75rem;
  font-family: "Lato";
  color: ${props => props.theme.color.default};
  text-align: left;
  margin-bottom: 10px;
  margin-top: 10px;

  ${props =>
    props.success &&
    `
      color: ${props.theme.color.success} !important;
    `};
  ${props =>
    props.warning &&
    `
      color: ${props.theme.color.warning} !important;
    `};
  ${props =>
    props.error &&
    `
      color: ${props.theme.color.danger} !important;
    `};
`;

const PseudoInput = styled.input`
  background-color: #fff;
  font-family: "Lato";
  font-size: 0.875rem;
  border-radius: 5px;
  width: 100% !important;
  border: 1px solid ${props => props.theme.grey.lightGrey};
  padding: 0.625rem 0.75rem;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  ${props =>
    props.disabled &&
    `
      background-color: ${props.theme.grey.light}
    `}

  ${props =>
    props.status &&
    `
    color: white;
    font-weight: bold;
  `}

  ${props =>
    props.status &&
    props.success &&
    `
      background-color: ${props.theme.color.success} !important;
    `}
  
  ${props =>
    props.status &&
    props.warning &&
    `
      background-color: ${props.theme.color.warning} !important;
    `}
  
  ${props =>
    props.status &&
    props.error &&
    `
      background-color: ${props.theme.color.danger} !important;
    `}

  ${props =>
    props.align &&
    `
    text-align: ${props.align}
  `}

  ${props =>
    props.leftIcon &&
    `
    padding-left: 2.5rem;
    `};

  ${props =>
    props.prefix &&
    `
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    `};

  ${props =>
    props.sufix &&
    `
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    `};

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.color.secondary};
    ${props =>
      props.success &&
      `
        border: 1px solid ${props.theme.color.success} !important;
      `};
    ${props =>
      props.warning &&
      `
        border: 1px solid ${props.theme.color.warning} !important;
      `};
    ${props =>
      props.error &&
      `
        border: 1px solid ${props.theme.color.danger} !important;
      `};
  }

  ${props => props.theme.media.phone`
    width: auto;
  `};
`;

const PseudoSelect = styled.select`
  background-color: #fff;
  font-family: "Lato";
  font-size: 0.875rem;
  border-radius: 5px;
  width: 100% !important;
  border: 1px solid ${props => props.theme.grey.lightGrey};
  padding: 0.625rem 0.75rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  ${props =>
    !props.value &&
    `
    color: #808080;
  `};

  ${props =>
    props.leftIcon &&
    `
    padding-left: 2.5rem;
    `};

  ${props =>
    props.prefix &&
    `
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    `};

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.color.secondary};
    ${props =>
      props.success &&
      `
        border: 1px solid ${props.theme.color.success} !important;
      `};
    ${props =>
      props.warning &&
      `
        border: 1px solid ${props.theme.color.warning} !important;
      `};
    ${props =>
      props.error &&
      `
        border: 1px solid ${props.theme.color.danger} !important;
      `};
  }

  ${props =>
    props.placeholderColor &&
    `
		color: ${props.theme.grey.lightDark};
	`};

  ${props => props.theme.media.phone`
    width: auto;
  `};
`;

const LeftIconContainer = styled.div`
  position: absolute;
  display: block;
  left: 0;
  padding: 0.675rem 0.75rem;
  color: ${props => props.theme.grey.lightDark};
  font-size: 16px;

  ${props =>
    props.message &&
    `
    margin-top: 0px;
  `};

  ${props =>
    props.active &&
    `
	svg {
		color: ${props.theme.color.secondary};
    ${props.success &&
      `
      color: ${props.theme.color.success} !important;
    `};
  ${props.warning &&
    `
      color: ${props.theme.color.warning} !important;
    `};
  ${props.error &&
    `
      color: ${props.theme.color.danger} !important;
    `};
	}
`};
`;

const OptionsButton = styled(RoundArrowDropDown)`
  top: ${props => (props.label ? "50%" : "20%")};
  right: 0;
  color: rgba(0, 0, 0, 0.54);
  position: absolute;
  pointer-events: none;
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 24px;
`;

const InputGroup = styled.div`
  display: flex;
`;

const Prefix = styled.span`
  background-color: ${props => props.theme.grey.veryLightGrey};
  font-family: "Lato";
  font-size: 0.875rem;
  border-top-left-radius: 5px;
  color: ${props => props.theme.grey.lightGrey};
  border-bottom-left-radius: 5px;
  border: 1px solid ${props => props.theme.grey.lightGrey};
  border-right: none;
  padding: 0.625rem 0.75rem;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  ${props =>
    props.leftIcon &&
    `
    padding-left: 2.5rem;
    `};
`;

const Sufix = styled.span`
  background-color: ${props => props.theme.grey.veryLightGrey};
  font-family: "Lato";
  font-size: 0.875rem;
  border-top-right-radius: 5px;
  color: ${props => props.theme.grey.lightGrey};
  border-bottom-right-radius: 5px;
  border: 1px solid ${props => props.theme.grey.lightGrey};
  border-left: none;
  padding: 0.625rem 0.75rem;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

export {
  Container,
  PseudoInput,
  Label,
  Message,
  LeftIconContainer,
  PseudoSelect,
  OptionsButton,
  InputGroup,
  Prefix,
  Sufix
};

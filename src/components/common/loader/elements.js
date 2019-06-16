import styled, { keyframes } from "styled-components";

const ldsRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => (props.size ? `${props.size}px` : "35px")};
  height: ${props => (props.size ? `${props.size}px` : "35px")};
  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${props => (props.size ? `${props.size}px` : "35px")};
    height: ${props => (props.size ? `${props.size}px` : "35px")};
    border: 2px solid ${props => props.theme.color.primary};
    border-radius: 50%;
    animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props => props.theme.color.primary} transparent transparent
      transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }

  ${props =>
    props.alignSelf &&
    `
    align-self: ${props.alignSelf};
  `};

  ${props =>
    props.marginT &&
    `
    margin-top: ${props.marginT}px;
  `};
`;

export default LoaderContainer;

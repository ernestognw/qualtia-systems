import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    transform: translateX(500px);
    opacity: 0.5;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeInMobile = keyframes`
  from {
    transform: translateY(-500px);
    opacity: 0.5;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  color: #fff;
  width: 100%;
  padding: 0.85rem 1.25rem;
  background-color: ${props => props.theme.color[props.type]};
  border-radius: 4px;
  box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.09);
  margin-bottom: 10px;
  animation: ${props => (props.isGoingToBeRemoved ? fadeOut : fadeIn)} 0.4s ease;
  cursor: pointer;

  ${props => props.theme.media.phone`
    animation: ${props.isGoingToBeRemoved ? fadeOut : fadeInMobile} 0.4s ease;
  `}
`;

const CloseContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  font-size: 20px;
`;

export { Container, CloseContainer, TextContainer, MainIconContainer };

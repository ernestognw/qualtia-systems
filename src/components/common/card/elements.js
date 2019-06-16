import styled from "styled-components";

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: ${props => props.theme.shadow};
  transition: 0.5s all;
  border-radius: ${props => props.theme.radius};
  
  ${props => props.theme.media.tablet`
    margin: 20px 0;
    margin-bottom: 20px;
  `}

  ${props =>
    props.marginT &&
    `
    margin-top: ${props.marginT}px;
  `}

  ${props =>
    props.marginL &&
    `
    margin-left: ${props.marginL}px;
  `}

  ${props =>
    props.marginR &&
    `
    margin-right: ${props.marginR}px;
  `}

  ${props =>
    props.marginB &&
    `
    margin-bottom: ${props.marginB}px;
  `}

  &:hover {
    box-shadow: ${props => props.theme.shadowHover};
    transition: 0.5s all;
  }
`;

const CardHeaderContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.grey.veryLightGrey};
  padding: 0.75rem 1.25rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #fff;
`;

const HeaderTitle = styled.h5`
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0;
  color: ${props => props.theme.color.default};
`;

const HeaderSubtitle = styled.h6`
  font-size: 0.625rem;
  text-transform: uppercase;
  margin: 4px 0;
  font-weight: 600;
  color: ${props => props.theme.grey.lightDark};
`;

const CardBody = styled.div`
  padding: 1.25rem;
  flex: 1 1 auto;
`;

const CardFooter = styled.div`
  padding: 1.25rem 1.5rem;
  border-top: 1px solid rgba(224, 224, 224, 1);
  background-color: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export {
  Card,
  CardHeaderContainer,
  CardBody,
  CardFooter,
  HeaderTitle,
  HeaderSubtitle
};

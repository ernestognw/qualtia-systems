import styled from "styled-components";
import CommonButton from "components/common/button";

const Row = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

const Column = styled.div`
  display: flex;
  margin: 0px 10px;
  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  ${props =>
    props.basis &&
    `
  flex-basis: ${props.basis}%;
  `};
`;

const Button = styled(CommonButton)`
  margin-top: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: -webkit-fill-available;
`;

export { Row, Column, Button, Container };

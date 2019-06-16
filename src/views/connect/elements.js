import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: -webkit-fill-available;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  max-width: 400px;
  width: 100%;
  margin-bottom: 20px;
  flex-direction: column;
`;

const Disconnected = styled.img`
  max-width: 400px;
  padding: 20px;
  margin-bottom: 30px;
  max-height: 200px;
`;

export { Container, Row, Disconnected };

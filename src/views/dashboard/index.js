import React, { Component } from "react";
import Input from "components/common/input";
import { Column, Row, Button, Container } from "./elements";
import { sendDataSerialPort } from "renderer-events";
class Dashboard extends Component {
  sendMessage = () => {
    sendDataSerialPort("prueba");
  };

  render() {
    return (
      <Container>
        <Row>
          <Column basis="75">
            <Input disabled label="Peso" sufix="gr." />
          </Column>
          <Column basis="25">
            <Input
              status
              disabled
              success
              value="ESTABLE"
              label="Estabilidad"
            />
          </Column>
        </Row>
        <Row>
          <Column basis="30">
            <Input label="SKU" select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Input>
          </Column>
          <Column basis="70">
            <Input label="Nombre del producto" disabled />
          </Column>
        </Row>
        <Row>
          <Column basis="30">
            <Input label="Cantidad de piezas" type="number" sufix="pzs." />
          </Column>
          <Column basis="70" />
        </Row>
        <Button
          onClick={this.sendMessage}
          fullWidth
          marginT="auto"
          color="gradient"
        >
          Enviar
        </Button>
      </Container>
    );
  }
}

export default Dashboard;

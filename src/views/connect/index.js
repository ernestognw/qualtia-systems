import React, { Component } from "react";
import { Container, Row, Disconnected } from "./elements";
import Input from "components/common/input";
import Button from "components/common/button/index";
import Typography from "components/common/typography";

class Connect extends Component {
  render() {
    const { ports, handlePortSelect, connect, outCOM, inCOM } = this.props;
    return (
      <Container>
        <Disconnected src="/static/images/status/no-connection.svg" />
        <Typography variant="headingTitle">Sin conexión serial</Typography>
        <Typography variant="muted" marginB="30">
          La báscula y el codificador no están conectados
        </Typography>
        <Row>
          <Input
            value={inCOM}
            onChange={handlePortSelect}
            name="inCOM"
            prefix="Input"
            select
          >
            <option value="" hidden>
              Selecciona entrada
            </option>
            {ports &&
              ports.map(
                port =>
                  port.comName !== outCOM && (
                    <option key={port.comName} value={port.comName}>
                      {port.comName}
                    </option>
                  )
              )}
          </Input>
          <Input
            value={outCOM}
            onChange={handlePortSelect}
            name="outCOM"
            prefix="Output"
            select
          >
            <option value="" hidden>
              Selecciona salida
            </option>
            {ports &&
              ports.map(
                port =>
                  port.comName !== inCOM && (
                    <option key={port.comName} value={port.comName}>
                      {port.comName}
                    </option>
                  )
              )}
          </Input>
          <Button onClick={connect} marginT="10" color="gradient" fullWidth>
            Connect
          </Button>
        </Row>
      </Container>
    );
  }
}

export default Connect;

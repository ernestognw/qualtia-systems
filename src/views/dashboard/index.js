import React, { Component } from "react";
import Input from "components/common/input";
import { Column, Row, Button, Container } from "./elements";
import { serial } from "renderer-events";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      stability: false
    };
  }

  removeListeners = () => {
    const { inCOM, outCOM } = this.props;
    serial.removeListeners(inCOM);
    serial.removeListeners(outCOM);
  };

  componentDidMount = () => {
    const { inCOM, outCOM } = this.props;

    serial.listen(outCOM, (_, data) => {
      console.log(data);
    });

    serial.listen(inCOM, (_, data) => {
      this.setState({
        weight: Number(data.slice(2, 9)),
        stability: data[11] === " "
      });
    });
  };

  sendMessage = () => {
    const { outCOM } = this.props;
    serial.send({
      message: Buffer.from("0,ECHO\r\n", "utf8").toString("hex"),
      comName: outCOM
    });
  };

  componentWillUnmount = () => {
    this.removeListeners();
  };

  render() {
    const { weight, stability } = this.state;
    return (
      <Container>
        <Row>
          <Column basis="75">
            <Input disabled value={weight} label="Peso" sufix="gr." />
          </Column>
          <Column basis="25">
            <Input
              status
              disabled
              success={stability}
              warning={false}
              error={!stability}
              value={stability ? "ESTABLE" : "NO ESTABLE"}
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
          disabled={!stability}
        >
          Enviar
        </Button>
      </Container>
    );
  }
}

export default Dashboard;

import React, { Component } from "react";
import Input from "components/common/input";
import toast from "components/common/toast";
import Loader from "components/common/loader";
import { Column, Row, Button, Container } from "./elements";
import { serial } from "renderer-events";
import client from "client";

const products = {
  12324243: "Carne de res",
  12312230: "Carne de puerco"
};
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      stability: false,
      SKU: "",
      piecesQty: 0,
      sending: false
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
      this.setState({
        sending: false
      });
      toast(
        "Información enviada",
        "Se envió correctamente el mensaje al codificador"
      );
    });

    serial.listen(inCOM, (_, data) => {
      this.setState({
        weight: Number(data.slice(2, 9)),
        stability: data[11] === " ",
        unity: data[10]
      });
    });
  };

  sendMessage = async () => {
    const { weight, SKU, unity, piecesQty } = this.state;
    if (!weight || !SKU || !unity || !piecesQty) {
      toast.warning(
        "Información incompleta",
        "Para poder enviar el mensaje a la báscula necesitas especificar todos los campos"
      );
    } else {
      const { outCOM } = this.props;
      this.setState({
        sending: true
      });
      try {
        await client.post("label", {
          piecesQty,
          weight,
          unity,
          SKU,
          productName: products[SKU]
        });
        toast(
          "Enviado a base de datos",
          "Los datos de la etiqueta generada han sido enviados a la base de datos"
        );
        serial.send({
          message: Buffer.from(
            `0,ECHO,${weight},${unity},${SKU},${
              products[SKU]
            },${piecesQty}\r\n`,
            "utf8"
          ).toString("hex"),
          comName: outCOM
        });
      } catch (err) {
        toast.error(
          "Ocurrió un error",
          "Verifica las conexiones seriales y de internet"
        );
      }
    }
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  componentWillUnmount = () => {
    this.removeListeners();
  };

  render() {
    const { weight, stability, SKU, unity, piecesQty, sending } = this.state;
    return (
      <Container>
        <Row>
          <Column basis="75">
            <Input disabled value={weight} label="Peso" sufix={unity} />
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
            <Input
              value={SKU}
              name="SKU"
              onChange={this.handleChange}
              label="SKU"
              select
            >
              <option value="" hidden disabled>
                Selecciona
              </option>
              {Object.keys(products).map(productSKU => (
                <option key={productSKU} value={productSKU}>
                  {productSKU}
                </option>
              ))}
            </Input>
          </Column>
          <Column basis="70">
            <Input
              label="Nombre del producto"
              value={products[SKU] || ""}
              disabled
            />
          </Column>
        </Row>
        <Row>
          <Column basis="30">
            <Input
              label="Cantidad de piezas"
              name="piecesQty"
              value={piecesQty}
              onChange={this.handleChange}
              type="number"
              min="0"
              sufix="pzs."
            />
          </Column>
          <Column basis="70" />
        </Row>
        <Button
          onClick={this.sendMessage}
          fullWidth
          marginT="auto"
          color="gradient"
          disabled={!stability || sending}
        >
          {sending ? <Loader size="15" /> : "Enviar"}
        </Button>
      </Container>
    );
  }
}

export default Dashboard;

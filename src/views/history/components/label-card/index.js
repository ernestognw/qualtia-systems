import React from "react";
import { Card, CardBody } from "components/common/card";
import moment from "moment";
import { Typography, Divider } from "./elements";

const LabelCard = ({
  label: { weight, productName, _id, SKU, createdAt, unity, piecesQty }
}) => (
  <Card marginB="10">
    <CardBody>
      <Typography marginB="5">
        <span>ID:</span> {_id}
      </Typography>
      <Divider />
      <Typography variant="muted" marginB="5">
        <span>Peso:</span> {weight} {unity}
      </Typography>
      <Typography variant="muted" marginB="5">
        <span>Nombre del producto:</span> {productName}
      </Typography>
      <Typography variant="muted" marginB="5">
        <span>SKU:</span> {SKU}
      </Typography>
      <Typography variant="muted" marginB="5">
        <span>Creado en:</span> {moment(createdAt).format("LLL")}
      </Typography>
      <Typography variant="muted" marginB="5">
        <span>Cantidad de piezas:</span> {piecesQty}
      </Typography>
    </CardBody>
  </Card>
);

export default LabelCard;

import React, { Component, Fragment } from "react";
import client from "client";
import toast from "components/common/toast";
import Loader from "components/common/loader";
import LabelCard from "./components/label-card/index";
import { LoaderContainer, TitleBlock, Title, Input, Image } from "./elements";
import Typography from "components/common/typography";

class InputBascula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      loading: true,
      page: 1,
      results: 10
    };
  }

  handleChange = async ({ target: { name, value } }) => {
    await this.setState({
      [name]: value
    });
    this.updateHistory();
  };

  componentDidMount = () => {
    this.updateHistory();
  };

  updateHistory = async () => {
    try {
      const { page, results } = this.state;
      this.setState({
        loading: true
      });
      const { data } = await client.get(
        `label?page=${page}&results=${results}`
      );
      this.setState({
        labels: data,
        loading: false
      });
    } catch (err) {
      toast.error(
        "Ocurrió un error",
        "No se ha podido obtener la lista de etiquetas, verifica la conexión a internet"
      );
    }
  };

  render() {
    const { loading, labels, page, results } = this.state;
    return (
      <Fragment>
        {loading ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          <Fragment>
            <TitleBlock>
              <Title variant="heading5">Historial</Title>
              <Input
                value={results}
                label="Resultados"
                select
                name="results"
                onChange={this.handleChange}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </Input>
              <Input
                value={page}
                min="1"
                type="number"
                label="Página"
                name="page"
                onChange={this.handleChange}
              />
            </TitleBlock>
            {labels.map(label => (
              <LabelCard label={label} />
            ))}
            {labels.length === 0 && (
              <LoaderContainer>
                <Image src="/static/images/status/no-results.svg" />
                <Typography marginT="20" variant="headingTitle">
                  No hay resultados
                </Typography>
                <Typography variant="muted">
                  Los parámetros de búsqueda especificados no tienen ningún
                  resultado
                </Typography>
              </LoaderContainer>
            )}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default InputBascula;

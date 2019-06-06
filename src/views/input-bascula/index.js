import React, { Component, Fragment } from "react";
import Typography from "components/common/typography";
import {
  startSerialPort,
  listenSerialPort,
  stopSerialPort
} from "renderer-events";

class InputBascula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weights: []
    };
  }

  componentDidMount = () => {
    startSerialPort();
    listenSerialPort(this.setNewWeight);
    window.addEventListener("beforeunload", stopSerialPort);
  };

  setNewWeight = (_, newWeight) => {
    const { weights } = this.state;
    this.setState({
      weights: [...weights, newWeight]
    });
  };

  componentWillUnmount = () => {
    stopSerialPort();
  };

  render() {
    const { weights } = this.state;
    return (
      <Fragment>
        {weights.map((weight, id) => (
          <Typography key={id}>{weight}</Typography>
        ))}
      </Fragment>
    );
  }
}

export default InputBascula;

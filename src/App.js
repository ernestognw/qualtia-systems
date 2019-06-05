import React, { Component } from "react";
import { startSerialPort, listenSerialPort } from "./renderer-events";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weights: []
    };
  }

  componentDidMount = () => {
    startSerialPort();
    listenSerialPort(this.setNewWeight);
  };

  setNewWeight = (_, newWeight) => {
    const { weights } = this.state;
    this.setState({
      weights: [...weights, newWeight]
    });
  };

  render() {
    const { weights } = this.state;
    return (
      <div>
        {weights.map((weight, id) => (
          <p key={id}>{weight}</p>
        ))}
      </div>
    );
  }
}

export default App;

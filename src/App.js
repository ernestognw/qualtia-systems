import React, { Component } from "react";
import Layout from "components/layout";
import { Switch, Route } from "react-router-dom";
import History from "./views/history";
import Dashboard from "./views/dashboard";
import Connect from "./views/connect";
import { serial } from "renderer-events";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ports: null,
      isConnected: false,
      outCOM: "",
      inCOM: ""
    };
  }

  disconnect = () => {
    const { inCOM, outCOM } = this.state;
    serial.stop(inCOM);
    serial.stop(outCOM);
    serial.removeListeners(inCOM);
    serial.removeListeners(outCOM);
  };

  connect = async () => {
    const { inCOM, outCOM } = this.state;
    await serial.connect(inCOM);
    await serial.connect(outCOM);
    serial.start(inCOM);
    serial.start(outCOM);
    window.addEventListener("beforeunload", this.disconnect);
    this.setState({
      isConnected: true
    });
  };

  handlePortSelect = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  componentDidMount = async () => {
    const ports = await serial.getPorts();
    this.setState({
      ports
    });
  };

  componentWillUnmount = () => {
    this.disconnect();
  };

  render() {
    const { ports, isConnected, outCOM, inCOM } = this.state;
    return (
      <Layout hideAside={!isConnected}>
        {isConnected ? (
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Dashboard outCOM={outCOM} inCOM={inCOM} />}
            />
            <Route path="/history" component={History} />
          </Switch>
        ) : (
          <Connect
            handlePortSelect={this.handlePortSelect}
            outCOM={outCOM}
            inCOM={inCOM}
            connect={this.connect}
            ports={ports}
          />
        )}
      </Layout>
    );
  }
}

export default App;

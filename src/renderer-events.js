import { ipcRenderer } from "electron";

const startSerialPort = () => {
  ipcRenderer.send("start");
};

const stopSerialPort = () => {
  ipcRenderer.send("stop");
  ipcRenderer.removeAllListeners("data");
};

const listenSerialPort = handler => {
  ipcRenderer.on("data", handler);
};

const sendDataSerialPort = message => {
  ipcRenderer.send("send", message);
};

export {
  startSerialPort,
  stopSerialPort,
  listenSerialPort,
  sendDataSerialPort
};

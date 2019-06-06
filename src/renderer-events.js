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

export { startSerialPort, stopSerialPort, listenSerialPort };

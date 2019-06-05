import { ipcRenderer } from "electron";

const startSerialPort = () => {
  ipcRenderer.send("start");
};

const listenSerialPort = handler => {
  ipcRenderer.on("data", handler);
};

export { startSerialPort, listenSerialPort };

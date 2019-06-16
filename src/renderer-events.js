import { ipcRenderer } from "electron";

const serial = {
  start: comName => {
    ipcRenderer.send("start", comName);
  },
  stop: comName => {
    ipcRenderer.send("stop", comName);
  },
  removeListeners: comName => {
    ipcRenderer.removeAllListeners(comName);
  },
  listen: (event, handler) => {
    ipcRenderer.on(event, handler);
  },
  send: message => {
    ipcRenderer.send("send", message);
  },
  getPorts: () =>
    new Promise(resolve => {
      ipcRenderer.send("get-ports");
      ipcRenderer.once("ports-list", (_, ports) => {
        resolve(ports);
      });
    }),
  connect: comName =>
    new Promise((resolve, reject) => {
      ipcRenderer.send("connect", comName);
      ipcRenderer.once(`connected-${comName}`, resolve);
    })
};

export { serial };

import { ipcMain } from "electron";
import SerialPort from "serialport";
import Readline from "@serialport/parser-readline";
// import input from "./mocks/input";
// import output from "./mocks/output";

// App needs to be initialized by this import statement
import "./app";

let ports = {};

ipcMain.on("get-ports", async event => {
  const portsList = await SerialPort.list();
  portsList.forEach(({ comName }) => {
    ports[comName] = {};
  });
  event.sender.send("ports-list", portsList);
});

ipcMain.on("connect", (event, comName) => {
  ports[comName].port = new SerialPort(
    comName,
    {
      baudRate: 115200
    },
    err => {
      if (err) {
        return console.log("Error: ", err.message);
      }
      ports[comName].parser = ports[comName].port.pipe(
        new Readline({ delimiter: "\r\n" })
      );
      event.sender.send(`connected-${comName}`);
    }
  );
});

ipcMain.on("start", (event, comName) => {
  ports[comName].parser.on("data", data => {
    console.log(data);
    event.sender.send(comName, data);
  });
});

ipcMain.on("stop", (event, comName) => {
  ports[comName].port.close();
});

ipcMain.on("send", (event, { comName, message }) => {
  ports[comName].port.write(message, "hex", err => {
    if (err) {
      console.log(err);
    }
  });
});

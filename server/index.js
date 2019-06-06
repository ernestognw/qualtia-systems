import { ipcMain } from "electron";
import Readline from "@serialport/parser-readline";
import port from "./mocks/input";

import "./app";

const parser = port.pipe(new Readline({ delimiter: "\r\n" }));

ipcMain.on("start", event => {
  parser.on("data", data => {
    event.sender.send("data", data);
  });
});

ipcMain.on("stop", event => {
  parser.removeAllListeners("data");
});

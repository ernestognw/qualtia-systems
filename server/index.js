import { ipcMain } from "electron";
import Readline from "@serialport/parser-readline";
import input from "./mocks/input";
import output from "./mocks/output";

// App needs to be initialized by this import statement
import "./app";

const parser = input.pipe(new Readline({ delimiter: "\r\n" }));

ipcMain.on("start", event => {
  parser.on("data", data => {
    event.sender.send("data", data);
  });
});

ipcMain.on("stop", event => {
  parser.removeAllListeners("data");
});

ipcMain.on("send", (event, message) => {
  output.write(message, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Message ${message} written`);
    }
  });
});

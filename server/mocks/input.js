import SerialPort from "@serialport/stream";
import MockBinding from "@serialport/binding-mock";

SerialPort.Binding = MockBinding;

// Create a port and enable the echo and recording.
MockBinding.createPort("/dev/input");

const input = new SerialPort("/dev/input");

const getPolarity = () => {
  return Math.random() > 0.5 ? " " : "-";
};

const getUnity = () => {
  return Math.random() > 0.5 ? "kg" : "g";
};

const getWeight = unity => {
  let base = 30;

  if (unity === "g") {
    base *= 100;
  }

  const weight = (Math.random() * base).toFixed(1).replace(".", "");

  return "0".repeat(7 - weight.length) + weight;
};

const getStability = () => {
  return Math.random() > 0.9 ? "?" : " ";
};

const getLegend = () => {
  const rand = Math.random();
  if (rand > 1 / 3) {
    if (rand < 2 / 3) {
      return "NET";
    }
    return "T";
  } else {
    return "G";
  }
};

setInterval(() => {
  const polarity = getPolarity();
  const unity = getUnity();
  const weight = getWeight(unity);
  const stability = getStability();
  const legend = getLegend();
  input.write(`${polarity} ${weight} ${unity}${stability}${legend}\r\n`);
}, 1000);

export default input;

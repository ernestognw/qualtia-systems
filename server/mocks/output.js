import SerialPort from "@serialport/stream";
import MockBinding from "@serialport/binding-mock";

SerialPort.Binding = MockBinding;

// Create a port and enable the echo and recording.
MockBinding.createPort("/dev/output", { echo: true, record: true });

const output = new SerialPort("/dev/output");

export default output;

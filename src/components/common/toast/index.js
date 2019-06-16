import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import ToastComponent from "./components/toast-component";

const defaultOptions = {
  autoClose: 3000
};

const createToast = (type, title, message, options = defaultOptions) => {
  // Inside of component because if we put this out, ssr would crash,
  // due to inexistence of document at server
  const toastRoot = document.getElementById("toast");

  const toastContainer = document.createElement("div");
  toastRoot.appendChild(toastContainer);

  const removeElements = () => {
    ReactDOM.unmountComponentAtNode(toastContainer);
    toastRoot.removeChild(toastContainer);
  };

  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <ToastComponent
        removeElements={removeElements}
        title={title}
        message={message}
        type={type}
        options={options}
      />
    </ThemeProvider>,
    toastContainer
  );
};

const toast = (title, message, options) =>
  createToast("primary", title, message, options);
toast.secondary = (title, message, options) =>
  createToast("secondary", title, message, options);
toast.success = (title, message, options) =>
  createToast("success", title, message, options);
toast.info = (title, message, options) =>
  createToast("info", title, message, options);
toast.warning = (title, message, options) =>
  createToast("warning", title, message, options);
toast.error = (title, message, options) =>
  createToast("danger", title, message, options);

export default toast;

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CustomTheme from "./CustomTheme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={CustomTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import PeopleProvider from "./providers/PeopleProvider";

ReactDOM.render(
  // <PeopleProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  // </PeopleProvider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { SushiServiceProvider } from "./components/sushi-service-context";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import SushiService from "./services/sushi-service";

import "./index.scss";

const sushiService = new SushiService();

ReactDOM.render(
  <Provider store={store}>
    <SushiServiceProvider value={sushiService}>
      <Router>
        <App />
      </Router>
    </SushiServiceProvider>
  </Provider>,
  document.getElementById("root")
);

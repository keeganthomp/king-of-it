import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import BaseLayout from "./components/BaseLayout";
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <BaseLayout />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

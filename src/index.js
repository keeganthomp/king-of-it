import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./store";
import { Provider } from "react-redux";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Profile from './components/Profile'
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/profile/:currentUser" component={Profile} />
        <Route path="/auth/login" component={LoginPage} />
        <Route path="/auth/signup" component={SignupPage} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

import React, { Component } from "react";
import "../styles/App.css";
import HomePage from "./HomePage";

class BaseLayout extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default BaseLayout;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentUser } from "../actions/";
import "../styles/App.css";

class Profile extends Component {
  componentDidMount() {
    console.log("MOUNTED PROFILE");
    fetch("http://localhost:7000/user/user")
      .then(response => response.json())
      .then(userData => console.log("WOOOOOOOOO",userData))
      .catch(err => console.log("ERRORRR",err));
  }
  render() {
    console.log("this propss", this.props);
    return (
      <div>
        <h1>Profile Page</h1>
        <h2>HI {this.props.match.params.currentUser}</h2>
        <Link to={`/`}>
          <button>Home</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  getCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

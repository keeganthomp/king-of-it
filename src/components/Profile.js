import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentUser } from "../actions/";
import "../styles/App.css";

class Profile extends Component {
  componentDidMount() {
    console.log("MOUNTED PROFILE");
    fetch("http://localhost:7000/auth/user")
      .then(response => response.json())
      .then(userData => getCurrentUser(userData.data.user))
      .catch(err => console.log("ERRORRR", err));
  }
  render() {
    console.log("this propss", this.props);
    return (
      <div>
        <h1>Profile Page</h1>
        <h2>HI {this.props.user.username}</h2>
        <Link to={`/`}>
          <button>Home</button>
        </Link>
        <p>Points Earned: {this.props.user.points}</p>
        <p>Challenges Completed: {this.props.user.challenges_completed}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.user };
};

const mapDispatchToProps = dispatch => ({
  getCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

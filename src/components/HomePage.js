import React, { Component } from "react";
import { connect } from "react-redux";
import ImageUploader from './ImageUploader';
import ImageDisplay from './ImageDisplay';
import {Link} from 'react-router-dom';
import "../styles/App.css";



class HomePage extends Component {
  render() {
    return (
      <div>
        <h1 className="typewriter">Challenge.Me</h1>
        <h3>
          {this.props.dailyChallenge} | 40pts
        </h3>
        <Link to={`/auth/login`}><button>Login</button></Link>
        <Link to={`/auth/signup`}><button>Signup</button></Link>
        <ImageUploader/>
        <ImageDisplay/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  dailyChallenge: state.dailyChallenge
});

export default connect(mapStateToProps)(HomePage);

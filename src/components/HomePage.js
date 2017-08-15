import React, { Component } from "react";
import { connect } from "react-redux";
import ImageUploader from './ImageUploader';
import ImageDisplay from './ImageDisplay';


class HomePage extends Component {
  render() {
    return (
      <div>
        <h1 className="typewriter">Challenge.Me</h1>
        <h3>
          {this.props.dailyChallenge} | 40pts
        </h3>
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

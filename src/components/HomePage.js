import React, { Component } from "react";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Challenge Of The Day</h1>
        <h3>
          {this.props.dailyChallenge}
        </h3>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  dailyChallenge: state.dailyChallenge
});

export default connect(mapStateToProps)(HomePage);

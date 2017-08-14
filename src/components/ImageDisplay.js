import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getInitialImages } from "../actions";

class ImageDisplay extends Component {
  componentWillMount() {
    this.props.getInitialImages();
  }
  render() {
    let images = this.props.images.map((e, i) => {
      return (
        <div className="image" key={i}>
          {e.secure_url}
        </div>
      );
    });
    return (
      <div className="imageContainer">
        {images}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { images: state.images };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getInitialImages}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageDisplay);

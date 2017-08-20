import React, { Component } from "react";
import { connect } from "react-redux";
import { initialImages, getErrors } from "../actions/";

class ImageDisplay extends Component {
  componentWillMount() {
    console.log("MOUNTED");
    fetch("http://localhost:7000/api/images")
      .then(response => response.json())
      .then(initImages => this.props.initialImages(initImages.resources))
      .catch(err => this.props.getErrors(err));
  }
  render() {
    let imgStyle = {
      width: "30%",
      height: "33%",
      margin: "5px"
    };

    let imgContainer = {
      margin: "2%",
      display: "flex",
      alignItems: "baseline",
      flexWrap: "wrap",
      justifyContent: "space-around"
    };

    console.log("THIS>PROPPPSSSS", this.props);

    if (this.props.errors) {
      console.log("::::::::", this.props.errors);
      return (
        <div>
          <h1>
            sorry this page has {this.props.errors}
          </h1>
        </div>
      );
    } else {
      let images = this.props.images.map((e, i) => {
        console.log("GFGDGSDFGSDFGSDFGSDFG");
        return <img key={i} style={imgStyle} src={e.secure_url} alt={i} />;
      });
      return (
        <div style={imgContainer}>
          {images}
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { images: state.images, errors: state.hasErrored };
};

const mapDispatchToProps = dispatch => ({
  initialImages,
  getErrors
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageDisplay);

import React, { Component } from "react";
import { connect } from "react-redux";
import { initialImages } from "../actions/";

class ImageDisplay extends Component {
  componentWillMount() {
    console.log("MOUNTED");
    fetch("http://localhost:7000/api/images")
      .then(response => response.json())
      // .then(initImages => console.log("IMAGESSS", initImages.resources))
      .then(initImages => this.props.initialImages(initImages.resources));
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

const mapStateToProps = (state, ownProps) => {
  return { images: state.images };
};

const mapDispatchToProps = dispatch => ({
  initialImages
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageDisplay);

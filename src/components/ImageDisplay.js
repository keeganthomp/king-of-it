import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { getInitialImages } from "../actions";

class ImageDisplay extends Component {
  componentWillMount() {
    console.log("MOUTNINGGGGGG");
    fetch("/api/images")
      .then(response => response.json())
      .then(images => console.log(":::::::", images));
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

    let images = this.props.images.map((e, i) => {
      console.log("GFGDGSDFGSDFGSDFGSDFG");
      return <img style={imgStyle} src={e.secure_url} alt={i} />;
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

const mapDispatchToProps = dispatch => {
  // return bindActionCreators({getInitialImages}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageDisplay);

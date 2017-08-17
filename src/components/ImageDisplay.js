import React, { Component } from "react";
import { connect } from "react-redux";


class ImageDisplay extends Component {
  componentWillMount() {
    console.log("MOUTNINGGGGGG");
    fetch("http://localhost:7000/api/images")
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

import React, { Component } from "react";
import Dropzone from "react-dropzone";
import sha1 from "sha1";
import superagent from "superagent";
import { updateImages } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ImageUploader extends Component {
  uploadFile(files) {
    const image = files[0];
    const cloudName = "keezee";
    const API_SECRET = "MPfnC3smU0G-vHs-GC2YBZHz0Ww";
    const URL = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const timeStamp = Date.now() / 1000;
    const uploadPreset = "omvdxu9s";
    const paramString = `timestamp=${timeStamp}&upload_preset=${uploadPreset}${API_SECRET}`;
    const signature = sha1(paramString);

    const params = {
      api_key: "139167162543316",
      timestamp: timeStamp,
      upload_preset: uploadPreset,
      signature: signature
    };

    let uploadRequest = superagent.post(URL);
    uploadRequest.attach("file", image);
    Object.keys(params).forEach(key => {
      uploadRequest.field(key, params[key]);
    });

    uploadRequest.end((err, response) => {
      if (err) {
        return err;
      }
      let uploaded = response.body;
      this.props.updateImages(uploaded);
    });
  }

  let 

  render() {
    return (
      <div>
        <div className="uplaod">
          <Dropzone onDrop={this.uploadFile.bind(this)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateImages }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageUploader);

const express = require("express");
const cloudinaryApi = express.Router();
const axios = require('axios');
const cors = require('cors')

cloudinaryApi.get("/images", (req, res) => {
  axios
    .get(
      `https://139167162543316:MPfnC3smU0G-vHs-GC2YBZHz0Ww@api.cloudinary.com/v1_1/keezee/resources/image`
    )
    .then(response => {
      res.send(response.data);
    })
    .catch(err => console.log(err));
});

module.exports = cloudinaryApi;
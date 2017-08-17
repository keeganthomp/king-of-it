const express = require("express");
const server = express();
const axios = require('axios');
const cors = require('cors')

server.use(cors());

server.get("/api/images", (req, res) => {
  axios
    .get(
      `https://139167162543316:MPfnC3smU0G-vHs-GC2YBZHz0Ww@api.cloudinary.com/v1_1/keezee/resources/image`
    )
    .then(response => {
      console.log("response ", response.data);
      res.send(response.data);
    })
    .catch(err => console.log(err));
});

server.listen(7000, () => {
  console.log("running on port 7000");
});

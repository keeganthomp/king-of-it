const express = require("express");
const server = express();
const axios = require('axios');
const cors = require('cors')
const apiRoutes = require('./apiRoutes')

server.use(cors());

server.use('/api', apiRoutes)

server.listen(7000, () => {
  console.log("running on port 7000");
});

const express = require("express");
const server = express();
const axios = require('axios');
const cors = require('cors')
const apiRoutes = require('./apiRoutes')
const authRoutes = require('./authRoutes');

server.use(cors());

server.use('/api', apiRoutes)
server.use('/auth', authRoutes)

server.listen(7000, () => {
  console.log("running on port 7000");
});

require('dotenv').config({path: '../../.env.local'});
const express = require('express');
const bp = require('body-parser');
const exp = express();
const path = require('path');
const Router = require('./routes/router');
var cors = require('cors');

exp.use(cors());
exp.use(bp.json());
exp.use(bp.urlencoded({extended : true}));
exp.use(express.static(path.join(__dirname, 'build')));
exp.use(Router);

const PORT = process.env.REACT_APP_PORT;
const HOSTNAME = process.env.REACT_APP_HOST_NAME;

exp.listen(PORT, HOSTNAME, () => {
    console.log('server is running at port : ' + PORT);
});
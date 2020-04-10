// require('dotenv').config({path: '../../.env.local'});
require('dotenv').config();
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

const PORT = process.env.PORT;
const HOSTNAME = 'localhost';

exp.listen(PORT || 3001, HOSTNAME, () => {
    console.log('server is running at port : ' + PORT);
});
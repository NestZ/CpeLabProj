// require('dotenv').config({path: '../../.env.local'});
require('dotenv').config();
const express = require('express');
const bp = require('body-parser');
const app = express();
const path = require('path');
const Router = require('./routes/router');
var cors = require('cors');

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({extended : true}));
// exp.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(Router);

const PORT = process.env.PORT;
const HOSTNAME = '0.0.0.0';

app.listen(PORT || 5000, HOSTNAME, () => {
    console.log('server is running at port : ' + PORT);
});
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
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(Router);

const PORT = process.env.PORT;
// const HOSTNAME = '0.0.0.0';
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT || 5000, () => {
    console.log('server is running at port : ' + PORT);
});

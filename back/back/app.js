const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const api = require('./src/router/api');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require("morgan");


/************************************************
 * use body parseer
 */
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(cors());
app.use('/public/upload', express.static('public/upload'));
app.use(bodyParser.json());
app.use(morgan('dev'));

/************************************************
 * project router
 */
app.use('/api', api);

/************************************************
 * run server on 3001 port
 */
app.listen(PORT, function () {
    console.log('app listen on ' + PORT);
});

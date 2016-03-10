/**
 * Created by Tauqeer Ahmed on 2/27/2016.
 */

var express = require('express');
var route = require('./route');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var publicPath = path.resolve(__dirname , 'public');

app.use(express.static(publicPath));
app.use(bodyParser());
app.use('/api',route);

app.listen(3000,function(){
    console.log('App listening on port 3000');
});
/**
 * Created by Tauqeer Ahmed on 2/27/2016.
 */


var express = require('express');
var path = require('path');
var route = require('./route');

var app = express();

var publicPath = path.resolve(__dirname , 'public');
app.use(express.static(publicPath));
app.use('/api',route);


app.listen(3000,function(){
   console.log("App running on port 3000");
});
const express = require('express');
const bodyParser = require('body-parser');
let mongoose = require('mongoose');
const app = express();

let edexapiRoutes = require("./routes/apiroutes");
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/edex',{useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully to "+db.name)

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello welcome to embeddeddoc world'));

app.use('/edexapi', edexapiRoutes);


app.listen(port, function () {
    console.log("Running on port " + port);
});
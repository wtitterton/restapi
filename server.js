const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
//set up express app
const app = express();
//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;
//middleware
app.use(bodyParser.json());
// init routes
app.use('/api', require('./Routes/api'));
//error handling middleware
app.use((err, req, res, next) => {
    //console.log(err.message);
    res.status(422).send({error: err.message});
})
// listen for requests
app.listen(process.env.port || 3000, () => {
    console.log("listening on port " +  3000);
});


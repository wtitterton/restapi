const express = require('express');
const bodyParser = require('body-parser');
//set up express app
const app = express();

//middleware
app.use(bodyParser.json());
// init routes
app.use('/api', require('./Routes/api'));

// listen for requests
app.listen(process.env.port || 3000, () => {
    console.log("listening on port " +  3000);
});


const express = require('express');

//set up express app
const app = express();

app.use('/api', require('./Routes/api'));

// listen for requests
app.listen(process.env.port || 3000, () => {
    console.log("listening on port " +  3000);
});


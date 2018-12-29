const express = require('express');
const router = express.Router();

// get a list of ninjas from the database
router.get('/ninjas', (req, res) => {
    res.send({type: 'GET'})
})

// add a new ninja to the database
router.post('/ninjas', (req, res) => {
    console.log(req.body);
    res.send(
        {
            type: 'POST',
            name: req.body.name
        }
    )
});

// update ninja in database
router.put('/ninjas/:id', (req, res) => {
    res.send({type: 'PUT'})
});

//delete a ninja from the database
router.delete('/ninjas/:id', (req, res) => {
    res.send({type: 'DELETE'})
});

module.exports = router;


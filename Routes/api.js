const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from the database
router.get('/ninjas', (req, res) => {
   
 Ninja.aggregate().near({
   near: {
    'type': 'Point',
    'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)]
   },
   maxDistance: 100,
   spherical: true,
   distanceField: "dis"
  }).then((ninjas) => {
      res.send(ninjas);
  })
})

// add a new ninja to the database
router.post('/ninjas', (req, res, next) => {
    Ninja.create(req.body).then((ninja) => {
        res.send(ninja);
    }).catch(next);
});

// update ninja in database
router.put('/ninjas/:id', (req, res) => {
    Ninja.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true}).then((ninja) => {
       res.send(ninja);
   })
});

//delete a ninja from the database
router.delete('/ninjas/:id', (req, res) => {
   Ninja.findByIdAndRemove({_id:req.params.id}).then((ninja) => {
       res.send(ninja);
   })
});

module.exports = router;


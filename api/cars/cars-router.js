// DO YOUR MAGIC
const Car = require('./cars-model');
const router = require('express').Router();


router.get('/', (req, res) => {
    Car.getAll()
      .then(cars => {
        res.json(cars);
      })
      .catch(err => {
        res.status(500).json({ message: `Failed to retrieve fruits: ${err.message}` });
      });
  });


  module.exports = router;

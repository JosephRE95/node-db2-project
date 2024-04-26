const express = require("express");
const router = express.Router();
const Car = require("./cars-model");

router.get("/", (req, res) => {
  Car.getAll()
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: `Failed to retrieve cars: ${err.message}` });
    });
});

router.get("/:id", (req, res) => {
  Car.getById(req.params.id)
    .then((car) => {
      if (car) {
        res.json(car);
      } else {
        res.status(404).json({ message: "Car not found" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: `Failed to retrieve car: ${err.message}` });
    });
});

router.post("/", (req, res) => {
    console.log('before creat',req)
  Car.create(req.body)
    .then((newCar) => {
        console.log(newCar)
      res.json(newCar);
    })
    .catch((err) => {
      res.status(500).json({ message: `Failed to create car: ${err.message}` });
    });
});

module.exports = router;

const express = require('express');
const app = express();
const AadhaarRoute = express.Router();

// Aadhaar model
let Aadhaar = require('../models/Aadhaar');

// Add Aadhaar User
AadhaarRoute.route('/create').post((req, res, next) => {
  Aadhaar.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Aadhaars
AadhaarRoute.route('/').get((req, res) => {
  Aadhaar.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Aadhaar
AadhaarRoute.route('/read/:id').get((req, res) => {
  Aadhaar.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Aadhaar
AadhaarRoute.route('/update/:id').put((req, res, next) => {
  Aadhaar.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete Aadhaar
AadhaarRoute.route('/delete/:id').delete((req, res, next) => {
  Aadhaar.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = AadhaarRoute;
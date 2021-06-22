const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema
let Aadhaar = new Schema(
  {
    aadharnumber: {
      type: Number,
    },
    fullname: {
      type: String,
    },
    fathername: {
      type: String,
    },
    yob: {
      type: String,
    },
    sex: {
      type: String,
    },
    add: {
      type: String,
    },
  },
  {
    collection: "Aadhaar",
  }
);

module.exports = mongoose.model("Aadhaar", Aadhaar);

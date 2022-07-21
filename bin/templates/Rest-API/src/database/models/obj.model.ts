const mongoose = require("mongoose");

const objSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

export const Obj = mongoose.model("Object", objSchema);
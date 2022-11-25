const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add text value"],
  },

  // timestamps: [true],
  //   description: {
  //     type: String,
  //     required: [true, "Add text value"],
  //   },
  //   barcode: {
  //     type: Number,
  //   },
});

module.exports = mongoose.model("Book", bookSchema);

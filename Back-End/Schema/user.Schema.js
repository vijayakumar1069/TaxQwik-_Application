const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    taxforms: {
      type: Array,
      required: true,
    },
    Total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const USERSCHEMA = mongoose.model("USERSCHEMA", userSchema);
module.exports = USERSCHEMA;

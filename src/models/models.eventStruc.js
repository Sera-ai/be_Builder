const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    event: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: String,
    },
    data: {
      required: true,
      type: Object,
    },
  },
  { collection: "event_struc" }
);

module.exports = mongoose.model("event_struc", dataSchema);
const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const testSchema = new Schema(
  {
    test: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Test = model("Test", testSchema);

module.exports = Test;
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;
// Using the Schema constructor, create a new UserSchema object
const UserSchema = new Schema({
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },

    firstname: {
      type: String,
      required: true
    },

    lastname: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    address1: {
      type: String,
      required: false
    },

    address2: {
      type: String,
      required: false
        },

    state: {
      type: String,
      required: false
    },

    zip: {
      type: String,
      required: true
    },

    picture: {
      type: String,
      required: false
    },

    post: {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
  });

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the Article model
module.exports = User;
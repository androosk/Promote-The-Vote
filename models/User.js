const mongoose = require("mongoose");

// Save a reference to the Schema constructor
// const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
const UserSchema = mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
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
      unique: true
    },

    address1: {
      type: String,
      required: true

    },

    address2: {
      type: String,
      required: false
    },

    city: {
      type: String,
      required: true
    },

    state: {
      type: String,
      required: true
    },

    zip: {
      type: String,
      required: true
    },

    picture: {
      type: String,
      required: false
    }

    // post: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Post"
    // }
  });

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the Article model
module.exports = User;

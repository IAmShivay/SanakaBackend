const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please Enter The Place"],
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: [true, "Please Enter Your Phone Number"],
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v); // Assuming a 10 digit phone number format
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  }
});

module.exports = mongoose.model("Lead", userSchema);

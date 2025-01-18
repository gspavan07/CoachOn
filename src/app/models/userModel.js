import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"], // Restrict to these two options
  },
  email: {
    address: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  mobile: {
    number: {
      type: String,
      required: true,
      unique: true,
      match: [/^\+91-\d{10}$/, "Please enter a valid Indian mobile number."], // Regex for Indian mobile numbers
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  education: {
    type: String,
    required: true,
    enum: [
      "9th",
      "10th",
      "12th",
      "1st Year",
      "2nd Year",
      "3rd Year",
      "4th Year",
    ], // Valid education levels
  },
});

const UserModel = models.UserModel || model("UserModel", userSchema, "users");

export default UserModel;

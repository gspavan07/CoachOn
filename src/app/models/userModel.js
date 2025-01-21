import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
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
      match: [
        /^(\+91[\-\s]?|91[\-\s]?|0)?[6-9]\d{9}$/,
        "Please enter a valid Indian mobile number.",
      ], // Regex for Indian mobile numbers
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  education: {
    type: String,
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
  password: { type: String, required: true },
});

const UserModel = models.UserModel || model("UserModel", userSchema, "users");

export default UserModel;

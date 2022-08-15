import mongoose from "mongoose";
const { Schema } = mongoose;
const { model } = mongoose;

const user = new Schema({
  userName: String,
  login: {
    type: String,
    unique: true
  },
  password: String,
  refresh_token: String
}, { versionKey: false });

const userModel = model('user', user);

export { userModel as user };
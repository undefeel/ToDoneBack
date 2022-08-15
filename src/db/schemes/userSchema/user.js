import { Schema, model } from "mongoose";

const user = new Schema({
  login: String,
  password: String,
});

module.exports = usersch = model('users', user);
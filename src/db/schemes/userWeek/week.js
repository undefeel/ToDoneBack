import { Schema, model } from "mongoose";

const day = new Schema({
  tasks: {
    certain_push: Boolean2
  },
  date: Date,
  allPush: Boolean,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
})

module.exports = weeksch = model('week', week);
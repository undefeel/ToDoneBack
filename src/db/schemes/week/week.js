import mongoose from "mongoose";
const { Schema } = mongoose;
const { model } = mongoose;

const day = new Schema({
  tasks: {
    certain_push: Boolean
  },
  date: Date,
  allPush: Boolean,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
}, { versionKey: false })

const dayModel = model('day', day);

export { dayModel as day };
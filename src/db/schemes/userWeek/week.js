import { Schema, model } from "mongoose";

// const week = new Schema({
//   days: {
//     monday: {},
//     tuesday: {},
//     wednsday: {},
//     thursday: {},
//     friday: {},
//     saturday: {},
//     sunday: {}
//   }
// })

const day = new Schema({
  tasks: {
    certain_push: Boolean
  },
  date: Date,
  allPush: Boolean,
})

module.exports = weeksch = model('week', week);
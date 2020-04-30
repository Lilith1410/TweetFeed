const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Tweef = new Schema(
    {
        userName: { type: String, required: true },
        follows: { type: [String], required: false },
        tweets: { type: Number, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('tweefs', Tweef)

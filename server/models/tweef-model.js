const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Tweef = new Schema(
    {
        userName: { type: String, required: true },
        time: { type: [String], required: true },
        rating: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('tweefs', Tweef)

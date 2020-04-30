const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TweefSchema = new Schema(
    {
        userName: { type: String, required: [true, 'Username is required'] },
        follows: { type: [String], required: false },
        tweets: { type: [String], required: false },
    },
    { timestamps: true },
)

const Tweef = mongoose.model('Tweef', TweefSchema)

module.exports = Tweef

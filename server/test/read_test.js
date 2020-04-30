const assert = require('assert');
const Tweef = require('../models/tweef-model');
let tweef;
beforeEach((done) => {
    tweef = new Tweef({  userName: 'Queen Tweef' });
    tweef.save()
        .then(() => done());
});
describe('Reading Tweef details', () => {
    it('finds tweef with the name of Queen Tweef', (done) => {
        Tweef.findOne({ userName: 'Queen Tweef' })
            .then((tweef) => {
                assert(tweef.userName === 'Queen Tweef');
            })
            .then(() => done(), done)
    })
})

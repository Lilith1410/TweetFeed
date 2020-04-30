const assert = require('assert');
const Tweef = require('../models/tweef-model'); //imports the Tweef model.

describe('Creating documents', () => {
    it('creates a Tweef', (done) => {
        //assertion is not included in mocha so
        //require assert which was installed along with mocha
        const tweef = new Tweef({ userName: 'Queen Tweef' });
        tweef.save() //takes some time and returns a promise
            .then(() => {
                assert(!tweef.isNew); //if poke is saved to db it is not new
            })
            .then(() => done(), done)
    })
});

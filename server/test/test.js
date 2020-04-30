"use strict";

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const chai = require('chai')
const expect = chai.expect
const assert = require('assert')

const Tweef = require('../models/tweef-model.js')

const testSchema = new Schema({
  name: {type: String, required: true }
})

{/*Create new collection called 'Name' */}
const Name = mongoose.model('Name', testSchema)

describe('Database Tests', function({

  mongoose.connect('mongodb://127.0.0.1:27017/tweefs')
  mongoose.connection
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => {
      console.warn('Error: ', error)
    })

  // Clear database so we have a clean slate to test with
  beforeEach((done) => {
    mongoose.connection.collections.tweefs.drop(() => {
      done()
    })
  })


}))

describe('Tweef was created', function({

  it('Username submitted', function({}))

  it('No User name submitted', function({}))

}))

describe('Tweef was deleted', function({

  it('Tweef sucessfully deleted', function({}))

  it('Tweef was not deleted', function({}))

}))

describe('Add Follows to User', function({

  it('User Id provided - Follows added', function({}))

  it('User Id not provided - Follows not added', function({}))

  it('Body provided - Follows added', function({}))

  it('Body not provided - Follows not added', function({}))

}))

describe('Remove Follows from User', function({

  it('User Id provided - Follows removed', function({}))

  it('User Id not provided - Follows not removed', function({}))

  it('Body provided - Follows removed', function({}))

  it('Body not provided - Follows not removed', function({}))

}))

describe('get Follows by User Id', function({

  it('User Id provided - returned Follows List', function({}))

  it('Follows Id not provided - did not return Follows List', function({}))

  it('Error thrown because List is empty', function({}))

}))

describe('Add Tweet to User', function({

  it('User Id not provided - Tweet not added', function({}))

  it('User Id provided - Tweet added' function({}))

  it('Body Empty - Tweet not added', function({}))

  it('Body not Empty - Tweet added', function({}))

}))

describe('Remove Tweet from User', function({

  it.('Id provided - Tweet removed', function({}))

  it.('Id not provided - Tweet not removed', function({}))

  it.('Error thrown because Tweet List is Empty', function({}))

}))

describe('Get Tweets By User', function({

  it.('Id correct - Tweets gotten', function({}))

  it.('Id not correct - Tweets not gotten', function({}))

  it.('List empty - Tweets not gotten', function({}))

}))

describe('Get Tweef', function({

  it.('Id incorrect - Tweef not gotten', function({}))

  it.('List empty - Tweef not gotten', function({}))

  it.('Id correct & tweefs existing - Tweef gotten', function({}))

}))

describe('Get Tweefs', function({

  it.('Return all tweefs', function({}))

  it.('Id incorrect - Tweefs not returned', function({}))

  it.('List empty - Tweefs not returned', function({}))

}))

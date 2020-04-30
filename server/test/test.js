"use strict";

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const chai = require('chai')
const expect = chai.expect

const testSchema = new Schema({
  name: {type: String, required: true }
})

{/*Create new collection called 'Name' */}
const Name = mongoose.model('Name', testSchema)

describe('Database Tests', function() {

  {/*Before testing create a sandbox database connection then invoke done */}
  before(function (done) {
    mongoose.connect('mongodb://localhost/testDatabase')
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error'))
    db.once('open', function() {
      console.log('We are connected to test database. ')
      done()
    })
  })

  describe('Test Database', function() {
    it('New tweef object created and saved in test database', function(done) {
      {/*Give correct input data*/}
      var testName = Name({
        name: 'Kurt'
      })
      testName.save(done)
    })

    it('Dont save incorrect format to database', function(done) {
      {/*Give wrong input data*/}
      var wrongSave = Name({
        notName: 'not Kurt'
      })

      wrongSave.save(err => {
        if(err) { return done()}
        throw new Error('Should generate error! ')
      })
    })

    if('Shoudl retrieve data from test database', function(done) {
      {/*Look up the previously saved Kurt Object*/}
      Name.find({name: 'Kurt'}, (err, name) => {
        if(err) {throw err}
        if(name.length === 0) {throw new Error('No data')}
        done()
      })
    })

  {/*After all tests are done, clean up database and close connection */}
  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      mongoose.connection.close(done)
    })
  })
})
})

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

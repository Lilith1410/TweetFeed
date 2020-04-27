const Tweef = require('../models/tweef-model')

{/*Check this again to make sure it works*/}

createTweef = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'Must provide User. ',
    })
  }

  const tweef = new Tweef(body)

  if (!tweef) {
    return res.status(400).json({ succcess: false, error: err})
  }

  tweef
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: tweef._id,
        message: 'User created.',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'User not created. ',
      })
    })
}

deleteTweef = async (req, res) => {
  await Tweef.findOneAndDelete({_id: req.params.id}, (err, tweef) => {
    if(err) {
      return res.status(400).json({success: false, error: err})
    }

    if(!tweef) {
      return res
        .status(404)
        .json({ success: false, error: 'User not found' })
    }

    return res.status(200).json({ success: true, data: tweef})
  }).catch(err => console.log(err))
}

addFollowsToUser = async (req, res) => {
  const body = req.body

  if(!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a user to update',
    })
  }

  Tweef.findOne({_id: req.params.id}, (err, tweef) => {
    if(err) {
      return res.status(404).json({
        err,
        message: 'User not found!',
      })
    }

    {/*Would also require a check that the data in the body is actually a valid user in the db*/}
    {/*Unsure if this work - test! */}
    tweef.follows.push(body.follows)

    tweef
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: tweef._id,
          message: 'Follows for User' + req.params.id + ' updated!',
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Follows not updated',
        })
      })
  })
}

removeFollowsFromUser = async (req, res) => {
  const body = req.body

  if(!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a user to update',
    })
  }

  Tweef.findOne({_id: req.params.id}, (err, tweef) => {
    if(err) {
      return res.status(404).json({
        err,
        message: 'User not found. ',
      })
    }

    {/*Would also require a check that the data in the body is actually a valid user in the db*/}
    {/*Unsure if this work - test! */}
    for(var i = 0; i < tweef.follows.length; i++) {
      {/*Geht dieser Vergleich überhaupt klar? Oder hat er damit probleme?*/}
      if(tweef.follows[i] == body.follows) {
        tweef.follows.splice(i, 1);
      }
    }

    tweef
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: tweef._id,
          message: 'Follows for User' + req.params.id + ' deleted. ',
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Follows not deleted. ',
        })
      })
  })
}

getFollowsByUser = async (req, res) => {
  await Tweef.findOne({ _user: req.params.user }, (err, tweef) => {
      if (err) {
          return res.status(400).json({ success: false, error: err })
      }

      if (!tweef) {
          return res
              .status(404)
              .json({ success: false, error: `Follows not found` })
      }
      return res.status(200).json({ success: true, data: tweef })
  }).catch(err => console.log(err))
}

addTweetToUser = async (req, res) => {
  const body = req.body

  if(!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a user to update',
    })
  }

  Tweef.findOne({_id: req.params.id}, (err, tweef) => {
    if(err) {
      return res.status(404).json({
        err,
        message: 'User not found!',
      })
    }

    {/*Would also require a check that the data in the body is actually a valid user in the db*/}
    {/*Unsure if this work - test! */}
    tweef.tweets.push(body.tweets)

    tweef
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: tweef._id,
          message: 'Tweet for User' + req.params.id + ' updated!',
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Tweets not updated',
        })
      })
  })
}

removeTweetFromUser = async (req, res) => {
  const body = req.body

  if(!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a user to update',
    })
  }

  Tweef.findOne({_id: req.params.id}, (err, tweef) => {
    if(err) {
      return res.status(404).json({
        err,
        message: 'User not found. ',
      })
    }

    {/*Would also require a check that the data in the body is actually a valid user in the db*/}
    {/*Unsure if this work - test! */}
    for(var i = 0; i < tweef.tweets.length; i++) {
      {/*Geht dieser Vergleich überhaupt klar? Oder hat er damit probleme?*/}
      if(tweef.tweets[i] == body.tweets) {
        tweef.tweets.splice(i, 1);
      }
    }

    tweef
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: tweef._id,
          message: 'Tweet for User' + req.params.id + ' deleted. ',
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Tweet not deleted. ',
        })
      })
  })
}

getTweetsByUser = async (req, res) => {
  await Tweef.findOne({ _user: req.params.user }, (err, tweef) => {
      if (err) {
          return res.status(400).json({ success: false, error: err })
      }

      if (!tweef) {
          return res
              .status(404)
              .json({ success: false, error: `Tweets not found` })
      }
      return res.status(200).json({ success: true, data: tweef })
  }).catch(err => console.log(err))
}

module.exports = {
  createTweef,
  deleteTweef,
  addFollowsToUser,
  removeFollowsFromUser,
  addTweetToUser,
  removeTweetFromUser,
  getFollowsByUser,
  getTweetsByUser
}

const express = require('express')

const TweefCtrl = require('../controllers/tweef-ctrl')

const router = express.Router()

router.post('/tweef', TweefCtrl.createTweef)
router.delete('/tweef/:id', TweefCtrl.deleteTweef)

router.put('/tweef/:user', TweefCtrl.addFollowsToUser)
router.delete('tweef/:user', TweefCtrl.removeFollowsFromUser)
router.put('tweef/:user', TweefCtrl.addTweetToUser)
router.delete('tweef/:user', TweefCtrl.removeTweetFromUser)
router.get('tweef/:user', TweefCtrl.getFollowsByUser)
router.get('tweef/:user', TweefCtrl.getTweetsByUser)

module.exports = router

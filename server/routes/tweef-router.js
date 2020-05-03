const express = require('express')

const TweefCtrl = require('../controllers/tweef-ctrl')

const router = express.Router()

router.post('/tweef', TweefCtrl.createTweef)
router.put('/tweef/:id', TweefCtrl.updateTweef)
router.delete('/tweef/:id', TweefCtrl.deleteTweef)
router.get('/tweef/:id', TweefCtrl.getTweefById)
router.get('/tweefs', TweefCtrl.getTweefs)

// router.post('/mockup', UploadCtrl.uploadUser)
// and other options to initialize mongo DB!

module.exports = router

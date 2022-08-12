const express = require('express')

// controller functions
const { addTweet, geTweets ,addTweetLike } = require('../controllers/tweetController')

const router = express.Router()

// add tweet
router.post('/add-tweet', addTweet)

// get tweet
router.get('/get-tweet', geTweets)

router.post('/add-tweet-like', addTweetLike)

module.exports = router
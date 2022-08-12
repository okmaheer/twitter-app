const express = require('express')

// controller functions
const { addTweet, geTweets } = require('../controllers/tweetController')

const router = express.Router()

// add tweet
router.post('/add-tweet', addTweet)

// get tweet
router.get('/get-tweet', geTweets)

module.exports = router
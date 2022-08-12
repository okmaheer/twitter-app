const Tweet = require('../models/tweetModel')

// login a user
const addTweet = async (req, res) => {
  const {tweet, user} = req.body

  try {

    const addedtweet = await Tweet.addTweet(tweet, user)

    res.status(200).json({tweet:addedtweet})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

/// get all tweets
const geTweets = async (req, res) => {
  
  try {
    const tweets = await Tweet.getTweet()
   
    res.status(200).json({tweets})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}



// login a user
const addTweetLike = async (req, res) => {
  const {_id,email} = req.body

  try {

    const addedliketweet = await Tweet.addTweetLike(_id,email)

    res.status(200).json({tweet:addedliketweet})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}



module.exports = { addTweet,geTweets,addTweetLike }
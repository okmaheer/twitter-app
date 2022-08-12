const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const tweetSchema = new Schema({
  tweet: String,
  likes:Number,
  user: {},
})

// static signup method
tweetSchema.statics.addTweet = async function(tweet,user) {

  // validation
  if (!tweet) {
    throw Error('field must be filled')
  }
     const returnData =  await this.create({ tweet, user})
    return returnData;
}

// static get  method
tweetSchema.statics.getTweet = async function() {

  const tweets = await this.find()


  return tweets
}

module.exports = mongoose.model('Tweet', tweetSchema)
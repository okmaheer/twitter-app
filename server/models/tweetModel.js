const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const tweetSchema = new Schema({
  tweet: String,
  likes:Number,
  user: {},
  likedPersons:{}
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
tweetSchema.statics.addTweetLike = async function(_id,email) {

  // validation
  if (!_id || !email) {
    throw Error('Failed to like Tweet')
  }

  const tweet = await this.find({likedPersons:email})
  
      if(!tweet){
     
     const unlikedtweet =  await this.findById({ _id})
      
      if(unlikedtweet.likes){
        unlikedtweet.likes += 1
      }else{
        unlikedtweet.likes = 1
      }
     
      unlikedtweet.save()
      return unlikedtweet;
    }

    throw Error('Already like the Tweet')

   
}


module.exports = mongoose.model('Tweet', tweetSchema)
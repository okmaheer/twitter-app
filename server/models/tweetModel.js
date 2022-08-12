const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema

const tweetSchema = new Schema({
  tweet: String,
  likes:{},
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
tweetSchema.statics.addTweetLike = async function(_id,email) {

  // validation

  if (!_id || !email) {
    throw Error('Failed to like Tweet')
  }
  const tweet  = await this.findById({ _id})
      const data = {
        email:email
      }
      
     if(tweet.likes){
     
      tweet.likes.forEach(email => {
    
       if(email.email == data.email){

        throw Error('Already like the tweet')
       
       }
     
      })
    
    let  utweet =  this.findOneAndUpdate(
        { _id: _id }, 
        { $push: { likes: data  } })
    
         return utweet;
     }
     else{
  let  ftweet =  this.findOneAndUpdate(
        { _id: _id }, 
        { $push: { likes: data  } })
        return ftweet;
     }
     
  //  = await this.find({likedPersons.email:email})
  
    //   if(!tweet){
     
    //  const unlikedtweet = 
      
    //   if(unlikedtweet.likes){
    //     unlikedtweet.likes += 1
    //   }else{
    //     unlikedtweet.likes = 1
    //   }
     
    //   unlikedtweet.save()
    //   return unlikedtweet;
    // }

    // throw Error('Already like the Tweet')

   
}


module.exports = mongoose.model('Tweet', tweetSchema)
import { defineStore } from "pinia";
import { notify } from "@kyvg/vue3-notification";
import { useAuthStore } from "../store";
import axios from "axios";

export const usetweetStore = defineStore("tweet", {
  state: () => ({
    tweets: {},
  }),

  getters: {
    getTweets: (state) => {
      return state.tweets;
    },
  },

  actions: {
    UPDATE_Tweet(payload) {
      this.tweets.push(payload)
    },
    //   UPDATE_NEW_USER(payload) {
    //     this.newUser = payload;
    //   },
    async tweetAction(tweet) {
        const authStore = useAuthStore();
      const data = {
        tweet: tweet,
        user: authStore.getUser,
      };
      try {
        const response = await axios.post(
          "http://localhost:3000/api/tweet/add-tweet",
          data
        );
        console.log(response);
        if (response.status === 200) {
            console.log(response);
          this.UPDATE_Tweet(response.data.tweet);
          notify({
            title: "Tweet Added Successfully",
            type: "success",
          });

          return {
            type: "success",
            title: "Tweet Added Successfully",
            message: "Tweet Added Successfully",
            tweet:response.data.tweet
          };
        }

        throw Error(response.data.error);
      } catch (error) {
        notify({
          title: error.response.data.error,
          type: "error",
        });
      }
    },
    async tweetgetAction() {
    

    try {
      const response = await axios.get(
        "http://localhost:3000/api/tweet/get-tweet");
      console.log(response);
      if (response.status === 200) {
          console.log(response);
        this.tweets =response.data.tweets
      

        return {
          type: "success",
          title: "Successfully tweet get",
          message: "Successfully tweet get",
          tweet:response.data.tweets
        };
      }

      throw Error(response.data.error);
    } catch (error) {
      notify({
        title: error.response.data.error,
        type: "error",
      });
    }
  },
  async tweetLikeAction(_id) {
    const authStore = useAuthStore();
  const data = {
    _id,
    email: authStore.getUser.email,
  };
  try {
    const response = await axios.post(
      "http://localhost:3000/api/tweet/add-tweet-like",
      data
    );
    console.log(response);
    if (response.status === 200) {
        console.log(response);
      this.UPDATE_Tweet(response.data.tweet);
      notify({
        title: "Tweet Successfully Liked",
        type: "success",
      });

      return {
        type: "success",
        title: "Tweet Successfully Liked",
        message: "Tweet Successfully Liked",
        tweet:response.data.tweet
      };
    }

    throw Error(response.data.error);
  } catch (error) {
    notify({
      title: error.response.data.error,
      type: "error",
    });
  }
}

  


  },
});

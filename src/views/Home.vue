<template>
  <div class="home">
      
    <Tweet 
      v-for="(tweet, index) in tweetStore.getTweets" 
      :key="index" 
      :tweet="tweet" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { usetweetStore } from "../store/tweet";
import Tweet from '../components/Tweet';
import vweets from '../vweets';

export default {
     components: {
            Tweet,
    },
  setup () {
    const tweetStore = usetweetStore()
    const tweets = ref(vweets);
     onMounted( async () => {
      const tweetStore = usetweetStore()
      const res = await tweetStore.tweetgetAction()
      console.log(res);
})
    return {
      tweets,
      tweetStore,
    }
  }
}
</script>

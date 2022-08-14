<template>
  <div class="home">
      
    <Tweet 
      v-for="(tweet, index) in tweetStore.getTweets" 
      :key="index" 
      :tweet="tweet" />
  <!-- </div> -->
</template>

<script>
import { onMounted } from "vue";
import { usetweetStore } from "../store/tweet";
import Tweet from '../components/Tweet';
import io from 'socket.io-client';

export default {
     components: {
            Tweet,
    },
  setup () {
    const socket = io("http://localhost:3000"); 
    const tweetStore = usetweetStore()
  
     onMounted( async () => {
       console.log(socket);
      const tweetStore = usetweetStore()
      const res = await tweetStore.tweetgetAction()
      console.log(res);
})
    return {
    
      tweetStore,
    }
  }
}
</script>

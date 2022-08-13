<template>
  <div class="home">
      
  
  </div>
</template>

<script>
import { useChatStore } from "../store/chat";
export default {
   
  setup () {
    const chatStore = useChatStore()
  
  
    return {
      
      chatStore,
    }
  }
}
</script>

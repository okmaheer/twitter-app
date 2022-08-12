<template>
  <section class="flex flex-col item-center justify-center h-screen">
    <div class=" max-w-2xl m-0 px-6 h-auto text-white">
        <form @submit.prevent="tweetHandler"  class="bg-gray-700 shadow-md rounded px-8 pt-6 space-y-4 pb-8 mb-4">
          
             <div class="flex items-center justify-between ">
             <h1 class="text-lg">{{ authStore.getUser.name }}</h1>
          <button
              class="
                bg-blue-500
                hover:bg-blue-700
                text-white
                font-bold
                py-2
                px-4
                rounded
                focus:outline-none focus:shadow-outline
              "
              type="submit">
              Tweet
            </button>
    
          </div>
          <div class="mb-4">
          
            <textarea
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              v-model="tweet"
              id="tweet"
              rows="5" cols="50"
              type="textarea"
              placeholder="What's happening?"
            />
          </div>
       
         
        </form>
    </div>
  </section>

</template>

<script >
// import TheLoginForm from '../components/TheLoginForm.vue'
import { useAuthStore } from "../store";
import { ref } from "vue";
import { usetweetStore } from "../store/tweet";
import { useRouter } from "vue-router";
export default {

  components: {
    // TheLoginForm,
  },
  setup() {  
       const router = useRouter();
       const tweet = ref('')
        const authStore = useAuthStore()
        const tweetStore = usetweetStore()


         const tweetHandler = async () => {
      const res = await tweetStore.tweetAction(tweet.value);

      if (res.type == "success") {
        router.replace("/");
      }
         }
    return {
      authStore,
      tweet,
      tweetHandler
    };
  },
};
</script>

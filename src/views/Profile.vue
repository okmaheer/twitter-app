<template>
  <section class="flex flex-col item-center justify-center h-screen">
    <div class=" max-w-2xl m-0 px-6 h-auto text-white">
        <form class="bg-gray-700 shadow-md rounded px-8 pt-6 space-y-4 pb-8 mb-4">
             <div class="flex items-center justify-end ">
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
              type="button"
            >
              Tweet
            </button>
    
          </div>
          <div class="mb-4">
          
            <input
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
              id="tweet"
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
export default {
  components: {
    // TheLoginForm,
  },
  setup() {
    return {};
  },
};
</script>

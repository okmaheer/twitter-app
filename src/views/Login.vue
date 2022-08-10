<template>
 <section class="h-screen">
  <div class="px-6 h-full text-white">
    <div
      class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
        
      <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <TheLoginForm/>
      </div>
    </div>
  </div>
</section>
</template>

<script >
import TheLoginForm from '../components/TheLoginForm.vue'
export default {
   components: {
            TheLoginForm,
    },
  setup () {
    

    return {
    
     
    }
  }
}
</script>

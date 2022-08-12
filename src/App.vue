<template>
<notifications position="center right" />
  <div class="flex flex-col min-h-screen">
    <header class="flex items-center border-b border-gray-600 justify-between">
      <router-link to="/profile" class="p-4 mr-3 text-green-500 text-2xl">
        <i class="fas fa-user"></i>
      </router-link>

      <h1 class="text-white font-black text-xl">{{ $route.name }}</h1>
      <button class="text-xl mr-4 font-bold text-white" v-if="authStore.isAuth" @click="logoutHandler">
        Logout
      </button>
      <a href="" v-else></a>
    </header>

    <main class="flex-1 overflow-y-scroll">
      <router-view />
    </main>

    <footer class="grid grid-cols-4 border-t border-gray-600" v-if="authStore.isAuth" >
      <router-link
        v-for="(route, i) in routes"
        :key="i"
        :to="route.path"
        :class="`p-4 text-center text-2xl ${
          route.name == $route.name ? 'text-green-500' : 'text-gray-300'
        }`"
      >
        <i :class="route.iconClass"></i>
      </router-link>
    </footer>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "./store";
import { notify } from "@kyvg/vue3-notification";
export default {
  setup() {
    const routes = ref([]);
    const router = useRouter();
    const authStore = useAuthStore();
    onBeforeMount(() => {
      routes.value = router.options.routes.filter((r) => r.mainMenu);
    });
    const logoutHandler = async () => {
      const res = authStore.logoutAction();
     
       if(res.type == "success"){
    
  notify({
        title: res.title,
         type: 'warn',
      });
      
      router.replace('/login');
      }
    };

    return {
      routes,
      logoutHandler,
      authStore
    };
  },
};
</script>

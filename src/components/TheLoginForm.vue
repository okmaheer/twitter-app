<template>
  <form @submit.prevent="handlerSubmit">
    <div class="flex flex-row items-center justify-center lg:justify-start">
      <p class="text-lg text-white mb-0 mr-4">Sign in with</p>
      <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        class="
          inline-block
          p-3
          bg-white
          text-black
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded-full
          hover:bg-black hover:text-white hover:shadow-lg
          shadow-lg
          focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out
          mx-1
        "
      >
        <!-- Facebook -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          class="w-4 h-4"
        >
          <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            fill="currentColor"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          />
        </svg>
      </button>

      <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        class="
          inline-block
          p-3
          bg-white
          text-black
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded-full
          shadow-md
          hover:bg-black hover:text-white hover:shadow-lg
          focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out
          mx-1
        "
      >
        <!-- Linkedin -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="w-4 h-4"
        >
          <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            fill="currentColor"
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
          />
        </svg>
      </button>
    </div>

    <div
      class="
        flex
        items-center
        my-4
        before:flex-1 before:border-t before:border-gray-300 before:mt-0.5
        after:flex-1 after:border-t after:border-gray-300 after:mt-0.5
      "
    >
      <p class="text-center font-semibold mx-4 text-white mb-0">Or</p>
    </div>

    <!-- Email input -->
    <div class="mb-6">
      <input
        type="text"
        v-model="email"
        class="
          form-control
          block
          w-full
          px-4
          py-2
          text-xl
          font-normal
         text-white
          bg-black bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:outline-none
        "
        id="email"
        placeholder="Email,username"
      />
    </div>

    <!-- Password input -->
    <div class="mb-6">
      <input
        type="password"
        class="
          form-control
          block
          w-full
          px-4
          py-2
          text-xl
          font-normal
          text-white
          bg-black bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:outline-none
        "
        id="password"
        v-model="password"
        placeholder="Password"
      />
    </div>

    <div class="flex justify-between items-center mb-6">
      <div class="form-group form-check">
        <input
          type="checkbox"
          class="
            form-check-input
            appearance-none
            h-4
            w-4
            border border-gray-300
            rounded-sm
            bg-black
            checked:bg-white checked:border-blue-600
            focus:outline-none
            transition
            duration-200
            mt-1
            align-top
            bg-no-repeat bg-center bg-contain
            float-left
            mr-2
            cursor-pointer
          "
          id="exampleCheck2"
        />
        <label
          class="form-check-label inline-block text-white"
          for="exampleCheck2"
          >Remember me</label
        >
      </div>
      <a href="#!" class="text-white">Forgot password?</a>
    </div>

    <div class="text-center lg:text-left">
      <button
        type="submit"
        class="
          inline-block
          px-7
          py-3
          font-medium
          bg-white
          text-black text-sm
          leading-snug
          uppercase
          rounded
          shadow-md
          hover:bg-black hover:text-white hover:shadow-lg
          focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out
        "
      >
        Login
      </button>
      <p class="text-sm font-semibold mt-2 pt-1 mb-0">
        Don't have an account?
        <a
          href="#!"
          class="
            text-red-600
            hover:text-red-700
            focus:text-red-700
            transition
            duration-200
            ease-in-out
          "
          >Register</a
        >
      </p>
    </div>
  </form>
</template>
<script>
import { ref } from "vue";
import { useAuthStore } from "../store";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const email = ref("");
    const password = ref("");

    const handlerSubmit = async () => {
      const data = {
        email: email.value,
        password: password.value,
      };
      const res = await authStore.loginAction(data);

      if (res.type == "success") {
        router.replace("/");
      }
    };

    return {
      email,
      password,
      handlerSubmit,
    };
  },
};
</script>
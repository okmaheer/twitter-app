import { defineStore } from "pinia";
import { notify } from "@kyvg/vue3-notification";
import axios from "axios";
export const useAuthStore = defineStore("counter", {
  state: () => ({
    user: {},
    address: {},
    newUser: undefined,
    register: {},
  }),

  getters: {
    getUser: (state) => {
      if (state.user.token === undefined)
        return JSON.parse(localStorage.getItem("user"));
      return state.user;
    },

    isAuth: (state) => {
      return (
        state.user.token !== undefined || localStorage.getItem("user") !== null
      );
    },
  },

  actions: {
    UPDATE_USER(payload) {
      this.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    //   UPDATE_NEW_USER(payload) {
    //     this.newUser = payload;
    //   },
    async loginAction(data) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/user/login",
          data
        );
        console.log(response);
        if (response.status === 200) {
          this.UPDATE_USER(response.data);
          notify({
            title: "Thank you for connecting to your account",
            type: "success",
          });

          return {
            type: "success",
            title: "Login Successfully",
            message: "Thank you for connecting to your account",
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

    async signupAction(data) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/user/signup",
          data
        );
        if (response.status === 200) {
          this.UPDATE_USER(response.data);
          notify({
            title: "Thank you for Signup",
            type: "success",
          });

          return {
            type: "success",
            title: "Signup Successfully",
            message: "Thank you for Signup",
          };
        }
      } catch (error) {
        notify({
          title: error.response.data.error,
          type: "error",
        });
      }
    },

    logoutAction() {
      this.UPDATE_USER({});
      localStorage.removeItem("user");
      return {
        type: "success",
        title: "Logout successfully",
        message: "Logout successfully",
      };
    },
  },
});

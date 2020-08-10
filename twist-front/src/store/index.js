import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      Username: "",
      Email: "",
      UserId: "",
      Phone: "",
      Bonus: "",
      Point: "",
      RegistTime: ""
    },
    isAuthenticated: false
  },
  getters: {
    userInfo: state => {
      return state.currentUser;
    },
    isLogin: state => {
      return state.isAuthenticated;
    }
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      };
      state.isAuthenticated = true;
    },
    revokeAuthentication(state) {
      state.currentUser = {};
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data, statusText } = await usersAPI.getCurrentUser();
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        // change the state by commit and the response
        commit("setCurrentUser", {
          Username: data.user.Username,
          Email: data.user.Email,
          UserId: data.user.UserId,
          Phone: data.user.Phone,
          Bonus: data.user.Bonus,
          Point: data.user.Point,
          RegistTime: data.user.RegistTime
        });
        return true;
      } catch (err) {
        console.log("error", err);
        return false;
      }
    }
  }
});

import Vue from "vue";
import Vuex from "vuex";
import * as auth from "../services/AuthService";
// import Auth from '../../warehouse/Auth'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    apiUrl: `http://localhost:${process.env.VUE_APP_PORT}`
    },
  mutations: {
    authenticate(state) {
      state.isLoggedIn = auth.isLoggedIn();
    }
  },
  actions: {
    authenticate(context) {
      context.commit("authenticate");
    }
  },
  modules:{
    //Auth
  }
});

export default store;

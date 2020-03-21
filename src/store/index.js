import Vue from "vue";
import Vuex from "vuex";
import * as auth from "../services/AuthService";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    apiUrl:`http://localhost:${process.env.VUE_APP_PORT}`,
    apiUrl2: `https://wit-bank-server.herokuapp.com/`,
    apiUrl3: 'https://aib-bank-server.herokuapp.com/',
    apiUrl4:'https://credit-union-server.herokuapp.com/',
    apiUrl5: 'https://post-office-server.herokuapp.com/',
    userId: null,
    bankId: null
    },
  mutations: {
    authenticate(state) {
      state.isLoggedIn = auth.isLoggedIn();
      if (state.isLoggedIn) {
        state.userId = auth.getUserId();
        state.bankId = auth.getBankId();
      } else {
        state.userId = null;
        state.bankId = null;
      }
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

import Vue from "vue";
import Vuex from "vuex";

const state = {
  idCard: 0,
  onHold: [],
  inProgress: [],
  needsReview: [],
  approved: []
};

const mutations = {
  SET_ON_HOLD(state, payload) {
    state.onHold = payload;
  },
  SET_IN_PROGRESS(state, payload) {
    state.inProgress = payload;
  },
  SET_NEEDS_REVIEW(state, payload) {
    state.needsReview = payload;
  },
  SET_APPROVED(state, payload) {
    state.approved = payload;
  },

  INCREASE_ID_CARD(state) {
    state.idCard++;
  },
  GET_ID_CARD(state, payload) {
    state.idCard = payload;
  },
  // UPDATE_CARD_LIST(state, payload) {
  //   state.cardsList.push(payload)
  // },
  REWRITE_CARD_LIST(state, payload) {
    state.cardsList = payload;
  }
};

const actions = {
  getData({ commit }) {
    if (!localStorage.getItem("state-app")) {
      localStorage.setItem("state-app", "");
    } else {
      let stateApp = JSON.parse(localStorage.getItem("state-app"));
      console.log(stateApp);

      commit("GET_ID_CARD", stateApp.idCard);
      commit("SET_ON_HOLD", stateApp.onHold);
      commit("SET_IN_PROGRESS", stateApp.inProgress);
      commit("SET_NEEDS_REVIEW", stateApp.needsReview);
      commit("SET_APPROVED", stateApp.approved);
    }
  },
  updateIdCard({ commit }, payload) {
    commit("INCREASE_ID_CARD", payload);
  },
  removeCard({ commit }, payload) {
    let cardsList = this.state.cardsList;
    let indexToRemove = cardsList.findIndex(obj => obj.id === payload);
    cardsList.splice(indexToRemove, 1);
    commit("REWRITE_CARD_LIST", cardsList);
  }
};

const getters = {
  idCard: state => state.idCard,
  // onHold: state => state.cardsList.filter(card => card.area == "on-hold"),
  // inProgress: state =>
    // state.cardsList.filter(card => card.area == "in-progress"),
  // needsReview: state =>
    // state.cardsList.filter(card => card.area == "needs-review"),
  // approved: state => state.cardsList.filter(card => card.area == "approved")
};

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
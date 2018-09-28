import Vue from "vue";
import Vuex from "vuex";

const state = {
  idCard: 0,
  onHold: [],
  inProgress: [],
  needsReview: [],
  approved: [],
  areaFormActive: ''
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
  SET_AREA_FORM_ACTIVE(state, payload) {
    state.areaFormActive = payload;
  }
};

const actions = {
  getData({ commit }) {
    if (!localStorage.getItem("state-app")) {
      localStorage.setItem("state-app", "");
    } else {
      let stateApp = JSON.parse(localStorage.getItem("state-app"));

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
  onHoldCounter: state => state.onHold.length,
  inProgressCounter: state => state.inProgress.length,
  needsReviewCounter: state => state.needsReview.length,
  approvedCounter: state => state.approved.length,
  areaFormActive: state => state.areaFormActive
};

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
import Vue from 'vue';
import Vuex from 'vuex';

const state = {
  onHold:'onHold',
  inProgress: 'inProgress',
  needsReview: 'needsReview',
  approved: 'approved'
};

const mutations = {};

const actions = {};

const getters = {};

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})

export default store;
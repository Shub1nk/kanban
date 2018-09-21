import Vue from 'vue';
import Vuex from 'vuex';

const state = {
  idCard: 0,
  cardsList: [],
  onHold: [
    {id: 100, text: 'text', area: 'on-hold'},
    {id: 200, text: 'text', area: 'on-hold'},
    {id: 300, text: 'text', area: 'on-hold'},
    {id: 400, text: 'text', area: 'on-hold'},
    {id: 500, text: 'text', area: 'on-hold'},
  ],
  inProgress: [
    {id: 650, text: 'text', area: 'on-hold'},
    {id: 750, text: 'text', area: 'on-hold'},
    {id: 850, text: 'text', area: 'on-hold'},
    {id: 950, text: 'text', area: 'on-hold'},
    {id: 1050, text: 'text', area: 'on-hold'},
  ]
};

const mutations = {
  SET_ONHOLD(state, payload) {
    state.onHold = payload;
  },
  SET_INPROGRESS(state, payload) {
    state.inProgress = payload;
  },



  INCREASE_ID_CARD(state) {
    state.idCard++;
  },
  GET_ID_CARD(state, payload) {
    state.idCard = payload;
  },
  UPDATE_CARD_LIST(state, payload) {
    state.cardsList.push(payload) 
  },
  REWRITE_CARD_LIST(state, payload) {
    state.cardsList = payload;
  }
};

const actions = {
  getData({commit}) {
    console.log(JSON.parse(localStorage.getItem('cardsList')).length)
    if (!localStorage.getItem('idCard') || JSON.parse(localStorage.getItem('cardsList')).length === 0) {
      localStorage.setItem('idCard', Number(0));
    }
    if (!localStorage.getItem('cardsList')) {

      let cardsList = [];
      localStorage.setItem('cardsList', cardsList);
    }

    let idCard = Number(localStorage.getItem('idCard'));
    commit('GET_ID_CARD', idCard);

    let cardsList = JSON.parse(localStorage.getItem('cardsList'))
    commit('REWRITE_CARD_LIST', cardsList);
  },
  updateIdCard({commit}, payload) {
    commit('INCREASE_ID_CARD', payload);
    localStorage.setItem('idCard', state.idCard);
  },
  addCard({commit}, payload) {
    commit('UPDATE_CARD_LIST', payload);

    //localStorage
    localStorage.setItem('cardsList', JSON.stringify(state.cardsList));
  },
  removeCard({commit}, payload) {
    let cardsList = this.state.cardsList;
    let indexToRemove = cardsList.findIndex(obj => obj.id === payload);
    cardsList.splice(indexToRemove, 1);
    commit('REWRITE_CARD_LIST', cardsList);

    //localStorage
    localStorage.setItem('cardsList', JSON.stringify(state.cardsList));
  }
};

const getters = {
  idCard: state => state.idCard,
  onHold: state => state.cardsList.filter(card => card.area == 'on-hold'),
  inProgress: state => state.cardsList.filter(card => card.area == 'in-progress'),
  needsReview: state => state.cardsList.filter(card => card.area == 'needs-review'),
  approved: state => state.cardsList.filter(card => card.area == 'approved')
};

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})

export default store;
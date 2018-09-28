<template>
  <div>
    <span></span>
    <a href="#" 
    class="column__open-from"
    v-if="areaFormActive != area"
    @click="setFormActive">+ Добавить еще одну карточку</a>

    <div v-else>
      <textarea name="" id="" class="column__textarea" ref="textarea" 
      v-model="buttonIsDisabled" @keyup.enter="addCard(area)">
      </textarea>
      <div class="column__button">
        <button class="column__button__add-card"
        @click="addCard(area)"
        :disabled="!buttonIsDisabled">Добавить</button>
        <button 
        class="column__button__remove-card"
        @click="closeForm">&#10006;</button>
      </div>  
    </div>
    
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'form-add-card',
  props: ['area'],
  data() {
    return {
      displayForm: false,
      buttonIsDisabled: null
    }
  },
  computed: {
    ...mapGetters(['idCard', 'areaFormActive']),
  },
  methods: {
    addCard(area) {
      let cardObj = {};

      cardObj.id = this.idCard + 1;
      cardObj.text = this.$refs.textarea.value;
      cardObj.area = area;

      this.$store.dispatch('updateIdCard', cardObj.id)

      this.$refs.textarea.value = '';
      this.buttonIsDisabled = null;

      // console.log(cardObj);

      switch (area) {
        case 'on-hold': {
          let data = this.$store.state.onHold;
          data.push(cardObj);
          this.$store.commit('SET_ON_HOLD', data); 
          break;
        }
        case 'in-progress': {
          let data = this.$store.state.inProgress;
          data.push(cardObj);
          this.$store.commit('SET_IN_PROGRESS', data); 
          break;
        }
        case 'needs-review': {
          let data = this.$store.state.needsReview;
          data.push(cardObj);
          this.$store.commit('SET_NEEDS_REVIEW', data); 
          break;
        }
        case 'approved': {
          let data = this.$store.state.approved
          data.push(cardObj);
          this.$store.commit('SET_APPROVED', data); 
          break;
        }

        this.$store.commit('SET_AREA_FORM_ACTIVE', this.area);
      }

      localStorage.setItem('state-app', JSON.stringify(this.$store.state));
      // this.$store.dispatch('addCard', cardObj)
    },
    closeForm() {
      this.$refs.textarea.value = '';
      this.buttonIsDisabled = null;
      this.displayForm = false
      this.$store.commit('SET_AREA_FORM_ACTIVE', '');
    },
    setFormActive() {
      console.log(this.area + ' = ' + this.setFormActive);
      this.$store.commit('SET_AREA_FORM_ACTIVE', this.area);
    }
  }
};
</script>

<style lang="scss">
</style>
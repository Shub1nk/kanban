<template>
  <div>
    <span></span>
    <a href="#" 
    class="column__open-from"
    v-if="!displayForm"
    @click="displayForm = true">+ Добавить еще одну карточку</a>

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
    ...mapGetters(['idCard']),
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

      this.$store.dispatch('addCard', cardObj)
    },
    closeForm() {
      this.$refs.textarea.value = '';
      this.buttonIsDisabled = null;
      this.displayForm = false
    }
  }
};
</script>

<style lang="scss">
</style>
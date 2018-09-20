<template>
  <div class="column">
    <h3 class="column__title background-green">APPROVED - {{approved.length}}</h3>
    <div class="column__content">
      <ul class="column__card-list">
        <li class="column__card-list__item"
        v-for="card in approved" :key="card.id">
          <p class="column__card-list__item__id"><b>id:</b> {{card.id}}</p>
          <p class="column__card-list__item__text">{{card.text}}</p>
          <button class="column__card-list__item__del"
          @click="remove(card.id)">&#10006;</button>
        </li>
      </ul>
      <form-add-card area="approved"/>
    </div>      
  </div>
</template>

<script>
import formAddCard from './formAddCard';

import {mapGetters} from 'vuex';

  export default {
    name: 'approved',
    computed: {
      ...mapGetters(['approved'])
    },
    methods: {
      remove(currentId) {
        this.$store.dispatch('removeCard', currentId)
      }
    },
    components: {
      formAddCard
    }
  }
</script>

<style scoped>

</style>
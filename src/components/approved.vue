<template>
  <div class="column">
    <h3 class="column__title background-green">APPROVED - {{approved.length}}</h3>
    <div class="column__content">
      <ul class="column__card-list">

        <draggable v-model="approved" :options="{group: 'cards'}" @end="setDataLocalStorage">

          <li class="column__card-list__item"
          v-for="card in approved" :key="card.id">
            <p class="column__card-list__item__id"><b>id:</b> {{card.id}}</p>
            <p class="column__card-list__item__text">{{card.text}}</p>
            <button class="column__card-list__item__del"
            @click="remove(card.id)">&#10006;</button>
          </li>

        </draggable>

      </ul>
      <form-add-card area="approved"/>
    </div>      
  </div>
</template>

<script>
import formAddCard from "./formAddCard";
import draggable from "vuedraggable";

import { mapGetters } from "vuex";

export default {
  name: "approved",
  computed: {
    // ...mapGetters(['approved'])
    approved: {
      get() {
        return this.$store.state.approved;
      },
      set(value) {
        this.$store.commit("SET_APPROVED", value);
      }
    }
  },
  methods: {
    remove(currentId) {
      let data = this.$store.state.approved;
      let indexToRemove = data.findIndex(obj => obj.id === currentId);
      data.splice(indexToRemove, 1);
      this.$store.commit("SET_APPROVED", data);

      localStorage.setItem('state-app', JSON.stringify(this.$store.state));
    },
    setDataLocalStorage() {
      localStorage.setItem('state-app', JSON.stringify(this.$store.state));
    }
  },
  components: {
    formAddCard,
    draggable
  }
};
</script>

<style scoped>
</style>
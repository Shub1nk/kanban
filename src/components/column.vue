<template>
  <div class="column">
    <h3 class="column__title background-orange">ON-HOLD</h3>
    <div class="column__content">


      <ul class="column__card-list">
        <draggable v-model="onHold" :options="{group: 'cards'}" @end="setDataLocalStorage">
        

          <li class="column__card-list__item">
            <p class="column__card-list__item__id"><b>id:</b> sadgsfd</p>
            <p class="column__card-list__item__text">gsf</p>
            <button class="column__card-list__item__del"
                    @click="remove()">&#10006;</button>
          </li>
        
        </draggable>
      </ul>
      
      <form-add-card area="on-hold"/>
    </div>      
  </div>
</template>

<script>
import formAddCard from "./formAddCard";
import draggable from "vuedraggable";
import { mapGetters } from "vuex";

export default {
  name: "column",
  props: ["column"],
  components: {
    formAddCard,
    draggable
  }
};
</script>

<style scoped>
</style>
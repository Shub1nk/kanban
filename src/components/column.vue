<template>
  <div class="column">
    <h3 class="column__title"
    :class="'background_' + column">{{ column }} - {{ cardsCounter }}</h3>
    <div class="column__content">

      <ul class="column__card-list">
        <draggable v-model="cardsList" class="drag-area" :options="{group: 'cards'}" @end="setDataLocalStorage">

          <li class="column__card-list__item"
              v-for="card in cardsList" :key="card.id">
            <p class="column__card-list__item__id"><b>id:</b> {{ card.id }}</p>
            <p class="column__card-list__item__text">{{ card.text }}</p>
            <button class="column__card-list__item__del"
                    @click="removeCard(card.id, column)">&#10006;</button>
          </li>
        
        </draggable>
      </ul>
      
      <form-add-card :area="column"/>
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
  computed: {
    ...mapGetters([
      "onHoldCounter",
      "inProgressCounter",
      "needsReviewCounter",
      "approvedCounter"
    ]),
    cardsCounter() {
      switch (this.column) {
        case "on-hold":
          return this.onHoldCounter;
          break;
        case "in-progress":
          return this.inProgressCounter;
          break;
        case "needs-review":
          return this.needsReviewCounter;
          break;
        case "approved":
          return this.approvedCounter;
          break;
      }
    },
    cardsList: {
      get() {
        switch (this.column) {
          case "on-hold":
            return this.$store.state.onHold;
            break;
          case "in-progress":
            return this.$store.state.inProgress;
            break;
          case "needs-review":
            return this.$store.state.needsReview;
            break;
          case "approved":
            return this.$store.state.approved;
            break;
        }
      },
      set(value) {
        console.log(value);
        switch (this.column) {          
          case "on-hold":{
            console.log("case= " + this.column);
            this.$store.commit("SET_ON_HOLD", value);
            break;
          }
            
          case "in-progress":
            this.$store.commit("SET_IN_PROGRESS", value);
            break;
          case "needs-review":
            this.$store.commit("SET_NEEDS_REVIEW", value);
            break;
          case "approved":
            this.$store.commit("SET_APPROVED", value);
            break;
        }
      }
    }
  },
  methods: {
    removeCard(id, columnName) {
      switch (columnName) {
        case "on-hold": {
          let data = this.$store.state.onHold;
          let indexToRemove = data.findIndex(obj => obj.id === id);
          data.splice(indexToRemove, 1);
          this.$store.commit("SET_ON_HOLD", data);
          localStorage.setItem("state-app", JSON.stringify(this.$store.state));
          break;
        }

        case "in-progress": {
          let data = this.$store.state.inProgress;
          let indexToRemove = data.findIndex(obj => obj.id === id);
          data.splice(indexToRemove, 1);
          this.$store.commit("SET_IN_PROGRESS", data);
          localStorage.setItem("state-app", JSON.stringify(this.$store.state));
          break;
        }

        case "needs-review": {
          let data = this.$store.state.needsReview;
          let indexToRemove = data.findIndex(obj => obj.id === id);
          data.splice(indexToRemove, 1);
          this.$store.commit("SET_NEEDS_REVIEW", data);
          localStorage.setItem("state-app", JSON.stringify(this.$store.state));
          break;
        }

        case "approved": {
          let data = this.$store.state.approved;
          let indexToRemove = data.findIndex(obj => obj.id === id);
          data.splice(indexToRemove, 1);
          this.$store.commit("SET_APPROVED", data);
          localStorage.setItem("state-app", JSON.stringify(this.$store.state));
          break;
        }
      }
    },
    setDataLocalStorage() {
      localStorage.setItem("state-app", JSON.stringify(this.$store.state));
    }
  },
  components: {
    formAddCard,
    draggable
  }
};
</script>

<style scoped lang="scss">

.drag-area {
  min-height: 10px;  
}

.column {
  width: 24%;
  overflow: hidden;

  .column__title {
    padding: 10px;
    font-weight: normal;
    color: white;
    margin: 0;
    text-transform: uppercase;
  }

  .column__content {
    background: #2b2d33;
    padding: 10px;
    margin: 0;

    .column__card-list {
      margin: 0;
      padding: 0;
      // height: 600px;
      // overflow-y: auto;

      .column__card-list__item {
        background: #1c1d20;
        padding: 10px;
        color: white;
        list-style-type: none;
        margin: 0 0 10px 0;
        position: relative;

        .column__card-list__item__del {
          position: absolute;
          top: 10px;
          right: 10px;
          border: none;
          outline: none;
          background: none;
          color: white;
          padding: 0;
          cursor: pointer;
        }

        .column__card-list__item__id {
          margin: 0 0 10px 0;
        }

        .column__card-list__item__text {
          margin: 0;
        }
      }
    }

    .column__textarea {
      width: 97%;
      margin-bottom: 10px;
    }

    .column__open-from {
      display: block;
      margin-bottom: 10px;
      color: white;
      text-decoration: none;
      font-size: 14px;

      &:hover {
        text-decoration: underline;
      }
    }

    .column__button {
      display: flex;
      justify-content: flex-start;

      .column__button__add-card,
      .column__button__remove-card {
        outline: none;
        border: none;
        border-radius: 5px;
        color: white;
        margin-right: 10px;
        padding: 5px 10px;
      }

      .column__button__add-card {
        background: #00b961;

        &:disabled {
          background: gray;
        }
      }

      .column__button__remove-card {
        background: #fa7e45;
      }
    }
  }
}
</style>
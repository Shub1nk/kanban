<template>
  <div class="column">
    <h3 class="column__title"
    :class="'background_' + column">{{column}}</h3>
    <div class="column__content">


      <ul class="column__card-list">
        <draggable v-model="onHold" :options="{group: 'cards'}">
        

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

<style scoped lang="scss">

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
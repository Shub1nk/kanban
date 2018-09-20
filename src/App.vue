<template>
  <div class="canban">
    <on-hold></on-hold>
    <in-progress></in-progress>
    <needs-review></needs-review>
    <approved></approved>
  </div>
</template>

<script>
import onHold from "./components/onHold";
import inProgress from "./components/inProgress";
import needsReview from "./components/needsReview";
import approved from "./components/approved";

export default {
  name: "app",
  created() {
    this.$store.dispatch('getData');
  },
  components: {
    onHold,
    inProgress,
    needsReview,
    approved
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Tahoma';
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background: #33363d;
}

.background-orange {
  background: #fb7e46;
}
.background-blue {
  background: #2a92bf;
}
.background-yellow {
  background: #f4ce46;
}
.background-green {
  background: #00b961;
}

.canban {
  display: flex;
  justify-content: space-between;
  width: 1000px;
  margin: 0 auto;

  .column {
    width: 24%;
    overflow: hidden;

    .column__title {
      padding: 10px;
      font-weight: normal;
      color: white;
      margin: 0;
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
}
</style>


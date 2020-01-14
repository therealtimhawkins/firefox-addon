<template>
  <div class="box has-no-shadow">
    <div v-show-slide="showInfo">
      <span>
        <a @click="toggleInfo()" class="icon is-small is-pulled-right has-text-grey-light">
          <i class="fa fa-times-circle" />
        </a>
      </span>
      <div>
        <div class="label has-text-primary">How do we calculate your carbon footprint?</div>
        <p>We calculate using...</p>
      </div>
      <br />
      <div>
        <div class="label has-text-primary">How do we use your payment?</div>
        <p>Using the money from this payment we will...</p>
      </div>
    </div>
    <div v-show-slide="!showInfo">
      <span>
        Your footprint
        <a
          @click="toggleInfo()"
          class="icon is-small is-pulled-right has-text-grey-light"
        >
          <i class="fa fa-question" />
        </a>
      </span>
      <div class="columns">
        <div class="column is-narrow">
          <span class="icon is-large is-left has-text-primary">
            <i class="fas fa-2x fa-pound-sign"></i>
          </span>
          <span class="title logo is-4">{{ get(footprint, "price", 0) }}</span>
        </div>
        <div class="column is-narrow">
          <span class="icon is-large is-left has-text-primary">
            <i class="fas fa-2x fa-tree"></i>
          </span>
          <span class="title is-4">{{ get(footprint, "trees", "0") }} trees</span>
        </div>
        <div class="column is-narrow">
          <span class="icon is-large is-left has-text-primary">
            <i class="fas fa-2x fa-industry"></i>
          </span>
          <span class="title is-4">{{ get(footprint, "co2", "0") }} kg of emissions</span>
        </div>
        <div class="column is-narrow">
          <span class="icon is-large is-left has-text-primary">
            <i class="fas fa-2x fa-gas-pump"></i>
          </span>
          <span class="title is-4">{{ get(footprint, "miles", "0") }} miles</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import get from "lodash.get";

export default {
  name: "Footprint",
  props: {
    footprint: Object
  },
  computed: {},
  data: function() {
    return { get, showInfo: false };
  },
  methods: {
    toggleInfo() {
      this.showInfo = !this.showInfo;
    },
    makeDecimal(num) {
      if (num) {
        return (num / 100).toFixed(2);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Playfair+Display:900:italic&display=swap");

.has-text-greenpay {
  font-family: "Playfair Display", serif, italic;
  font-weight: 900;
}

.has-no-shadow {
  box-shadow: 0 0 0 0 !important;
}
</style>

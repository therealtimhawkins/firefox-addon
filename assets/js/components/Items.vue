<template>
  <div class="box has-no-shadow">
    <div v-if="items" class="columns is-mobile">
      <div class="column is-narrow">
        <div class="icon greenpay-icon-large">
          <font-awesome-icon icon="shopping-bag" />
        </div>
      </div>
      <div class="column">
        <div class="title is-5 is-uppercase">{{ name }}</div>
        <div class="subtitle is-6 align-right">{{ formattedTime }}</div>
      </div>
    </div>
    <div v-for="item in items" v-bind:key="item.name + item.description">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
              </figure>
            </div>
            <div class="media-content">
              <p class="has-text-weight-bold is-size-7">{{ item.name }}</p>
              <p class="is-size-7">{{ item.description }}</p>
              <p class="is-size-7">{{ item.price }}</p>
              <p class="is-size-7">{{ item.size }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="button is-fullwidth is-small is-dark is-padded-top">
      <span class="icon is-small">
        <font-awesome-icon icon="shoe-prints" />
      </span>
      <span>Get footprint</span>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Items",
  props: {
    items: Array,
    name: String,
    time: Number
  },
  data: function() {
    return { showItems: true };
  },
  computed: {
    formattedTime() {
      return moment(this.time).format("DD/MM/YY hh:mm:ss");
    }
  },
  methods: {
    toggleItems() {
      this.showItems = !this.showItems;
    }
  }
};
</script>

<style scoped>
.greenpay-icon-large {
  padding: 20px 0 0 0;
  margin: 0 0 0 8px;
  font-size: 2em;
}

.card-content {
  white-space: initial;
}

.has-no-shadow {
  box-shadow: 0 0 0 0 !important;
}

.is-padded-top {
  margin-top: 16px;
}
</style>

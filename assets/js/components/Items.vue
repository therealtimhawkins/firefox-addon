<template>
  <span class="box is-primary">
    <div v-if="items" class="columns is-mobile">
      <div class="column"></div>
      <div class="column is-narrow">
        <div class="title is-5 is-uppercase">{{ name }}</div>
        <div class="subtitle is-6 align-right">
          {{ formattedTime }}
        </div>
      </div>
    </div>
    <div v-for="item in items" v-bind:key="item.name + item.description">
      <br />
      <ul>
        <li class="has-text-weight-bold is-size-7">{{ item.name }}</li>
        <li class="is-size-7">{{ item.description }}</li>
        <li class="is-size-7">{{ item.price }}</li>
        <li class="is-size-7">{{ item.size }}</li>
      </ul>
    </div>
  </span>
</template>

<script>
import moment from "moment"
export default {
  name: "Items",
  props: {
    items: Array,
    name: String,
    time: String
  },
  data: function() {
    return { showItems: true }
  },
  computed: {
    formattedTime() {
      return moment(this.time).format("DD/MM/YY")
    }
  },
  methods: {
    toggleItems() {
      this.showItems = !this.showItems
    }
  }
}
</script>

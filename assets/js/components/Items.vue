<template>
  <div class="box">
    <div v-if="items" class="columns is-mobile">
      <div class="column"></div>
      <div class="column is-narrow">
        <div class="title is-5 is-uppercase">{{ name }}</div>
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
  </div>
</template>

<script>
export default {
  name: "Items",
  props: {
    items: Array,
    name: String
  },
  data: function() {
    return { showItems: true }
  },
  methods: {
    toggleItems() {
      this.showItems = !this.showItems
    }
  }
}
</script>

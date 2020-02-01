<template>
  <div>
    <div class="title is-5">History</div>
    <div v-for="footprint in history" v-bind:key="footprint.name">
      <Items :items="footprint.items" :name="footprint.name" />
    </div>
  </div>
</template>

<script>
import Items from "./Items.vue"
export default {
  name: "History",
  components: { Items },
  props: {
    history: Array
  },
  methods: {}
}
</script>

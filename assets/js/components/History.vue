<template>
  <div>
    <br />
    <div class="scrolling-wrapper">
      <template v-for="footprint in history">
        <Items
          :items="footprint.items"
          :name="footprint.name"
          :time="footprint.time"
          v-bind:key="footprint.name"
          class="scrolling-card"
        />
      </template>
    </div>
    <br />
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
<style scoped>
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.scrolling-card {
  display: inline-block;
  margin-right: 12px;
  margin-left: 12px;
  width: 376px;
}
</style>

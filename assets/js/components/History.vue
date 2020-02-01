<template>
  <div>
    <span class="title is-5">History</span>
    <div v-for="footprint in history" v-bind:key="footprint.name">
      <Items :items="footprint" />
    </div>
  </div>
</template>

<script>
import Items from "./Items.vue";
export default {
  name: "History",
  components: { Items },
  props: {
    history: Array
  },
  methods: {}
};
</script>

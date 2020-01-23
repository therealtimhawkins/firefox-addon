<template>
  <div>
    <div v-for="item in items" v-bind:key="item.name">
      <ul>
        <li class="has-text-weight-bold">{{ item.name }}</li>
        <li>{{ item.description }}</li>
        <li>{{ item.price }}</li>
        <li>{{ item.size }}</li>
      </ul>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Payment",
  props: {
    items: Array
  }
};
</script>

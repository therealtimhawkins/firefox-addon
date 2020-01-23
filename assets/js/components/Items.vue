<template>
  <div>
    <span>
      <a @click="toggleItems()" class="icon is-small is-pulled-right has-text-primary">
        <font-awesome-icon icon="times-circle" />
      </a>
    </span>
    <div v-show-slide="showItems">
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
  </div>
</template>

<script>
export default {
  name: "Payment",
  props: {
    items: Array
  },
  data: function() {
    return { showItems: true };
  },
  methods: {
    toggleItems() {
      this.showItems = !this.showItems;
    }
  }
};
</script>

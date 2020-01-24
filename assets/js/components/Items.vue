<template>
  <div>
    <span class="title is-5">Items</span>
    <!-- <span>
      <a @click="toggleItems()" class="icon is-pulled-right has-text-info">
        <font-awesome-icon icon="times-circle" />
      </a>
    </span>-->
    <div v-show-slide="showItems">
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
  </div>
</template>

<script>
export default {
  name: "Items",
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

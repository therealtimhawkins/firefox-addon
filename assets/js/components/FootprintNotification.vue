<template>
  <div id="popup">
    <div class="is-size-4" id="logo">G.</div>
    <div class="container">
      <div class="columns is-mobile">
        <div class="column"></div>
        <div class="column is-narrow">
          <div class="title is-5 is-uppercase">
            <button
              @click="routeToGreenPay()"
              class="button is-info is-outlined"
            >
              <span class="icon is-small">
                <font-awesome-icon icon="shoe-prints" />
              </span>
              <span>Get footprint!</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FootprintNotification",
  props: {
    routeToGreenPay: Function
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Playfair+Display:900:italic&display=swap");

#popup {
  width: 200px;
  padding: 8px 8px 8px 8px;
}

#logo {
  font-family: "Playfair Display", serif, italic;
  font-weight: 900;
  padding: 0 4px 4px 4px;
}
</style>

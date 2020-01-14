<template>
  <div>
    <div v-show="success" class="title has-text-greenpay has-text-centered">Payment successful!</div>
    <div v-show="!success" class="title has-text-greenpay has-text-centered">Payment failed.</div>
  </div>
</template>

<script>
export default {
  name: "Payment",
  props: {
    success: Boolean
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Playfair+Display:900:italic&display=swap");

.has-text-greenpay {
  font-family: "Playfair Display", serif, italic;
  font-weight: 900;
}

.has-no-shadow {
  box-shadow: 0 0 0 0 !important;
}
</style>

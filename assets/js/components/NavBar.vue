<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="title is-4 is-centered" id="logo">GreenPay.</div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Playfair+Display:900:italic&display=swap");

#logo {
  font-family: "Playfair Display", serif, italic;
  font-weight: 900;
  padding: 16px 0 0 144px;
}
</style>

<template>
  <div id="greenpay">
    <NavBar />
    <div class="card">
      <div class="card-content">
        <div class="section">
          <CardDetails v-if="card" />
        </div>
      </div>
      <footer class="card-footer">
        <a @click="test()" class="card-footer-item">
          <div class="icon">
            <font-awesome-icon icon="home" />
          </div>
        </a>
        <a @click="panel = 'card'" class="card-footer-item">
          <div class="icon">
            <font-awesome-icon icon="credit-card" />
          </div>
        </a>
        <a @click="panel = 'user'" class="card-footer-item">
          <div class="icon">
            <font-awesome-icon icon="user" />
          </div>
        </a>
      </footer>
    </div>
  </div>
</template>
<script type="application/javascript" src="https://js.stripe.com/v3/"></script>
<script>
import NavBar from "./NavBar";
import CardDetails from "./CardDetails";
import Footprint from "./Footprint";
import Payment from "./Payment";
import GreenPay from "../services/greenPay";
import axios from "axios";
import get from "lodash.get";

export default {
  name: "GreenPay",
  components: { NavBar, CardDetails, Footprint, Payment },
  data: function() {
    return {
      panel: "home"
    };
  },
  computed: {
    card() {
      return this.panel === "card";
    },
    home() {
      return this.panel === "home";
    },
    user() {
      return this.panel === "user";
    }
  },
  methods: {
    async test() {
      browser.runtime.sendMessage({});
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Playfair+Display:900:italic&display=swap");

#greenpay {
  width: 400px;
}

#logo {
  font-family: "Playfair Display", serif, italic;
  font-weight: 900;
}

.icon {
  font-size: 1.5em;
}

a {
  color: inherit;
}

/* .card-footer-item {
  border-bottom: 5px solid green;
} */
</style>

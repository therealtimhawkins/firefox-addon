<template>
  <div id="greenpay">
    <NavBar />
    <div class="card">
      <div class="card-content">
        <div class="section">
          <Footprint v-if="footprint" />
          <History :history="history" v-if="bag" />
          <CardDetails v-if="card" />
        </div>
      </div>
      <footer class="card-footer">
        <a @click="panel = 'footprint'" class="card-footer-item">
          <div class="icon">
            <font-awesome-icon icon="shoe-prints" />
          </div>
        </a>
        <a @click="panel = 'bag'" class="card-footer-item">
          <div class="icon">
            <font-awesome-icon icon="shopping-bag" />
          </div>
        </a>
        <a @click="panel = 'card'" class="card-footer-item">
          <div class="icon">
            <font-awesome-icon icon="credit-card" />
          </div>
        </a>
        <!-- <a @click="panel = 'user'" class="card-footer-item">
          <div class="icon">
            <font-awesome-icon icon="user" />
          </div>
        </a>-->
      </footer>
    </div>
  </div>
</template>
<script type="application/javascript" src="https://js.stripe.com/v3/"></script>
<script>
import NavBar from "./NavBar";
import History from "./History.vue";
import CardDetails from "./CardDetails";
import Footprint from "./Footprint";
import Payment from "./Payment";
import GreenPay from "../services/greenPay";
import { request } from "../services/request";
import get from "lodash.get";

export default {
  name: "GreenPay",
  components: { NavBar, History, CardDetails, Footprint, Payment },
  data: function() {
    return {
      panel: "bag",
      name: "",
      items: null,
      history: null
    };
  },
  computed: {
    bag() {
      return this.panel === "bag";
    },
    card() {
      return this.panel === "card";
    },
    footprint() {
      return this.panel === "footprint";
    },
    user() {
      return this.panel === "user";
    }
  },
  async created() {
    browser.runtime.onMessage.addListener(message => {
      if (message.action === "returnItems" && message.items.length) {
        this.items = message.items;
        this.name = message.name;
        this.getFootprint();
      }
    });

    const store = await browser.storage.local.get();
    console.log(history.length);
    this.history = store.history;

    browser.runtime.sendMessage({ action: "getItems" });
  },
  methods: {
    async getFootprint() {
      // console.log("Getting footprint");
      // const result = await request("http://www.example.com");
      // console.log(result);
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

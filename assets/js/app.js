import Vue from "vue"
import App from "./components/GreenPay.vue"
import VueSlider from "v-show-slide"
require("../scss/main.scss")

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faUser,
  faCreditCard,
  faShoePrints
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faUser)
library.add(faShoePrints)
library.add(faCreditCard)

Vue.component("font-awesome-icon", FontAwesomeIcon)
Vue.use(VueSlider)

new Vue({
  el: "#greenpay",
  components: {
    App
  },
  render(h) {
    return h("app")
  }
})

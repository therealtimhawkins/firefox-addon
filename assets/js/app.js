import Vue from "vue"
import App from "./components/Main.vue"
import VueSlider from "v-show-slide"
require("../scss/main.scss")

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faUser,
  faCreditCard,
  faShoePrints,
  faTimesCircle,
  faShoppingBag
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faUser)
library.add(faShoePrints)
library.add(faCreditCard)
library.add(faTimesCircle)
library.add(faShoppingBag)

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

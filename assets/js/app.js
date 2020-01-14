import Vue from "vue"
import App from "./components/GreenPay.vue"
import VueSlider from "v-show-slide"
require("../scss/main.scss")

import { library } from "@fortawesome/fontawesome-svg-core"
import { faUser, faHome, faCreditCard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faUser)
library.add(faHome)
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

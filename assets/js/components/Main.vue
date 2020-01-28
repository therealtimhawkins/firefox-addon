<template>
  <div>
    <div v-if="showGreenPay">
      <GreenPay />
    </div>
    <div v-if="!showGreenPay">
      <FootprintNotification :routeToGreenPay="routeToGreenPay" />
    </div>
  </div>
</template>

<script>
import GreenPay from "./GreenPay"
import FootprintNotification from "./FootprintNotification"
export default {
  name: "Footprint",
  components: { GreenPay, FootprintNotification },
  data: function() {
    return { showGreenPay: false }
  },
  methods: {
    routeToGreenPay() {
      this.showGreenPay = true
    }
  }
}
</script>

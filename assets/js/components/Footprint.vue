<template>
  <div>
    <br />
    <CarbonChart />
  </div>
</template>

<script>
import CarbonChart from "./CarbonChart"
export default {
  name: "Footprint",
  components: { CarbonChart },
  props: {
    footprint: Array
  }
}
</script>

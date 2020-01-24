<template>
  <div>
    <span class="title is-5">Footprint</span>
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

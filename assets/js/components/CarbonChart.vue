<template>
  <div>
    <div id="chart" />
  </div>
</template>

<script>
import ApexCharts from "apexcharts"

export default {
  name: "CarbonChart",
  props: {},
  mounted() {
    var options = {
      series: [
        {
          name: "",
          data: [80, 50, 30, 40, 100]
        },
        {
          name: "",
          data: [20, 30, 40, 80, 20]
        },
        {
          name: "",
          data: [44, 76, 78, 13, 43]
        }
      ],
      chart: {
        height: 350,
        type: "radar",
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      legend: {
        show: true
      },
      stroke: {
        show: true,
        width: 2,
        colors: [],
        dashArray: 0
      },
      fill: {
        opacity: 0.3
      },
      markers: {
        size: 0
      },
      xaxis: {
        labels: {
          show: false
        }
      }
    }

    var chart = new ApexCharts(document.querySelector("#chart"), options)
    chart.render()
  }
}
</script>

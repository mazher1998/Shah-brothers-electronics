<template>
  <div>
    <highcharts :options="chartOptions" />
  </div>
</template>

<script>
export default {

  data() {
    return {
      chartOptions: {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Order History'
        },
        xAxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June']
        },
        yAxis: {
          title: {
            text: 'Orders'
          }
        },
        series: [
          {
            name: 'Series 1',
            data: [100, 220, 130, 115, 233,390],
            color: '#d7e6e9'
          }
        ]
      }
    };
  }
};
</script>


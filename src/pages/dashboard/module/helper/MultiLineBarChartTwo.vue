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
          text: 'Sales History'
        },
        xAxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        },
        yAxis: {
          title: {
            text: 'Sales'
          }
        },
        series: [
          {
            name: 'Series 1',
            data: [110, 50, 60, 95, 123,45,123,112,93,53,74,124],
            color: '#d7e6e9'
          }
        ]
      }
    };
  }
};
</script>


<template>
  <div>
    need to add check box taht will change data for orders and recovery percentage for all branches
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
          text: 'Sales History of all Branches'
        },
        xAxis: {
          categories:  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        },
        yAxis: {
          title: {
            text: 'Sales'
          }
        },
        series: [
          {
            name: 'Johar Town',
            data: [10, 20, 30, 15, 23,45,13,12,23,53,34,24],
            color: '#5757579c'
          },
          {
            name: 'Link Road',
            data: [5, 60, 30, 45, 13,65,3,79,24,13,24,64],
            color: '#b8c8e7'
          },
          {
            name: 'Wapda Town',
            data: [40, 10, 10, 35, 73,25,43,52,83,23,74,54],
            color: '#96c2c2'
          },
          {
            name: 'Gulberg',
            data: [20, 10, 40, 25, 33,43,11,10,13,43,24,60],
            color: '#bca6708f'
          },
        ]
      }
    };
  }
};
</script>


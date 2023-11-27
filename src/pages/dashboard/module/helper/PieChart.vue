<template>
  <div>
    <highcharts :options="chartOptions" />
  </div>
</template>

<script>
export default {
  props:['chartOptions'],
};
</script>

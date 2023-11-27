<template>
  <div class="q-pa-xl">
    <p>Dashboard</p>
    <div class="row ">
      <div class="col-3 q-pr-sm">
        <q-card class="my-card">
          <q-card-section class="flex justify-between">
            <p class="q-mb-none text-18 text-bold">Total number of orders</p>
            <p class="q-mb-none text-18">244</p>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-3 q-px-sm">
        <q-card class="my-card">
          <q-card-section class="flex justify-between">
            <p class="q-mb-none text-18 text-bold">Total Customers</p>
            <p class="q-mb-none text-18">202</p>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-3 q-px-sm">
        <q-card class="my-card">
          <q-card-section class="flex justify-between">
            <p class="q-mb-none text-18 text-bold">Recovery Percentage</p>
            <p class="q-mb-none text-18">65%</p>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-3 q-pl-sm">
        <q-card class="my-card">
          <q-card-section class="flex justify-between">
            <p class="q-mb-none text-18 text-bold">Total Products</p>
            <p class="q-mb-none text-18">134</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <TableOne :Data="joharTownEmployee" :branchName="'Johar Town'"></TableOne>
      </div>
      <div class="col-3">
        <TableOne :Data="linkRoadEmployee" :branchName="'Link Road'"></TableOne>
      </div>
      <div class="col-3">
        <TableOne :Data="wapdaTownEmployee" :branchName="'Wapda Town'"></TableOne>
      </div>
      <div class="col-3">
        <TableOne :Data="GulbergEmployee" :branchName="'Gulberg'"></TableOne>
      </div>
    </div>
    <div class="row">
      <div class="col-6 q-pr-sm">
        <q-card>
          <MultiLineBarChart></MultiLineBarChart>
        </q-card>
      </div>
      <div class="col-6">
        <q-card>
          <MultiLineBarChartTwo></MultiLineBarChartTwo>
        </q-card>
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col-12 q-pr-sm">
        <q-card>
          <MultiLineChartThree></MultiLineChartThree>
        </q-card>
      </div>
    </div>
    <div class="row q-mt-lg">
      <div class="col-4 q-pr-sm">
        <q-card>
          <PieChart :chartOptions="chartOptions1"></PieChart>
        </q-card>
      </div>
      <div class="col-4 q-px-sm">
        <q-card>
          <PieChart :chartOptions="chartOptions2"></PieChart>
        </q-card>
      </div>
      <div class="col-4 q-pl-sm">
        <q-card>
          <PieChart :chartOptions="chartOptions3"></PieChart>
        </q-card>
      </div>
    </div>

  </div>
</template>
<script>
import TableOne from 'pages/dashboard/module/helper/TableOne.vue';
import MultiLineBarChart from 'pages/dashboard/module/helper/MultiLineBarChart.vue';
import MultiLineBarChartTwo from 'pages/dashboard/module/helper/MultiLineBarChartTwo.vue';
import MultiLineChartThree from 'pages/dashboard/module/helper/MultiLineChartThree.vue';
import PieChart from 'pages/dashboard/module/helper/PieChart.vue';
export default {
components:{
  TableOne,
  MultiLineBarChart,
  PieChart,
  MultiLineBarChartTwo,
  MultiLineChartThree
},
  data(){
    return{
      chartOptions1: {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Top Selling Products',
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.sales}'
            }
          }
        },
        series: [
          {
            name: 'Data',
            colorByPoint: true,
            data: [
              {
                name: 'Iphone 11',
                y: 15,
                sales:112,
                color:'#5757579c',
              },
              {
                name: 'Washing Machine',
                y: 30,
                sales:221,
                color: '#b8c8e7'
              },
              {
                name: 'TV',
                y: 45,
                sales:321,
                color: '#96c2c2'
              },
              {
                name: 'Oven',
                y: 10,
                sales:90,
                color: '#bca6708f'
              }
            ]
          }
        ]
      },
      chartOptions2: {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Top Losing Products',
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.sales}'
            }
          }
        },
        series: [
          {
            name: 'Data',
            colorByPoint: true,
            data: [
              {
                name: 'Laptop',
                y: 1,
                sales:1,
                color:'#5757579c',
              },
              {
                name: 'Hair Dryer',
                y: 30,
                sales:12,
                color: '#b8c8e7'
              },
              {
                name: 'Hand Blender',
                y: 7,
                sales:3,
                color: '#96c2c2'
              },
              {
                name: 'Sandwich Maker',
                y: 20,
                sales:10,
                color: '#bca6708f'
              }
            ]
          }
        ]
      },
      chartOptions3: {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Best Performing Employees',
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.sales:.1f}'
            }
          }
        },
        series: [
          {
            name: 'Data',
            colorByPoint: true,
            data: [
              {
                name: 'Ali',
                y: 10,
                sales:200,
                color:'#5757579c',
              },
              {
                name: 'Saleem',
                y: 20,
                sales:300,
                color: '#b8c8e7'
              },
              {
                name: 'Wahab',
                y: 30,
                sales:500,
                color: '#96c2c2'
              },
              {
                name: 'Farkan',
                y: 40,
                sales:800,
                color: '#bca6708f'
              }
            ]
          }
        ]
      },
      joharTownEmployee: [
        {
          name:'Ali',
          amount:20000,
          recovered:18000,
          percentage: '90%',
        },
        {
          name:'Huzaifa',
          amount:30000,
          recovered:25000,
          percentage: '85%',
        },
        {
          name:'Hamza',
          amount:650000,
          recovered:58000,
          percentage: '92%',
        },
        {
          name:'Arham',
          amount:9000,
          recovered:9000,
          percentage: '100%',
        },
        {
          name:'Ayaan',
          amount:760000,
          recovered:11000,
          percentage: '16%',
        },{
          name:'Ahmad',
          amount:30000,
          recovered:18000,
          percentage: '60%',
        },{
          name:'Bilal',
          amount:15000,
          recovered:15000,
          percentage: '100%',
        },
      ],
      linkRoadEmployee: [
        {
          name:'Ali',
          amount:20000,
          recovered:18000,
          percentage: '90%',
        },
        {
          name:'Huzaifa',
          amount:30000,
          recovered:25000,
          percentage: '85%',
        },
        {
          name:'Hamza',
          amount:650000,
          recovered:58000,
          percentage: '92%',
        },
        {
          name:'Bilal',
          amount:15000,
          recovered:15000,
          percentage: '100%',
        },
        {
          name:'Ayaan',
          amount:760000,
          recovered:11000,
          percentage: '16%',
        },
      ],
      wapdaTownEmployee:[
        {
          name:'Ayaan',
          amount:760000,
          recovered:11000,
          percentage: '16%',
        },
        {
          name:'Bilal',
          amount:15000,
          recovered:15000,
          percentage: '100%',
        },
        {
          name:'Huzaifa',
          amount:30000,
          recovered:25000,
          percentage: '85%',
        },
        {
          name:'Hamza',
          amount:650000,
          recovered:58000,
          percentage: '92%',
        },
        {
          name:'Ahmad',
          amount:30000,
          recovered:18000,
          percentage: '60%',
        }
      ],
      GulbergEmployee:[
        {
          name:'Hamza',
          amount:650000,
          recovered:58000,
          percentage: '92%',
        },
        {
          name:'Ali',
          amount:20000,
          recovered:18000,
          percentage: '90%',
        },
        {
          name:'Ayaan',
          amount:760000,
          recovered:11000,
          percentage: '16%',
        },
        {
          name:'Huzaifa',
          amount:30000,
          recovered:25000,
          percentage: '85%',
        },

        {
          name:'Bilal',
          amount:15000,
          recovered:15000,
          percentage: '100%',
        },
      ]
    }
  }
}
</script>

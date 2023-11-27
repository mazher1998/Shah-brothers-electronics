<template>
  <div class="q-py-md q-pr-sm">
    <q-table
      flat bordered
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
      separator="vertical"
    />
  </div>
</template>

<script>
import { ref } from 'vue'

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'calories', align: 'center', label: 'Total Amount', field: 'amount', sortable: true },
  { name: 'fat', label: 'Recovered', field: 'recovered', sortable: true },
  { name: 'carbs', label: 'Percentage', field: 'percentage' },

]

const rows = [
  {
    name:'Ali',
    amount:20000,
    recovered:18000,
    percentage: '90%',
  },
  {
    name:'Ali',
    amount:20000,
    recovered:18000,
    percentage: '90%',
  },
  {
    name:'Ali',
    amount:20000,
    recovered:18000,
    percentage: '90%',
  },
  {
    name:'Ali',
    amount:20000,
    recovered:18000,
    percentage: '90%',
  },
  {
    name:'Ali',
    amount:20000,
    recovered:18000,
    percentage: '90%',
  },{
    name:'Ali',
    amount:20000,
    recovered:18000,
    percentage: '90%',
  },{
    name:'Ahmad',
    amount:15000,
    recovered:15000,
    percentage: '100%',
  },
]

export default {
  setup () {
    return {
      separator: ref('vertical'),
      columns,
      rows
    }
  }
}
</script>

<template>
  <div class="q-py-md q-pr-sm">
    <q-table
        flat bordered
        :title="branchName"
        :rows="Data"
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


export default {
  setup () {
    return {
      separator: ref('vertical'),
      columns,
    }
  },
  props:['Data','branchName']
}
</script>

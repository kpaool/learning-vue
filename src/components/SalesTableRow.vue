
<script setup>
import { reactive } from 'vue';


    const props = defineProps({
        sale:Object,
        index:Number
    })

    const sale = reactive(props.sale)
    
</script>

<template>
     <tr :key="sale.id">
        <td>{{props.index + 1}}</td>
        <td>{{sale.customer}}</td>
        <td>{{sale.items}}</td>
        <td>{{sale.dueDate}}</td>
        <td><strong>{{ sale.balance }}</strong></td>
        <td><span class="status-badge partial">{{sale.status}}</span></td>
    </tr>
</template>

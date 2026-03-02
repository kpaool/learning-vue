
<script setup>
import { reactive } from 'vue';

    const props = defineProps({
        sale:Object,
        index:Number
    })

    const sale = reactive(props.sale)
    const emit = defineEmits(['delete-sale','update-sale'])

    // function deleteSale(id){
    //     emit("delete-sale",{id})
    // }

    const removeSale = (id)=>{
        emit("delete-sale",{id})
    }

    const editSale = (id)=>{
        emit("update-sale",{id})
    }
    
</script>

<template>
     <tr :key="sale.id">
        <td>{{sale.id}}</td>
        <td>{{sale.customer}}</td>
        <td>{{sale.items}}</td>
        <td>{{sale.dueDate}}</td>
        <td><strong>{{ sale.balance }}</strong></td>
        <td><span class="status-badge partial">{{sale.status}}</span></td>
        <td>
            <button @click="removeSale(sale.id)">Delete</button>
            <button class="primary" @click="editSale(sale.id)">Edit</button>
        </td>
    </tr>
</template>

<style scoped>
    button{
        background-color: red;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        margin: 0px 10px 0px 10px
    }
    .primary{
        background-color: green;
    }
</style>
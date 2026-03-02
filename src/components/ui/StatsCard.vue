<script setup>

    const props = defineProps({
        title:String,
        description:String,
    })

</script>


<template>
     <div class="card">
        <h3>{{props.title}}</h3>
        <span class="amount" id="totalSales">{{props.description}}</span>
    </div>
</template>
<script setup>
// the scripts go in here

</script>

<template>
   <!-- html goes here--> 
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
/* the styles go in here */
    button{
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }
    button:hover{
        background-color: #45a049;
    }
</style>

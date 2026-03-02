<script setup>
// the scripts go in here
import "./assets/main.css" 
import LoginComponent from "./views/Login.vue"
import SalesComponent from "./views/Sales.vue"
import { ref } from "vue"


/**
 * After some code to determine the user role, we can set the user role
 */
  const userRole = ref("sales-agent")


</script>

<template>
  
<RouterView/>

</template>

<style scoped>
/* the styles go in here */

</style>

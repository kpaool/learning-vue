<script setup>
// the scripts go in here
  import "./assets/css/bootstrap.min.css"
  import { ref,reactive } from "vue"

  const darkMode = ref(true);
  const username = ref("Kitsa")

  setTimeout(()=>{
    darkMode.value = !darkMode.value;
    console.log(darkMode.value)

    credentials.username = "Ajabu"
    credentials.password = "password"

  },5000)

  const credentials = reactive({
    username:"kitsa",
    password:"12345"
  })

  console.log(credentials.username,credentials.password)

</script>

<template>
<!-- html goes here--> 

<div>

</div>

<div class="container">
  <div class="row">
    <div class="col-12">
      <h1>{{ credentials.username }}</h1>
    </div>
  </div>
</div>

<button class="btn btn-primary">
  {{ darkMode }}
</button>

<div>
  {{ credentials.username }}
  {{ credentials.password }}
</div>

</template>

<style scoped>
/* the styles go in here */

</style>

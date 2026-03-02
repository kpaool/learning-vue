
<script setup>

    import { useRoute } from "vue-router"
    import { ref } from "vue"


    const route = useRoute()

    const id = ref(route.params.id)

</script>


<template>
    <div>
        The id for this particular sale is {{ id }}
    </div>
</template>
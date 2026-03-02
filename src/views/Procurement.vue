
<script setup>

</script>


    
<template>

    <h2 style="text-align: center;">Produce Availability</h2>
    
    <div class="flex-container">
        <div class="card">
            <h3>Matooke</h3>
            <p>Stock: 50 bunches</p>
            <div class="price">USX 25,000</div>
            <span class="location maganjo">Maganjo</span>
        </div>

        <div class="card">
            <h3>Fresh Tomatoes</h3>
            <p>Stock: 120 kg</p>
            <div class="price">USX 3,500 / kg</div>
            <span class="location gayaza">Gayaza</span>
        </div>
    </div>



</template>


<style scoped>

    body { font-family: sans-serif; background: #f4f7f6; padding: 20px; }
        
        /* Flex container setup */
        .flex-container { 
            display: flex; 
            flex-wrap: wrap; 
            justify-content: center; /* Centralizes items */
            gap: 20px; 
            padding: 20px;
        }

        .card { 
            background: white; 
            width: 280px; 
            padding: 20px; 
            border-radius: 12px; 
            box-shadow: 0 4px 10px rgba(0,0,0,0.05); 
            text-align: center; /* Centers text inside cards */
        }

        .location { 
            display: inline-block; 
            padding: 5px 12px; 
            border-radius: 20px; 
            font-size: 0.85em; 
            font-weight: 600; 
            margin-top: 10px;
        }
        
        .maganjo { background: #e3f2fd; color: #1565c0; }
        .gayaza { background: #e8f5e9; color: #2e7d32; }
        .price { font-size: 1.3em; color: #d32f2f; font-weight: bold; margin: 10px 0; }
</style>
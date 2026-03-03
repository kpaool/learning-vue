
<script setup>

    import apiClient from "@/utils/axios"
    import { onMounted, reactive } from "vue";
    import { useCartStore } from "@/stores/cartStore";

    const products = reactive([])
    const cartStore = useCartStore()

    onMounted(async()=>{
        const response = await apiClient.get("/products")
        console.log(response.data.products)
        products.push(...response.data.products)
    })


 

</script>

<template>
    <main class="product-grid">

        <div v-for="product in products" :key="product.id" class="product-card">
            <div class="product-image">
                <img :src="product.thumbnail" alt="Product Name">
                <span class="tag">{{product.tags.join(", ")}}</span>
            </div>
            <div class="product-info">
                <p class="category">{{product.category}}</p>
                <h3>{{product.title}}</h3>
                <p class="price">${{ product.price }}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>

    </main>
</template>

<style scoped>
    /* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

body {
    background-color: #f8f9fa;
    padding: 40px 20px;
    color: #333;
}

header {
    text-align: center;
    margin-bottom: 50px;
}

header h1 {
    font-size: 2.5rem;
    color: #1a1a1a;
}

/* Grid Layout */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
}

/* Card Styling */
.product-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #eee;
}

.product-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0,0,0,0.1);
}

.product-image {
    position: relative;
    background: #e9ecef;
}

.product-image img {
    width: 100%;
    display: block;
}

.tag {
    position: absolute;
    top: 15px;
    left: 15px;
    background: #000;
    color: #fff;
    padding: 5px 12px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 20px;
}

.product-info {
    padding: 20px;
}

.category {
    font-size: 12px;
    text-transform: uppercase;
    color: #888;
    letter-spacing: 1px;
    margin-bottom: 8px;
}

.product-info h3 {
    font-size: 1.25rem;
    margin-bottom: 10px;
}

.price {
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 20px;
}

/* Button Styling */
.add-to-cart {
    width: 100%;
    padding: 12px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.3s ease;
}

.add-to-cart:hover {
    background-color: #333;
}
</style>
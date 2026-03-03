import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCartStore = defineStore("cart",()=>{
    const cartItems = reactive([])

    function addToCart(productId,quantity,thumbnail){
        let item = {
            productId,
            quantity,
            thumbnail
        }

        cartItems.push(item)
    }

    function checkout(){
        
    }

    return {
        cartItems,
        addToCart,
        checkout
    }
},{
    persist:true
})
<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'


</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

<!-- 

<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const products = ref([
      { id: 1, name: 'Product 1', price: 100, qty:1},
      { id: 2, name: 'Product 2', price: 200, qty:1},
      { id: 3, name: 'Product 3', price: 300 , qty:1},
    ]);

    const carts=ref([])

    const addProductToCart =(product)=>{

       const foundProduct= carts.value.find((cartItem)=> cartItem.id==product.id)

       if(foundProduct){
        foundProduct.qty++;
       }else{
        carts.value.push({
            ...product,
            qty:1
        })
       }

    }

watch(
  carts,
  (newCart, oldCart) => {
    console.log("New cart:", newCart[0]);
    console.log("Old cart:", oldCart);
  },
  { deep: true }
);

    return {
      products,
      addProductToCart,
      carts
    };
  }
};
</script>
<template>
  <div class="products-container">

    <div class="product-list">
      <div
        class="product"
        v-for="product in products"
        :key="product.id"
      >
        <span class="product-name">
          {{ product.name }}
        </span>

        <span class="product-price">
          ${{ product.price }}
        </span>

        <button @click="addProductToCart(product)">
          Add To Cart
        </button>
      </div>
    </div>

    <div class="cart">
      <span class="cart-label">
        Cart Items
      </span>

      <span class="cart-count">
        {{ carts.length }}
      </span>
    </div>

  </div>
</template>
-->
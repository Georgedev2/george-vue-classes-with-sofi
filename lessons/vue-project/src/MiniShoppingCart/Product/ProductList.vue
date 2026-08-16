
<script>
   import { computed, ref, watch } from 'vue';
// import ProductListPage from './ProductList.vue';

export default {
  // name: 'ProductList',
  // components: {
  //   ProductList
  // },
  setup() {
 

const carts=ref([])

const products=ref([
  {
    name: 'Product 1',
    id: 1,
    price: 100,
    qty: 1,
    currency:'$'
  },
   {
    name: 'Product 2',
    id: 2,
    price: 300,
    qty: 1,
    currency:'$'
  },
   {
    name: 'Product 3',
    id: 3,
    price: 500,
    qty: 1,
    currency:'$'
  }
])

const totalItemsInCart=computed(() => carts.value.reduce((total, item) => total + item.qty, 0));
const totalPrice=computed(() => carts.value.reduce((total, item) => total + item.price * item.qty, 0));
const addProductToCart =(product)=>{

   const foundProduct= carts.value.find((cartItem)=> cartItem.id==product.id)// null

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
  },{
    deep:true
  }
)

  return {
    products,
    addProductToCart,
    carts,
    totalPrice,  totalItemsInCart
   }
}
}


// const products = ref([
//   { id: 1, name: 'Product 1', price: 100, qty:1},
//   { id: 2, name: 'Product 2', price: 200, qty:1},
//   { id: 3, name: 'Product 3', price: 300 , qty:1},
// ]);

// const carts=ref([])

// const addProductToCart =(product)=>{

//    const foundProduct= carts.value.find((cartItem)=> cartItem.id==product.id)

//    if(foundProduct){
//     foundProduct.qty++;
//    }else{
//     carts.value.push({
//         ...product,
//         qty:1
//     })
//    }

// }

// watch(
//   carts,
//   (newCart, oldCart) => {
//     console.log("New cart:", newCart[0]);
//     console.log("Old cart:", oldCart);
//   },
//   { deep: true }
// );

</script>
<template>
  <div class="products-container">
    <div class="product-list">
      <div class="product" v-for="product in products" :key="product.id">
        <div class="product-name">{{ product.name }}</div>
        <div class="product-price">{{ product.currency }}{{ product.price }}</div>
        <button @click="addProductToCart(product)">Add to Cart</button>
      </div>
    </div>

    <div class="cart">
      <div class="cart-label">Cart</div>
      <div class="cart-count">{{ carts.length }}</div>
    </div>  
    <div v-for="cart in carts" :key="cart.id">
      <p>{{ cart.name }} - Quantity: {{  totalItemsInCart }}</p  >

    </div>
    <div v-if="carts.length === 0">
      <p>Your cart is empty.</p>
  </div>
  <div v-else>
      <p>Total Items in Cart:$ {{totalPrice }}</p>
  </div>
  </div>  

</template>

<style scoped>

.products-container {
  max-width: 700px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: Arial, sans-serif;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.product {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  gap: 10px;
}

.product-name {
  font-size: 18px;
  font-weight: 600;
}

.product-price {
  font-size: 16px;
  color: #555;
}

.product button {
  margin-top: 5px;
  padding: 10px 14px;
  border: none;
  border-radius: 6px;
  background: #42b883;
  color: white;
  cursor: pointer;
  font-size: 14px;
}

.product button:hover {
  background: #369f6e;
}

.cart {
  margin-top: 30px;
  padding: 18px 20px;
  border-radius: 10px;
  background: #f5f7fa;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-label {
  font-size: 18px;
  font-weight: 600;
}

.cart-count {
  min-width: 30px;
  height: 30px;
  padding: 0 8px;
  border-radius: 50%;
  background: #42b883;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
}
</style>
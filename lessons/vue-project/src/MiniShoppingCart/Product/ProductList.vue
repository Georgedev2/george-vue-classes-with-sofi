

<script setup lang="ts" >
   import { computed, ref, watch } from 'vue';
 type Count=number; // Pascal 
const count =ref<number>(0)// generic in typescript

  const name:string="pual"


type DaysOfTheWeek= 'Monday'| "Tuseday"| "Wenesday"| 'Thursday'| "Friday";

  const daysOfTheWeek=ref<DaysOfTheWeek>("Monday")


   type Product = {
    name: string;
    id: number;
    price: number;
    qty: number;
    currency: string;

  };


     interface MYProduct  {
    name: string;
    id: number;
    price: number;
    qty: number;
    currency: string;

  };

    interface MYProduct  {
    name: string;
    id: number;
    price: number;
    qty: number;
    currency: string;
    isActive?: boolean; // Optional property

  };

  type CartItem = {
    name: string;
    id: number;
    price: number;
    qty: number;
    currency: string;
  };
const carts=ref<CartItem[]>([])

const user=ref({
  username:'',
  password:'',
  email:'',
  name:''
})
// const username=ref('')
// const password=ref('');
// const email=ref('');
// const name=ref('');

const products=ref<Product[]>([
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

const addProductToCart =(product: Product)=>{

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


 
const addRemoveprouductFromCart =(product: Product)=>{

   const foundProduct= carts.value.find((cartItem)=> cartItem.id==product.id)// null

   if(foundProduct && foundProduct.qty>1){

    foundProduct.qty--;
   }else{
    carts.value = carts.value.filter((cartItem)=> cartItem.id!==product.id) 
    
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

watch(
 user,
  (newUser, oldUser) => {
    console.log("New user data:", newUser);
    console.log("Old user data:", oldUser);
  },{
    deep:true
  }
)

const handleSubmit = (event: Event) => {
  // event.preventDefault(); // Prevent the default form submission behavior
  console.log("Form submitted with user data:", user.value);

  // You can perform further actions here, such as sending the data to a server
};  
</script>
<template>
  <div class="products-container">
    <div class="product-list">
      <div class="product" v-for="product in products" :key="product.id">
        <div class="product-name">{{ product.name }}</div>
        <div class="product-price">{{ product.currency }}{{ product.price }}</div>
        <button @click="addProductToCart(product)">Add to Cart</button>
        <button @click="addRemoveprouductFromCart(product)">REMOVE</button>
      </div>
    </div>

    <div class="cart">
      <div class="cart-label">Cart</div>
      <div class="cart-count">{{ carts.length }}</div>
    </div> 

    <div v-for="cartItem in carts" :key="cartItem.id">
      <p>{{ cartItem.name }} - Quantity: {{ cartItem.qty }}</p>
    </div>

    <div v-if="carts.length === 0">
      <p>Your cart is empty.</p>
  </div>
  <div v-else>
      <p>Total Items in Cart:$ {{totalPrice }}</p>
  </div>
  <form @submit.prevent="handleSubmit" >
    <input type="text" v-model="user.username" placeholder="Username"> <br>
    <input type="password" v-model="user.password" placeholder="Password"> <br>
    <input type="email" v-model="user.email" placeholder="Email"> <br>
    <input type="text" v-model="user.name" placeholder="Name"> <br>
    <button type="submit" >Submit</button>
  </form>
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
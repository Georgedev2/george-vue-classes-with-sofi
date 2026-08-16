<!-- <script setup>
import { onMounted } from 'vue';
import { useCounter } from '@/composables/useCounter';
import { useFetch } from '@/composables/useFetch';

const { count, increment } = useCounter();
const { data, error, isLoading, fetchData } = useFetch();

onMounted(() => {
    fetchData('https://jsonplaceholder.typicode.com/todos/1');
});
</script> -->
<script setup>
import ProductList from '@/MiniShoppingCart/ProductList.vue';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';


// export default {

//   components:{
//     ProductList
//   },
  // setup(){
 const count=ref(0)
 const router=useRouter()
 const route=useRoute()  

 console.log('r', route.query)
 const increment=()=>{
   count.value++
 }

 const goToAbout=()=>{
  router.push('/profile')
 }
//  return {
  // count, 
  // increment,
  // goToAbout
//  }
  // }
// }
</script>

<template>
  <h1>About Vue</h1>
  <ProductList/>
    <!-- <button @click="increment">
        Increment Count {{ count }}
    </button>

    <div class="about">
        <h1>This is an about page {{ count }}</h1>

        <p v-if="isLoading">Loading...</p>

        <p v-else-if="error">
            Error: {{ error }}
        </p>

        <pre v-else-if="data">{{ data }}</pre>
        <a style="color: white;" href="https://lucide.dev/"> React Lucide</a>

  <button @click="goToAbout">
    Go to About
  </button>
    </div> -->
</template>


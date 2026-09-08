<script setup >
import { ref, watch } from 'vue';
import CartItem from './CartItem.vue';


const nameRef=ref("going")

const user=ref({
       age:10,
       gender:'F'
       })
watch(nameRef,()=>{
    console.log(nameRef.value)
})
const run =(data)=>{
  console.log(data)
}
</script>
<template>
  <div>  {{ nameRef }}</div>
    <input type="text" v-model="nameRef"> 
      <CartItem 
       name="George"  
       school="Hope Children school" 
       :user="user"
       @change-me="run"
      />
</template>
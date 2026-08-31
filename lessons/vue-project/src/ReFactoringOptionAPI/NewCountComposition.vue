<template>

<br><br><br>
<div style="color:brown">{{ name }}</div>
<div style="color:brown">{{ count }}</div>
<div>DOUBLED {{ doubled }}</div>
<button @click="increment">INcrement Count {{ count }}</button> <br>
<button @click="changeName"> Change Name</button>


</template>
<script setup lang="ts">
import { ref,computed, watch } from 'vue';

const count=ref<number>(0)
const name=ref<string>('NEW COUNT LOGIC');

const increment=()=>{
    return count.value++

}

const  changeName=()=>{
return name.value="SOFI"
}

const doubled=computed(()=>(count.value*2))

watch (count, (newCount, oldCount)=>{
  console.log(oldCount, newCount)
})


</script>
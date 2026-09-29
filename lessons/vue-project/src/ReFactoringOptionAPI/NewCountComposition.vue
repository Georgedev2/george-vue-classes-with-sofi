<template>

<br><br><br>
<div style="color:brown">{{ name }}</div>
<div style="color:brown">{{ count }}</div>
<div>DOUBLED {{ doubled }}</div>
<button @click="increment">INcrement Count {{ count }}</button> <br>
<button @click="changeName"> Change Name</button>

<button @click="getUserName(1)"> Fetch My Detail {{ detail.name }}</button>


</template>
<script setup lang="ts">
import { ref,computed, watch, reactive } from 'vue';

let detail=reactive({
  id: 0,
  name: '',
  username: '',
  email: ''})

  function getUserName(userId:number) {
            // let userName = '';
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                        console.log(data.name)
  
                        Object.assign(detail, data)
                        //  detail=data
                    // userName = data.name;
                });

            // return userName;
        }

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
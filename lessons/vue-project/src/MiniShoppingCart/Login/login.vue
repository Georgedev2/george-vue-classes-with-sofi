<template>

    <form action="
    ">
<input type="text" name="username" v-model="formdata.username">
<input type="text" name="password" v-model="formdata.password">
<button type="button" @click="submit">Submit</button>
</form>


</template>
<script setup>
import { ref, watch } from 'vue';



const formdata=ref({
    username:'',
    password:''
})

watch(formdata,(newState, old)=>{
console.log(newState)},{
    deep:true
}


)

const submit=(e)=>{

console.log(formdata.value)

fetch()
}
</script>
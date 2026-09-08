<script setup lang="ts">

import { ref } from 'vue';
// typescript way
defineProps<{
    name:string,
    school:string
    user:{
        age:number,
        gender:string
    }
}>()

const emits=defineEmits(['change-me'])



// defineProps({
//     name:{
//         type:String,
        
//     }
//     ,school:{
//         type:String
//     },
//     user:{
//        type: {
//         age:Number,
//         gender:String,
//        },
//     //    required:true
//     }
// })

const changeUser=()=>{
    emits('change-me', {
        name:'Henry', age:10
    })
}
</script>
<template>
    May name is: {{ name }} and my schooL {{ school }}

<div>
    {{ user.age }} {{ user.gender }}
</div>
<button @click="changeUser">Change User</button>
</template>
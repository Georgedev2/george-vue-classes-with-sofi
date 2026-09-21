<template>
  <input type="text" v-model="searchQuery" placeholder="Search...">
  <div>
    <p>You are searching for: {{ searchQuery }}</p>
  </div>

  <ul >
    <li v-for="language in languages" :key="language">{{ language }}</li>
  </ul>
<div>{{ look }}</div>
  <Button @sofi="handleClick" :label="searchQuery"  @george="handleMeWell" />
</template>
<script setup>
import { computed, reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Button from './Button.vue'

// data type primitive string, number, boolean, 
// object data type: { }, array etc..
const languages = ref(['java', 'python', 'javascript', 'c++', 'ruby'])
const myData=ref('sofi')

const user2=ref({
  name:'sofi',
  isLiked: true,

})


const user=reactive({
  name:'sofi',
  isLiked: true,

})

console.log( ' user',user)
console.log(' user2',  user2.value)
// const look=computed(()=> myData.value+ "HAY")

const handleMeWell = (data) => {
  console.log('Button clicked with label:', data)
}
const handleClick = (data) => {
  console.log('Button clicked with label:', data)
}
const router = useRouter()

const searchQuery = ref('')

watch(searchQuery, (newQuery) => {
  console.log('Search query changed:', newQuery)
})


// What is the difference between ref, reactive, computed, and watch?
watch(searchQuery, (newQuery) => {

    if(newQuery.trim()===''){
        router.push({})

        return
    }
  router.push({ path: '/search', query: { q: newQuery } })
 
})
// domain+ path/ query
// search=hdjhd & men=hdjhd &hhf=value


// CSRF 
// 
// and XXS



</script>

<!-- <script>
  // javascript
</script> -->


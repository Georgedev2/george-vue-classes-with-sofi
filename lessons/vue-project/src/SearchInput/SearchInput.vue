<template>
  <input type="text" v-model="searchQuery" placeholder="Search...">
  <div>
    <p>You are searching for: {{ searchQuery }}</p>
  </div>

  <ul v-for="language in languages" :key="language">
    <li>{{ language }}</li>
  </ul>

  <Button @sofi="handleClick" :label="searchQuery"  @george="handleMeWell" />
</template>
<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Button from './Button.vue'


const languages = ref(['java', 'python', 'javascript', 'c++', 'ruby'])

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

watch(searchQuery, (newQuery) => {

    if(newQuery.trim()===''){
        router.push({})

        return
    }
  router.push({ path: '/search', query: { q: newQuery } })
 
})
// domain+ path/ query
// search=hdjhd & men=hdjhd &hhf=value



</script>


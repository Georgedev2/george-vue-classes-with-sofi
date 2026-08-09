<template>
  <div>
    <button @click="increment">Increment Count {{  count }}</button>


    <!-- <p>{{ userInfo }}</p> -->
    <!-- <p>Double Count: {{ doubleCount }}</p> -->

    <!-- Attribute binding -->
    <div :title="userInfo">
      Hover to see info
    </div>

    <!-- Conditional rendering -->
    <p v-if="doubleCount > 10">
      High count detected!
    </p>
  </div>
</template>

<script setup>
import { useCounter } from '@/composables/useCounter'
import { ref, computed, onUnmounted } from 'vue'
const {   count,     increment} = useCounter()
// onUnmounted(() => {
//   console.log('Component unmounted')
// })

// const count = ref(0)
const email = ref('john.doe@example.com')

// function increment() {
//   count.value++
// }

// const userInfo = computed(() => `${counterStore.email} has clicked ${counterStore.count} times`)
// const doubleCount = computed(() => counterStore.count * 2)
</script>

<!--  OLD -->


<!-- <template>
  <div class="counter-card">
    <p class="user-email">User: {{ email }}</p>
    <span class="counter-display">{{ count }}</span>
    <button type="button" @click="increment">
      Top up Counter ({{ count }})
    </button>
  </div>
</template>

<script>
export default {
  name: 'CounterCard',
  data() {
    return {
      count: 0,
      email: 'john.doe@example.com'
    }
  },
  computed: {
    userInfo() {
      return `${this.email} has clicked ${this.count} times`
    },
    // Safe pure calculation replacing badProperty
    doubleCount() {
      return this.count * 2
    }
  },
  methods: {
    // Matched method name with template event
    increment() {
      this.count++
    }
  },
  watch: {
    // Watching reactive data property 'count'
    count(newVal, oldVal) {
      console.log(`Counter updated from ${oldVal} to ${newVal}`)
    }
  }
}
</script>

<style scoped>
.counter-card {
  padding: 1rem;
  background-color: #f4f4f5;
  border-radius: 8px;
}

.counter-display {
  display: inline-block;
  font-weight: bold;
  color: #0f172a; /* Changed from white for visible contrast */
  margin: 0 0.5rem;
}

.user-email {
  color: #475569;
}
</style> -->
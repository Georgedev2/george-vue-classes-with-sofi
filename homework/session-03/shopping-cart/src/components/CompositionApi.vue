<template>
<section>
    <div>
        <h1>COMPOSITION API</h1>
    </div>

    <div>
        <p>Step (from prop): {{ step }}</p>
        <button @click="addToCounter">Counter +{{ step }}</button>
        <p>Counter: {{ counter }}</p>
        <p>Doubled (computed): {{ doubled }}</p>
    </div>

    <div>
        <input v-model="username" placeholder="Username" />
        <p v-if="username">Hello, {{ username }}!</p>
    </div>

    <div>
        <button @click="toggleActive">Toggle Active</button>
        <p>Status: {{ isActive ? 'Active' : 'Inactive' }}</p>
    </div>
</section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
    step: {
        type: Number,
        default: 1
    }
})

const counter = ref(0)
const isActive = ref(false)
const username = ref("")

const doubled = computed(() => counter.value * 2)

const addToCounter = () => {
    counter.value += props.step
}

const toggleActive = () => {
    isActive.value = !isActive.value
}

watch(counter, (newVal, oldVal) => {
    console.log(`Counter changed from ${oldVal} to ${newVal}`)
})
</script>

<style>

</style>

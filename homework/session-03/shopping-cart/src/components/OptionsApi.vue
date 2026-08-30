<template>
<section>
    <div>
        <h1>OPTIONS API</h1>
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

<script>
// Options API needs no imports for reactivity — data/methods/computed/watch
// are just plain object options that Vue reads internally.
export default {
    props: {
        step: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            counter: 0,
            isActive: false,
            username: ""
        }
    },
    computed: {
        doubled() {
            return this.counter * 2
        }
    },
    methods: {
        addToCounter() {
            this.counter += this.step
        },
        toggleActive() {
            this.isActive = !this.isActive
        }
    },
    watch: {
        counter(newVal, oldVal) {
            console.log(`Counter changed from ${oldVal} to ${newVal}`)
        }
    }
}
</script>

<style>

</style>

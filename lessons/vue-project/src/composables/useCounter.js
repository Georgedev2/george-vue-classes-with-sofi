import { ref } from 'vue'

export function useCounter() {
    const count = ref(10)

    function increment() {
        count.value++
    }

    return {
        count,
        increment
    }

}
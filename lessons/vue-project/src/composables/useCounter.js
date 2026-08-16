import { ref, onMounted } from 'vue'

export function useCounter() {
    const count = ref(10)

    function increment() {
        count.value++
    }

    onMounted(() => {})
        console.log('Component mounted');
    
    return {
        count,
        increment
    }
}
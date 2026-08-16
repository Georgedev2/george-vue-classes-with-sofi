<template>
<div>
    <p v-if="isLoading">Loading...</p>

    <p v-else-if="error">
        Error: {{ error }}
    </p>

    <pre v-else>{{ data }}</pre>
</div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { onMounted } from 'vue';
import { useFetch } from '@/composables/useFetch';
const { data, error, isLoading, fetchData } = useFetch();

onMounted(() => {
    fetchData('https://jsonplaceholder.typicode.com/posts');
});

const email = ref('john.doe@example.com')

</script>

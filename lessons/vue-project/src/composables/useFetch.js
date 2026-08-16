import { ref } from 'vue';

export function useFetch() {
    const data = ref(null);
    const error = ref(null);
    const isLoading = ref(false);

    const fetchData = async (url) => {
        isLoading.value = true;
        error.value = null;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            data.value = await response.json();
        } catch (err) {
            error.value = err.message;
        } finally {
            isLoading.value = false;
        }
    };

    return {
        data,
        error,
        isLoading,
        fetchData
    };
}
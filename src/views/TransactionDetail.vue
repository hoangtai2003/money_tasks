<template>
    <h1>Đây là trang chi tiết</h1>
    <!-- Lấy id -->
     <div v-if="transaction">
        <h1>ID: {{ $route.params.id }}</h1>
        <h3>Name: {{ transaction.name }}</h3>
        <p>Price: {{ transaction.price }}</p>
     </div>
     <div v-else>
        <p>Loading transaction {{ $route.params.id  }} .....</p>
     </div>
</template>
<script setup>
import { ref, onMounted } from "vue"
import { useRoute} from "vue-router"

const route  = useRoute();
const transaction = ref(null)
const getOneDataTransaction = async () =>  {
    try {
        const response = await fetch(`http://localhost:3000/transactions/${route.params.id}` );
        transaction.value = await response.json();
    } catch (error) {
        console.error("Error fetching transactions:", error);
    }
}
onMounted(() => {
    getOneDataTransaction();
}) 
</script>
<template>
    <div v-if="transactions.length">
        <div class="item" v-for="transaction in transactions" :key="transaction.id">
            <!-- <router-link :to="`transaction/${transaction.id}`">{{ transaction.name }}</router-link> -->
            <router-link 
                :to="{name: 'transactiondetail', 
                params: {id: transaction.id}}"> {{ transaction.name }}
            </router-link>
            <div class="price">{{ transaction.price }}</div>
        </div>
    </div>
  <div v-else>Loading transaction.....</div>
</template>
<script setup>
import { ref, onMounted } from "vue"

const transactions = ref([])
const getAllDataTransaction = async () =>  {
    try {
        const response = await fetch("http://localhost:3000/transactions");
        transactions.value = await response.json();
    } catch (error) {
        console.error("Error fetching transactions:", error);
    }
}
onMounted(() => {
    getAllDataTransaction();
}) 
</script>
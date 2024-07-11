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
import { onMounted, computed } from "vue"
import { useStore } from "vuex";

const store  = useStore()
const transactions = computed(() => store.state.transaction.transactions)
const getAllDataTransaction = async () =>  {
    store.dispatch("transaction/fetchAllTransactions")
}
onMounted(() => {
    getAllDataTransaction();
}) 
</script>
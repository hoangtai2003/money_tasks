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
import { onMounted, computed } from "vue"
import { useRoute} from "vue-router"
import { useStore } from "vuex";

const route  = useRoute();
const transaction = computed(() => store.state.transaction.transaction)
const store = useStore();
const getOneDataTransaction = async () =>  {
    await store.dispatch("transaction/fetchTransaction", {id: route.params.id})
}
onMounted(() => {
    getOneDataTransaction();
}) 
</script>
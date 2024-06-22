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
<script>
    export default {
        data() {
            return {
                transaction: null
            }
        },
        async created() {
            const response = await fetch("http://localhost:3000/transactions/" + this.$route.params.id)
            const data = await response.json()
            this.transaction = data
        }
    }
</script>
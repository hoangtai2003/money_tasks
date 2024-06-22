<template>
  <h1>Đây là trang chi tiết</h1>
  <div class="item" v-for="transaction in transactions" :key="transaction.id">
      <!-- <router-link :to="`transaction/${transaction.id}`">{{ transaction.name }}</router-link> -->
       <router-link 
            :to="{name: 'transactiondetail', 
            params: {id: transaction.id}}"> {{ transaction.name }}
       </router-link>
      <div class="price">{{ transaction.price }}</div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            transactions: []
        };
    },
    // Cách 1: sử dụng await vì đây là dữ liệu bất đồng bộ
    // Sử dụng await trước một Promise nó sẽ tạm dừng thực thi của hàm cho đến khi Promise đó được giải quyết hoặc từ chối
    async logTransactions() {
        // Thực thi hàm sẽ tạm dừng ở đây cho đến khi yêu cầu fetch hoàn thành và Promise trả về bởi fetch được giải quyết với đối tượng phản hồi.
        const response = await fetch("http://localhost:3000/transactions")
        const data = await response.json()
        this.transactions = data
    }
    // Cách 2
//     created() {
//         fetch("http://localhost:3000/transactions")
//             .then((response) => response.json())
//             .then((data) => this.transactions = data)
//     }
}
</script>
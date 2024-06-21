<template>
  <h1>Đây là trang chi tiết</h1>
  <div class="item" v-for="transaction in transactions" :key="transaction.id">
      <router-link :to="`transaction/${transaction.id}`">{{ transaction.name }}</router-link>
      <div class="price">{{ transaction.price }}</div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            transactions: [
                {
                    id: 1,
                    name: "Đi siêu thị ngày 28/5",
                    price: 1000000
                },
                {
                    id: 2,
                    name: "Thanh toán tiền nhà",
                    price: 2000000
                },
                {
                    id: 3,
                    name: "Thanh toán tiền điện nước",
                    price: 3000000
                }
            ]
        }
    }
}
</script>
<template>
    <div class="home">
        <input v-model="searchText">
    </div>
    <ul v-for="(customer, index) in customerFilter" :key="index">
        <li>{{ customer }}</li>
    </ul>
</template>

<script setup>
import { onMounted } from "vue";
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex"

// Ref muốn truy cập thuộc tính cần phải truy cập thông qua value
const searchText = ref("")
// reactive thì truy cập trực tiếp vào đối tượng bên trong nó
// Reactive chỉ giúp thay đổi theo dõi bên trong object mà nó đã tạo
const customers = reactive([
    "Hoàng Đức Tài",
    "Sơn TÙng MTP",
    "Đom Đóm"
]);
const store = useStore()
const customerFilter = computed(() => {
    return customers.filter((customer) => customer.includes(searchText.value));
});

onMounted(()=> {
    customerFilter;
})

</script>

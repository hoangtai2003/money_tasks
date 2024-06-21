import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Transaction from '../views/Transaction.vue'
import TransactionDetail from '@/views/TransactionDetail.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/transaction',
    name: 'transaction',
    component: Transaction
  },
  {
    path: '/transaction/:id',
    name: 'transactiondetail',
    component: TransactionDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

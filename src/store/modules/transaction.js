const state = () => ({
    transaction: null,
    transactions: []
})

// mutations làm thay đổi giá trị trong state
const mutations = {
    setTransaction(state, transactionPayload) {
        state.transaction = transactionPayload
    },
    setTransactions(state, transactionsPayload) {
        state.transactions = transactionsPayload
    }
}

// actions dùng để lấy dữ liệu từ Backend API
const actions = {
    async fetchTransaction({ commit }, { id }) {
        const response = await fetch(`http://localhost:3000/transactions/${id}`);
        const data = await response.json();
        commit("setTransaction", data)
    },
    async fetchAllTransactions({ commit }) {
        const response = await fetch("http://localhost:3000/transactions");
        const data = await response.json();
        commit("setTransactions", data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

import { createStore } from 'vuex'
import transaction from './modules/transaction'

export default createStore({
    modules: {
        transaction
    }
})

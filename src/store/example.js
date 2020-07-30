export default {
    state: {
        message: 'hello vuex again',
        message2: 'and again'
    },
    mutations: {},
    actions: {},
    getters: {
        getMessage(state) {
            return state.message
        }
    }
}
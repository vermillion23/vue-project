import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [],
        newTodo: '',
        searchedTodo: ''
    },

    actions: {
        getTodo({ commit }, todo) {
            commit('GET_TODO', todo)
        },
        addTodo({ commit }) {
            commit('ADD_TODO')
        },
        editTodo({ commit }, todo) {
            commit('EDIT_TODO', todo)
        },
        removeTodo({ commit }, todo) {
            commit('REMOVE_TODO', todo)
        },
        clearTodo({ commit }) {
            commit('CLEAR_TODO')
        },
        getSearchedTodo({ commit }, searchedTodo) {
            commit('GET_SEARCHED_TODO', searchedTodo)
        }
    },
    mutations: {
        GET_TODO(state, todo) {
            state.newTodo = todo
        },
        ADD_TODO(state) {
            state.todos.push({
                body: state.newTodo
            })
        },
        CLEAR_TODO(state) {
            state.newTodo = ''
        },
        EDIT_TODO(state, todo) {
            var todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
            state.todos = todos
            state.newTodo = todo.body
        },
        REMOVE_TODO(state, todo) {
            var todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
        },
        GET_SEARCHED_TODO(state, searchedTodo) {
            state.searchedTodo = searchedTodo
        }
    },

    getters: {
        newTodo: state => state.newTodo,
        todos: state => state.todos,
        searchedTodo: state => state.searchedTodo
    }
})
<template>
    <div class="search-items d-flex mb-4"> 
            <input id="search-todo" type="text"
            class="form-control todo-list-input mx-sm-2"
            :value="searchedTodo"
            @input="getSearchedTodo"
               placeholder="Искать">
    </div>
</template>

<script>
export default {
    methods: {
        getSearchedTodo(e) {
            this.$store.dispatch('getSearchedTodo', e.target.value)
        }
    },
    computed: {
         searchedTodo(){
            return this.$store.getters.searchedTodo
        }
    }

}

</script>

<style lang="scss" scoped>

</style>
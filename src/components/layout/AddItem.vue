<template>
    <div class="add-items d-flex mb-4"> 
        <input id="get-todo" type="text" class="form-control todo-list-input mx-sm-2"
                    :value="newTodo"
                    @change="getTodo"
                    placeholder="Новая задача">
        <button class="btn btn-primary btn-sm todo-list-add-btn" @click="addTodo">Add</button>
    </div>
</template>

<script>
 export default{
        methods: {
            getTodo(e){
                this.$store.dispatch('getTodo', e.target.value)
            },
            addTodo(){
                this.$store.dispatch('addTodo')
                this.$store.dispatch('clearTodo')
            }
        },
        computed: {
            newTodo(){
                return this.$store.getters.newTodo
            }
        }
    }
</script>

<style scoped>

</style>
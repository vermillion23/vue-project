<template>
    <div class="card-body">
                <transition name="fade"> 
                    <h3 class="card-title" v-if="todos.length > 0">Задач на сегодня({{todos.length}})</h3>
                </transition>
        <ul class="list-group d-flex flex-column-reverse">
            <li class="list-group-item" v-for="todo in todos" :key="todo.id">
                <div class="d-flex justify-content-between">
                    <span>
                    {{todo.body}}
                    </span>
                
                    <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-secondary btn-sm" @click="edit(todo)">Edit</button>
                            <button type="button" class="btn btn-secondary btn-sm" @click="remove(todo)">Delete</button>
                    </div>
                </div>
            </li>
                 <!-- <button class="btn btn-default" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>-->
        </ul> 
    </div>


</template>

<script>
    export default{
        methods: {
          edit(todo){
            this.$store.dispatch('editTodo', todo)
            },
            complete(todo){
            this.$store.dispatch('completeTodo', todo)
            },
            remove(todo){
            this.$store.dispatch('removeTodo', todo)
            }
        },
        computed: {
             todos(){
            return this.$store.getters.todos
            }
        }
    }
</script>

<style scoped>

/* .button-custom {
    background-color: #343a40;
} */
.fade-enter-active {
  transition: opacity .5s;
}
.fade-enter {
  opacity: 0;
}
</style>
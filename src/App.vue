<template>
    <div class="container">
        <MyHeader @add-todo="addTodo"></MyHeader>
        <MyList :todos="sortedTodos"></MyList>
        <MyFooter v-show="todos.length" @delete-done="deleteDone" :todos="todos"></MyFooter>
    </div>
</template>

<script>
import MyList from './components/MyList.vue'
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import pubsub from 'pubsub-js'

export default {
    name: 'App',
    components: { MyList, MyHeader, MyFooter },
    data() {
        return {
            todos: JSON.parse(localStorage.getItem('todos')) || [],
        }
    },
    computed: {
        sortedTodos() {
            return this.todos.slice(0).sort((a, b) => a.done - b.done)
        }
    },
    methods: {
        addTodo(todo) {
            this.todos.unshift(todo)
        },
        deleteTodo(_, id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
        deleteDone() {
            this.todos = this.todos.filter(todo => !todo.done);
        },
        editTodo(_, data) {
            const { id, title } = data;
            this.todos = this.todos.map(todo => {
                if (todo.id === id) todo.title = title
                return todo
            });
        }
    },
    watch: {
        todos: {
            deep: true,
            handler(value) {
                localStorage.setItem('todos', JSON.stringify(value))
            }
        }
    },
    mounted() {
        this.deleteTodoId = pubsub.subscribe('delete-todo', this.deleteTodo)
        this.editTodoId = pubsub.subscribe('edit-todo', this.editTodo)
    },
    beforeDestroy() {
        pubsub.unsubscribe(this.deleteTodoId);
        pubsub.unsubscribe(this.editTodoId);
    }
}
</script>

<style>
.container {
    width: 50%;
    margin: 20px auto;
    box-shadow: 0 0 2px 2px gray;
}
</style>
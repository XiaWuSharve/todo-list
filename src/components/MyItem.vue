<template>
    <li>
        <input type="checkbox" :id="myTodo.id" v-model="myTodo.done">
        <label :for="myTodo.id" v-show="!myTodo.isEditing">{{ myTodo.title }}</label>
        <input ref="editInput" type="text" v-show="myTodo.isEditing" :value="todo.title" @blur="handleBlur"
            @keydown.enter="handleBlur">
        <button @click="deleteTodo">删除</button>
        <button v-show="!myTodo.isEditing" @click="editTodo">编辑</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
    name: 'MyItem',
    props: ['todo'],
    data() {
        return {
            myTodo: this.todo,
        }
    },
    methods: {
        deleteTodo() {
            pubsub.publish('delete-todo', this.myTodo.id);
        },
        editTodo() {
            if (Object.prototype.hasOwnProperty.call(this.myTodo, 'isEditing'))
                this.myTodo.isEditing = true;
            else this.$set(this.myTodo, 'isEditing', true);
            this.$nextTick(() => {
                this.$refs.editInput.focus()
            })
        },
        handleBlur(e) {
            if (e.target.value) pubsub.publish('edit-todo', { id: this.myTodo.id, title: e.target.value });
            this.myTodo.isEditing = false;
        }
    }
}
</script>

<style scoped>
li {
    border: 2px solid #3f3f3f3f;
    border-radius: 5px;
    margin: 5px;
    padding: 2px;
    list-style: none;
    overflow: hidden;
}

li:hover {
    background: #3f3f3f3f;
}

li:hover button {
    visibility: visible;
}

input {
    display: inline-block;
    margin: 2px;
}

button {
    float: right;
    background: red;
    border-radius: 5px;
    padding: 2px;
    margin: 2px;
    color: white;
    visibility: hidden;
}
</style>
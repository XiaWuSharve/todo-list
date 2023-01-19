<template>
    <v-list-item>
        <v-checkbox :label="myTodo.isEditing ? '' : myTodo.title" v-model="myTodo.done"></v-checkbox>
        <v-text-field ref="editInput" v-show="myTodo.isEditing" :value="todo.title" @blur="confirmEdit"
            @keydown.enter="confirmEdit"></v-text-field>
        <v-spacer></v-spacer>
        <v-btn v-show="!myTodo.isEditing" @click="editing">编辑</v-btn>
        <v-btn class="ml-2" @click="deleteTodoById(todo.id)">删除</v-btn>
    </v-list-item>
</template>

<script>
import { useTodoStore } from '@/store';
export default {
    name: 'MyItem',
    props: ['todo'],
    setup() {
        const { deleteTodoById, editTitle } = useTodoStore();
        return { deleteTodoById, editTitle };
    },
    data() {
        return {
            myTodo: this.todo,
        }
    },
    methods: {
        editing() {
            this.myTodo.isEditing = true;
            this.$nextTick(() => {
                this.$refs.editInput.focus()
            })
        },
        confirmEdit(e) {
            if (e.target.value) this.editTitle(this.myTodo.id, e.target.value)
            this.myTodo.isEditing = false;
        }
    }
}
</script>
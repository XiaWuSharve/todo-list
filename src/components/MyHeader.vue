<template>
    <v-text-field label="输入待办事项，回车确认" @keydown.enter="add" v-model="text"></v-text-field>
</template>

<script>
import { nanoid } from 'nanoid'
import { useTodoStore } from '@/store'
export default {
    name: 'MyHeader',
    setup() {
        const { addTodo } = useTodoStore();
        return { addTodo }
    },
    data() {
        return {
            text: '',
        }
    },
    methods: {
        add() {
            if (!this.text.trim()) return;
            const todoObj = { id: nanoid(), title: this.text, done: false, isEditing: false }
            this.addTodo(todoObj)
            this.text = '';
        }
    }
}
</script>
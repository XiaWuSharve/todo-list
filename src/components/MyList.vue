<template>
    <v-list>
        <MyItem v-for="todo in todos" :key="todo.id" :todo="todo"></MyItem>
    </v-list>
</template>

<script>
import { useTodoStore } from '@/store';
import MyItem from './MyItem.vue';
import { storeToRefs } from 'pinia';
export default {
    name: 'MyList',
    components: { MyItem },
    setup() {
        const store = useTodoStore();
        let { todos } = JSON.parse(localStorage.getItem('todos')) || [];
        store.$patch({ todos });
        console.log(store)
        todos = storeToRefs(store).todos;
        console.log(todos)
        store.$subscribe((mutation, state) => localStorage.setItem('todos', JSON.stringify(state)))
        return { todos };
    },
}
</script>
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', {
  state: () => ({
    todos: [],
  }),
  getters: {
    empty: state => !state.todos.length,
    doneCount: state => state.todos.reduce((pre, todo) => pre + todo.done, 0),
    total: state => state.todos.length,
    allDone: state => state.doneCount === state.total,
  },
  actions: {
    addTodo(todo) {
      this.todos.unshift(todo)
      console.log(this.todos)
    },
    getTodoById(id) {
      return this.todos.find(todo => todo.id === id)
    },
    clearDone() {
      return this.todos = this.todos.filter(todo => !todo.done)
    },
    updateAll(done) {
      this.todos.forEach(todo => todo.done = done)
    },
    deleteTodoById(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    editTitle(id, title) {
      this.getTodoById(id).title = title;
    },
  },
})

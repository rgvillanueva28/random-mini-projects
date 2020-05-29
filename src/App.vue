<template>
  <div id="app" class="min-h-screen" v-bind:class="[bgLight ? 'bg-white': 'bg-gray-900']">
    <Header v-on:toggleBG="toggleBG" v-bind:bgLight="bgLight" />
    <div class="container mx-auto">
      <AddTodo v-on:add-todo="addTodo" v-bind:bgLight="bgLight" />
      <div class="h-auto container mx-auto items-center text-center">
        <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
      </div>
    </div>
    <Footer v-bind:bgLight="bgLight" />
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [],
      bgLight: true
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo) {
      if (this.todos.filter(todo => todo.title == newTodo.title).length === 0) {
        this.todos = [...this.todos, newTodo];
      } else {
        alert("Duplicate");
      }
    },
    toggleBG() {
      this.bgLight = !this.bgLight;
    }
  }
};
</script>

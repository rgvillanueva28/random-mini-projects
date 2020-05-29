<template>
  <div class="container mx-auto">
    <form @submit="addTodo">
      <div class="flex">
        <input
          type="text"
          v-model="title"
          name="title"
          placeholder="Add Todo ..."
          class="p-1 rounded-lg border focus:outline-none focus:border-gray-800 focus:shadow-outline border-gray-600 w-full text-2xl"
          v-bind:class="[bgLight ? 'bg-white' : 'bg-gray-300']"
        />
        <input
          type="submit"
          value="SUBMIT"
          class="bg-green-500 hover:bg-green-700 focus:outline-none py-1 px-2 rounded text-xl"
          v-bind:class="[bgLight ? 'text-white' : 'text-black']"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { v4 } from "uuid";

export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  props: ["bgLight"],
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        id: v4(),
        title: this.title,
        completed: false
      };
      if (this.title) {
        this.$emit("add-todo", newTodo);
        this.title = "";
      }
    }
  }
};
</script>
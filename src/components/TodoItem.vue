<template>
  <div
    class="flex flex-row m-0 p-2 rounded-lg border border-solid border-black"
    v-bind:class="[todo.completed ? 'line-through bg-green-200': 'bg-green-400']"
  >
    <div class="text-left text-2xl">
      <input type="checkbox" v-on:change="markComplete" />
      {{todo.title}}
    </div>
    <div class="flex-1 text-right">
      <button
        @click="$emit('del-todo', todo.id)"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
      >X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>
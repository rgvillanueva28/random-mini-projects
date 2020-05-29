<template>
  <header class="text-center py-3" v-bind:class="[bgLight ? 'bg-gray-700' : 'bg-gray-500']">
    <h1 class="text-2xl" v-bind:class="[bgLight ? 'text-white' : 'text-black']">
      Todo list
      <button
        class="fixed right-0 pr-5 pt-0 focus:outline-none"
        @click="$emit('toggleBG')"
      >
        click here
        <v-icon name="adjust" scale="1.8"></v-icon>
      </button>
    </h1>
  </header>
</template>
<script>
export default {
  name: "Header",
  props: ["bgLight"]
};
</script>
<template>
  <footer
    class="fixed w-full text-center justify-center mt-2 py-2 bottom-0"
    v-bind:class="[bgLight ? 'bg-gray-300 text-black': 'bg-gray-700 text-white' ]"
  >
    <a href="https://github.com/rgvillanueva28" target="_blank">
      <v-icon name="brands/github" scale="2" class="text-black"></v-icon>
      {{' '}}
    </a>
    <a href="https://www.facebook.com/ranegillian/" target="_blank">
      <v-icon name="brands/facebook" scale="2" class="text-blue-700"></v-icon>
      {{' '}}
    </a>
    Rane Gillian | 2020
  </footer>
</template>

<script>
export default {
  name: "Header",
  props: ["bgLight"]
};
</script>
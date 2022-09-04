<template>
  <p>I phone {{ name }}</p>
</template>

<script setup>
const route = useRoute();

const name = computed(() => {
  return route.params.name.replaceAll("-", " ");
});
</script>

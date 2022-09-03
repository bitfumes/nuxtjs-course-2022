<template>
  <button @click="increment">Increment</button>
  <p>{{ count }}</p>
  <button @click="decrement">Decrement</button>
</template>

<script setup>
const count = ref(0);

function increment() {
  count.value++;
}

function decrement() {
  count.value--;
}
</script>

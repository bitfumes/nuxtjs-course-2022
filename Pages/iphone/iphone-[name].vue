<template>
  <div>
    <Head>
      <Title>Nuxt 3 - Iphone {{ name }}</Title>
    </Head>
    <p>I phone {{ name }}</p>
  </div>
</template>

<script setup>
const route = useRoute();
const name = computed(() => {
  return route.params.name.replaceAll("-", " ");
});

// useHead({
//   title: `Nuxt3 - Iphone ${route.params.name}`,
// });
</script>

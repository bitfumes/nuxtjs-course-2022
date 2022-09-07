<template>
  <nav
    class="bg-purple-900 shadow-lg p-3 text-white text-lg flex justify-between"
  >
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/iphone">Iphones</NuxtLink>
    <NuxtLink to="/profile">Profile</NuxtLink>
    <NuxtLink to="/login">Login</NuxtLink>
    <p>Cart ({{ cart.length }})</p>
  </nav>
</template>

<script setup>
const cart = useCart();
</script>

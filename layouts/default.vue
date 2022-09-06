<template>
  <div>
    <nav
      class="bg-purple-700 shadow-lg p-3 text-white text-lg flex justify-between"
    >
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/iphone">Iphones</NuxtLink>
      <NuxtLink to="/profile">Profile</NuxtLink>
    </nav>

    <!-- here nuxt will replace page content -->
    <slot></slot>
  </div>
</template>

<template>
  <div>
    <nav class="bg-purple-700 text-white">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="about">About</NuxtLink>
      <NuxtLink to="profile">Profile</NuxtLink>
    </nav>

    <!-- here nuxt will replace page content -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'SEEND',
})
</script>

<template>
  <main
    class="min-h-screen text-neutral-6 flex flex-col justify-center bg-secondary/50 p-10 font-sans has-[button:hover]:bg-primary/50 transition duration-75"
  >
    <section class="max-h-4xl grow bg-white rounded-6 p-2 flex flex-col">
      <NuxtPage />
    </section>
  </main>
</template>

<style>
@import '@unocss/reset/tailwind-compat.css';
</style>

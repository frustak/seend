<script setup lang="ts">
useHead({
  title: 'SEEND',
})
</script>

<template>
  <main
    class="min-h-screen text-neutral-6 flex flex-col justify-center bg-primary/50 p-4 lg:p-10 font-sans has-[button:hover]:bg-secondary/50 transition duration-75"
  >
    <section
      class="max-h-4xl grow bg-white rounded-2 lg:rounded-6 p-2 flex flex-col"
    >
      <NuxtPage />
    </section>
  </main>
</template>

<style>
@import '@unocss/reset/tailwind-compat.css';
</style>

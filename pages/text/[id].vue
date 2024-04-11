<script setup lang="ts">
const route = useRoute()

const { data, isPending } = useGetText(route.params.id as string)
</script>

<template>
  <div class="lg:grid grid-cols-2 gap-10 grow">
    <p class="p-1 lg:p-10 font-medium lg:text-xl">
      {{ isPending ? '...' : data?.textshare_text }}
    </p>
  </div>
</template>

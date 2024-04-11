<script setup lang="ts">
const route = useRoute()

const { data, isPending } = useGetText(route.params.id as string)
</script>

<template>
  <div class="grid grid-cols-2 gap-10 grow">
    <p class="p-10 font-medium text-xl">
      {{ isPending ? '...' : data?.textshare_text }}
    </p>
  </div>
</template>

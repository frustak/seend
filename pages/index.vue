<script lang="ts" setup>
const writtenText = ref('')

const router = useRouter()
const { mutateAsync, isPending } = useCreateText()

async function submit() {
  const { id: textId } = await mutateAsync(writtenText.value)
  router.push({ path: `/text/${textId}` })
}
</script>

<template>
  <form class="grid grid-cols-2 gap-10 grow" @submit.prevent="submit">
    <textarea
      class="w-full h-full outline-none resize-none p-10 font-medium text-xl placeholder:text-neutral-3"
      autofocus
      placeholder="Start writing here..."
      v-model="writtenText"
    ></textarea>
    <button
      class="uppercase font-display transition-all duration-75 text-40"
      :class="{
        'bg-secondary text-primary rounded-6 hover:bg-primary hover:text-secondary hover:rounded-20':
          !isPending,
        'bg-gray-1 text-gray-500 rounded-100': isPending,
      }"
      type="submit"
      :disabled="isPending"
    >
      Seend
    </button>
  </form>
</template>

<style></style>

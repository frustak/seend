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
  <form
    class="flex flex-col lg:grid grid-cols-2 gap-10 grow"
    @submit.prevent="submit"
  >
    <textarea
      class="w-full h-full outline-none resize-none p-1 lg:p-10 font-medium lg:text-xl placeholder:text-neutral-3 grow"
      autofocus
      placeholder="Start writing here..."
      v-model="writtenText"
    ></textarea>
    <button
      class="uppercase font-display transition-all duration-75 text-14 lg:text-40"
      :class="{
        'text-secondary bg-primary rounded-2 lg:rounded-6 hover:text-primary hover:bg-secondary hover:rounded-20':
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

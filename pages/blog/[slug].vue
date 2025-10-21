<script setup lang="ts">
import { onBeforeMount, onMounted, ref  } from 'vue'
import { useRoute } from 'vue-router'

  const slug =ref(useRoute())
onMounted(() => {
  slug.value = useRoute()
console.log(`Loading blog post with slug: ${slug.value.params.slug}`)
})
const {data: page} = await useAsyncData('blog', () => {
  return queryCollection('blog').path(slug.value.path).first()
})



</script>

<template>
  <div class="w-full flex flex-row justify-center">
  <ContentRenderer v-if="page" :value="page" :prose="true" class=" w-2/3" />
  <div v-else> blog not found`</div>
  </div>

</template>
<style scoped>
/* Add spacing for code blocks if needed */
pre {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--shiki-default-bg);
  overflow-x: auto;
}
</style>
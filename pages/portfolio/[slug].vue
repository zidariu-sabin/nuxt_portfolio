<script setup lang="ts">
import { onBeforeMount, onMounted, ref  } from 'vue'
import { useRoute } from 'vue-router'

const route = ref(useRoute())
onMounted(() => {
  route.value = useRoute()
})
const {data: page} = await useAsyncData(route.route, () => {
  return queryCollection('projects').path(route.value.path).first()
})



</script>

<template>
  <div class="w-full flex flex-row justify-center">
  <ContentRenderer v-if="page" :value="page" :prose="true" class=" w-2/3" />
  <div v-else> project not found`</div>
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

<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import type { Project } from '~/content.config'
 const props = defineProps<{
      project: Project,
 }>()

 onMounted(() => {
    //  console.log(props.project)
 })

</script>
<template>
  <div class="border rounded-[10px] p-2 h-[20ch] w-[60ch]">
    <a :href="project.path">{{ project.title }}</a>
    <p>{{ project.description }}</p>

    <ul class="list-none grid grid-cols-4 gap-2 items-center">
      <li
        v-for="(language, index) in project.languages"
        :key="language"
        class="flex flex-row items-center gap-2"
      >
        <svg width="10" height="10">
          <circle cx="5" cy="5" r="4" :fill="project.languageColors[index]" />
        </svg>

        <div class="flex flex-row flex-grow gap-5">
          <span>{{ language }}</span>
          <span class="text-gray-slate-600">{{ project.languageSizes[index] }}%</span>
        </div>
      </li>
    </ul>

    <div class="flex flex-row w-full h-[8px] border border-gray-600 rounded-[0.375rem]">
      <span
        v-for="(p, i) in project.languageSizes"
        :key="i"
        class="inline-block h-4"
        :style="{ width: p + '%', backgroundColor: project.languageColors[i] }"
      ></span>
    </div>
  </div>
</template>

<style>

</style>

<script lang="ts" setup>
import type { Project } from '~/content.config'
 const props = defineProps<{
      project: Project,
 }>()


</script>
<template>
  <div class="border rounded-[10px] p-2 w-[65ch]">
    <div class= "flex flex-row justify-between items-center mx-2">
      <a :href="project.path">{{ project.title }}</a>
      <div>
      <Icon name="devicon:github" size="var(--icon-size)" class="cursor-pointer" />
      <Icon name="heroicons:presentation-chart-line" size="var(--icon-size)" class="cursor-pointer" />
      </div>
    </div>
    <p>{{ project.description }}</p>
    <ul class="list-none grid grid-cols-4 gap-2 items-center">
      <li
        v-for="(language, index) in project.languages"
        :key="index"
        class="flex flex-row items-center gap-2"
      >
        <svg width="10" height="10">
          <circle cx="5" cy="5" r="4" :fill="language.color" />
        </svg>

        <div class="flex flex-row flex-grow gap-5">
          <span>{{ language.name }}</span>
          <span class="text-gray-slate-600">{{ language.size }}%</span>
        </div>
      </li>
    </ul>

    <div class="flex flex-row w-full h-[8px] border border-gray-600 rounded-[0.375rem]">
      <span
        v-for="(language, i) in project.languages"
        :key="i"
        class="inline-block h-4"
        :style="{ width: language.size + '%', backgroundColor: language.color }"
      ></span>
    </div>
  </div>
</template>

<style>

</style>
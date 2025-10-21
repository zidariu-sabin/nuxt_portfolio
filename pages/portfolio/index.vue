<script setup lang="ts">
import type { Project } from '~/content.config'
import ProjectCard from '~/components/projects/ProjectCard.vue'

const { data: projects } = await useAsyncData<Project[]|null>('projects', () =>{ return queryCollection('projects').all()})

// function formatDateOnly(isoString: string) {
//   const date = new Date(isoString);
//   return date.toISOString().split('T')[0];
// }
</script>

<template>
<div class="bg-linear-to-b from-[var(--color-background)] to-slate-50 h-[85vh] px-[20px] flex flex-col self-center w-[65ch]">
    <h1>Projects</h1>
    <div >
      <ul class="flex flex-col gap-10 ">
        <li v-for="project in projects" :key="project.title" class="list-none">
          <ProjectCard :project/>
        </li>
      </ul>
    </div>
  </div>
</template>
<!-- create separate card containter and add percentage bar made of spans for languages in project -->
<style></style>
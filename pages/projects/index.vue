<script setup lang="ts">
import {computed} from "vue"
import type { Project } from '~/content.config'
import ProjectCard from '~/components/projects/ProjectCard.vue'

const { data: projects } = await useAsyncData<Project[]|null>('projects', () =>{ return queryCollection('projects').all()})

const categories = computed (() => {
  let projectsGroupedByLabel = new Map<string, Project[]>()
  projects?.value?.forEach((element: Project) => {
    let arr = projectsGroupedByLabel.get(element.label)
    if(arr){
      arr.push(element)
    }else{
      let temp : Project[] =[]
      temp.push(element)
      projectsGroupedByLabel.set(element.label, Array.from(temp))
    }
  });
  return projectsGroupedByLabel
});
</script>

<template>
<div class="bg-linear-to-b from-[var(--color-background)] to-slate-50 h-[85vh] px-[20px] flex flex-col self-center ">
    <h1>Projects</h1>
    <div class=" flex flex-row gap-4">
      <ul v-for="category in categories.keys()" class="flex flex-col gap-2 ">
        <li v-for="project in categories.get(category)" :key="project.title" class="list-none">
          <ProjectCard :project/> 
        </li>
      </ul>
    </div>
  </div>
</template>
<style></style>
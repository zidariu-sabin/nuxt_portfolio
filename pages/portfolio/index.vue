<script setup lang="ts">

const { data: projects } = await useAsyncData('projects', () =>{ return queryCollection('projects').all()})

// function formatDateOnly(isoString: string) {
//   const date = new Date(isoString);
//   return date.toISOString().split('T')[0];
// }
</script>

<template>
<div class="bg-linear-to-b from-[var(--color-background)] to-slate-50 h-[85vh] px-[20px] flex flex-col self-center w-[65ch]">
    <h1>Projects</h1>
    <ul class="flex flex-col gap-10">
      <li v-for="project in projects" :key="project.title" class="flex flex-col justify-between">
        <a :href=" project.path ">{{ project.title }}</a>
        <p> {{ project.description }}</p>
        <ul class="flex flex-row gap-2">
            <li v-for="(language,index) in project.languages">
              <span>{{language}}</span>
              <div :style="{backgroundColor: project.languageColors[index]}" class="h-16 w-16 rounded-full"></div>  
            </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style></style>
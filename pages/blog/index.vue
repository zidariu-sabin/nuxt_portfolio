<script setup lang="ts">

const { data: blogs } = await useAsyncData('blog', () =>{ return queryCollection('blog').all()})

function formatDateOnly(isoString: string) {
  const date = new Date(isoString);
  return date.toISOString().split('T')[0];
}
</script>

<template>
  <div class="bg-linear-to-b from-[var(--color-background)] to-slate-50 h-[100vh] px-[20px]">
    <h1>Posts</h1> 
    <ul class="flex flex-col gap-10">
      <li v-for="blog in blogs" :key="blog.title" class="flex flex-row justify-between">
        <a :href=" blog.path ">{{ blog.title }}</a>
        <span> {{ formatDateOnly(blog.date) }}</span>
      </li>
    </ul>
  </div>
</template> 

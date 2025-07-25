<script setup lang="ts">
import { ref } from 'vue';
import Tooltip from 'primevue/tooltip';

type Theme = 'light' | 'dark' | 'system';
// const colorMode = ref<typeof ColorModeInstance>({} as any);
// const setColorTheme = (newTheme: Theme) => {
//   colorMode.value.preference = newTheme
// }

// const showSelect = ref(false);
// const toggleSelect = () => {
//   showSelect.value = !showSelect.value;
//   console.log('Select toggled:', showSelect.value);
// }
const tooltipShow = ref(false);
</script>

<template>
  <div class="bg-[#2E6F40] flex place-content-between items-center px-[15px] sticky top-0">
    <span class="text-[2rem] font-[mono] select-none  text-black visited:text-black">
      <NuxtLink  class="cursor-pointer" to="/">SZ</NuxtLink>
    </span>
    <!-- <Icon 
     :name="$colorMode.preference === 'dark' ? 'heroicons-solid:sun' : 'heroicons-solid:moon'"
     size="2rem"
     @click="toggleSelect"
     class="cursor-pointer" 
    >
    <select v-show="showSelect" v-model="$colorMode.preference" class="bg-transparent text-white border-none cursor-pointer z-10">
      <option value="system" @click="setColorTheme('system')">System</option>
      <option value="light" @click="setColorTheme('light')">Light</option>
      <option value="dark" @click="setColorTheme('dark')">Dark</option>
    </select>
  </Icon> -->

    <a href="/blog">
    <UIcon 
      title="Blog"  
      name="heroicons:newspaper" 
      class="text-[2rem]">
    
    </UIcon>
    </a>
  </div>
</template>


<style>

</style>
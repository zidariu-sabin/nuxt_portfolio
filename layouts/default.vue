<template>
  <div class="w-full h-full flex flex-col">
    <Navbar class="  h-[3rem] top-0" />
    <slot class="h-[calc(100vh-3rem)] w-[100vw]" />
    <!-- <AppFooter /> -->
  </div>
</template>
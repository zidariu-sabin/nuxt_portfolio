
<script setup lang="ts">
    import { motion } from "motion-v"

    export type CareerCardDetails = {
            title: string;
            company: string;
            start: string;
            end: string;
            location: string;
            content: string[];
        }
    interface Props {
        item: CareerCardDetails | null;
    }
    const props = defineProps<Props>();

    interface Emits {
        (e: 'toggleCareerCardDetails', item: CareerCardDetails | null): void;
    }

    const emit = defineEmits<Emits>();
</script>
<template>
    <main>
        <div class="place-self-end">
            <button
            class="bg-transparent border-none text-[2rem] text-[white] cursor-pointer"
             @click="emit('toggleCareerCardDetails', item)"
            >
                <Icon name="heroicons:x-mark"></Icon>
            </button>
        </div>
    <motion.div
        :initial="{ opacity: 1, x: 0 }"
      :enter="{ opacity: 0, x: -100 }
      "
      :transition="{ duration: 0.8, ease: 'easeIn' }"
        class="flex flex-col flex-start w-[80vw] h-[60vh] bg-[#2E6F40] border-teal-100 border-[1px] rounded-[30px] text-[var(--color-primary)] px-[10px]  "
    >
    <div class="w-full wrap-break-word flex flex-colw">
        <h2 class="text-wrap" >{{ item?.title }}</h2>
        <h3 class="text-wrap">{{ item?.company }}</h3>
              <p class="text-wrap">{{ item?.start }} - {{ item?.end }}</p>
              <p class="text-wrap">{{ item?.location }}</p>
        <ul>
            <li class="typing-text text-wrap" v-for="(point, index) in item?.content" :key="index">{{ point }}</li>
        </ul>
        </div>
    </motion.div>
    </main>
</template>


<style scoped>  

.typing-text {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 1.5s steps(40, end) forwards;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
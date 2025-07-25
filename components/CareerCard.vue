
<script setup lang="ts">
export type CareerCardDetails = {
        title: string;
        company: string;
        start: string;
        end: string;
        location: string;
        content: string[];
    }
interface Props {
    item: CareerCardDetails;
}
const props = defineProps<Props>();

interface Emits {
    (e: 'toggleCareerCardDetails', item: CareerCardDetails): void;
}

const emit = defineEmits<Emits>();
</script>
<template>
    <div
        class="flex flex-col flex-start w-[40vw] h-[40vh] bg-[#2E6F40] border-teal-100 border-[1px] rounded-[30px] text-[var(--color-primary)] px-[10px] text-wrap hover:cursor-pointer"
        @click="emit('toggleCareerCardDetails', item)"
    >
        <h2>{{ item.title }}</h2>
        <h3>{{ item.company }}</h3>
        <p>{{ item.start }} - {{ item.end }}</p>
        <p>{{ item.location }}</p>
        <!-- <ul>
            <li v-for="(point, index) in item.content" :key="index">{{ point }}</li>
        </ul> -->
    </div>
</template>


<style>

</style>
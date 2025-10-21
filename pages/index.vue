
<script setup lang="ts">
    import Timeline from 'primevue/timeline';
    import { type CareerCardDetails } from '~/components/CareerCard.vue';
    import CareerCard from '~/components/CareerCard.vue';
    import { ref } from 'vue';
    import { motion } from "motion-v"


    const timelineData: CareerCardDetails[] = [
      {
    title: "SummerCamp Intern",
    company: "NetRom Software",
    start: "Jul 2023",
    end: "Aug 2023",
    location: "Craiova (On-site)",
    content: [
      "Acquired knowledge working with cutting-edge technologies and frameworks such as Symfony 5.4, PHP 8.0, Faker, Twig and Bootstrap.",
      "Hosted and tested applications locally using XAMPP."
    ]
  },
  
  {
    title: "Laboratory Intern",
    company: "NetRom Software",
    start: "Oct 2023",
    end: "Nov 2023",
    location: "Craiova (On-site)",
    content: [
      "Supported the maintenance phase of a live telecom-related project using legacy technologies: Symfony 1, PHP 5.4, and SQL.",
      "Developed teamwork and communication skills following an Agile workflow.",
      "Enhanced my programming knowledge working with older technologies such as Symfony 1, PHP 5.4, SQL.",
      "Implemented end-to-end automated testing using Cucumber and Cypress."
    ]
  },
  {
    title: "Junior Fullstack Developer trainee",
    company: "IkonSoft",
    start: "Feb 2024",
    end: "Jun 2024",
    location: "Cluj-Napoca (On-site)",
    content: [
      "Gained exposure to multiple tech stacks, including PHP Slim - atk4 - Vue2 and Strapi - NodeJs - Graphql - Vue 3.",
      "Developed small-scale applications to reinforce understanding of fullstack development principles and clean code practices.",
      "Demonstrated flexibility and eagerness to learn across diverse project environments."
    ]
  },
  { 
    title: "Junior Fullstack Developer",
    company: "IkonSoft",
    start: "Jun 2024",
    end: "Jul 2025",
    location: "Cluj-Napoca (Remote)",
    content: [
      "Built scalable backend and frontend components for clinical studies software in the US healthcare sector using Strapi, GraphQL, TypeScript, and Vue.js.",
      "Worked collaboratively in a fast-paced Agile team to deliver features under tight deadlines.",
      "Designed dynamic and data-heavy interfaces, improving user onboarding and laboratory state management flows.",
      "Proactively proposed solutions and consistently strived to improve user experience and maintain code consistency."
    ]
  },

];

const toggleCareerCardDetails = ref(false );
const selectedCareerCard = ref<CareerCardDetails | null>(timelineData[3]);

function handletoggleCareerCardDetails(item: CareerCardDetails | null) {
    console.log("CareerCard clicked:", item);
    toggleCareerCardDetails.value = !toggleCareerCardDetails.value;

    selectedCareerCard.value = item;
}

const scrollContainer = ref<HTMLDivElement | null>(null);
    
</script>
<template>
    <main class="flex flex-col self-center items-center h-[290vh] w-[85ch] text-start overflow-x-visible bg-linear-to-b from-[var(--color-background)] to-slate-50 relative">
      <div v-if="toggleCareerCardDetails" class="h-[100%] w-[100%] bg-[var(--color-background)] opacity-[70%] absolute z-5"/>
      <div class="h-[90vh] justify-center items-center flex flex-col gap-2 mx-auto section">
        <div class="h-[200px] w-[200px] border-[2px] rounded-full select-none" >
           <img src="../public/images/profile_picture.PNG" alt="Profile Picture" class="rounded-full h-full w-full object-cover" />
        </div>
          <div class=" flex flex-col items-center justify-center px-[10px]">
              <h1>Who am I ?</h1>
              <p>
                 My name is Sabin Zidariu.</p>
                 <p>

                   Motivated and adaptable Fullstack Developer with hands-on experience building and maintaining responsive, data-driven
                   web applications in high-paced development teams. Proven ability to learn new technologies quickly and contribute to
                   collaborative solutions. Strong focus on code quality, user experience, and aligning with business goals. Eager to grow
                   professionally and contribute meaningfully in dynamic development environments
                  </p>
        </div>
      </div>

      <div class="h-[100vh] w-2/3 section justify-center items-center flex flex-col gap-4">
        <div></div>
        <div></div>
        <h1>Technologies</h1>
        <div>
            <span>Vue <Icon name="devicon:vuejs" size="var(--icon-size)" class="cursor-pointer" />, </span>
            <span>Nuxt <Icon name="devicon:nuxt" size="var(--icon-size)" class="cursor-pointer" />, </span>
            <span>NodeJs <Icon name="devicon:nodejs-wordmark" size="var(--icon-size)" class="cursor-pointer" />, </span>
            <!-- <span>Strapi <Icon name="devicon:strapi" size="var(--icon-size)" class="cursor-pointer" />, </span> -->
            <!-- <span>Rest API <Icon name="devicon:restapi" size="var(--icon-size)" class="cursor-pointer" />, </span> -->
            <span>JavaScript <Icon name="devicon:javascript" size="var(--icon-size)" class="cursor-pointer" />, </span>
            <span>TypeScript <Icon name="devicon:typescript" size="var(--icon-size)" class="cursor-pointer" />, </span>
            <span>Apollo GraphQL <Icon name="devicon:apollographql" size="var(--icon-size)" class="cursor-pointer" />, </span>
            <span>SQL <Icon name="devicon:mysql" size="var(--icon-size)" class="cursor-pointer" />, </span>
            <span>Tailwind CSS <Icon name="devicon:tailwindcss" size="var(--icon-size)" class="cursor-pointer" />, </span>
            <span>Bootstrap <Icon name="devicon:bootstrap" size="var(--icon-size)" class="cursor-pointer" />, </span>
            <span>Symfony <Icon name="devicon:symfony" size="var(--icon-size)" class="cursor-pointer" />, </span>
            <span>PHP <Icon name="devicon:php" size="var(--icon-size)" class="cursor-pointer" />, </span>
            <span>Cypress <Icon name="devicon:cypressio-wordmark" size="var(--icon-size)" class="cursor-pointer" />, </span>
            <span>Linux <Icon name="devicon:ubuntu" size="var(--icon-size)" class="cursor-pointer" />, </span>
            <span>Git <Icon name="devicon:git" size="var(--icon-size)" class="cursor-pointer" />, </span>
        </div>
      </div>
      
  <div 
    class="w-full overflow-x-auto h-[100vh] section px-4 "
  >
    <div class="h-[5vh] flex items-center justify-center">
      <h1 class="text-4xl font-bold text-center text-gray-800">Career</h1>
    </div>
    <CareerDetailedCard
      v-if="toggleCareerCardDetails"
      :item="selectedCareerCard"
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
      @toggle-career-card-details="handletoggleCareerCardDetails"
    />
    <motion.div 
      :class="`min-w-[${40*timelineData.length}px]`" class=" h-[85vh] flex gap-8"
      :initial="{ x: -200, opacity: 0 }"
      :animate="{ x: 0, opacity: 1 }"
      :transition="{ duration: 1, ease: 'easeOut' }"
    >
      <Timeline 
        :value="timelineData"
        class="customized-timeline"
        layout="horizontal"
        align="alternate"
      > 
        <template #connector>
          <div class="h-[2px] w-full bg-gray-300" />
        </template>

        <template #content="{ item }">  
          <motion.div 
            :initial="{ x: -100, opacity: 0 }"
            :whileInView="{ x: 0, opacity: 1 }"
            viewport="{ once: true }"
            :transition="{ duration: 0.6, ease: 'easeOut' }"
          >
            <CareerCard 
              class="my-4"
              :item="item" 
              @toggle-career-card-details="handletoggleCareerCardDetails(item)" 
            />
          </motion.div>
        </template>
      </Timeline>
    </motion.div>
  </div>
    </main>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
  height: 8px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}
</style>
<script setup>

import HotBar from "@/components/HotBar.vue";
import ToolBox from "@/components/ToolBox.vue";
import DiscussBlock from "@/components/DiscussBlock.vue";
import SideBar from "@/components/SideBar.vue";
import AnswerBox from "@/components/AnswerBox.vue";
import FootBar from "@/components/FootBar.vue";
</script>

<template>
  <HotBar class="min-w-[290px]"/>
  <main class="flex flex-col container min-w-[290px] h-full w-full bg-[#F7F8FF] dark:bg-[#1e1e1e]">
    <div class="flex flex-col min-h-screen  bg-[#E5E6F1] dark:bg-[#242526] w-full px-2">
      <ToolBox/>
      <div class="w-full  pt-1">
        <hr class="h-[2px] bg-[#9D9D9D] w-full">
      </div>

      <div class="flex flex-row w-full mb-auto mt-2">
        <div class="flex flex-col gap-4 pb-3">
          <DiscussBlock/>
          <DiscussBlock/>
          <DiscussBlock/>
          <DiscussBlock/>
          <DiscussBlock/>
        </div>

        <SideBar/>
      </div>
      <footer class="flex flex-col">
        <AnswerBox class="pt-3"/>
        <FootBar/>
      </footer>
    </div>
  </main>

</template>


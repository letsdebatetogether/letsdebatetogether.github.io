<script setup>

import HotBar from "@/components/HotBar.vue";
import ToolBox from "@/components/ToolBox.vue";
import DiscussBlock from "@/components/DiscussBlock.vue";
import SideBar from "@/components/SideBar.vue";
import AnswerBox from "@/components/AnswerBox.vue";
import FootBar from "@/components/FootBar.vue";
</script>

<template>
  <HotBar/>
  <main class="flex container w-full bg-[#F7F8FF]">
    <div class="flex flex-col min-h-screen bg-[#E5E6F1] w-full px-2">
      <ToolBox/>
      <div class="flex w-full flex-row">
        <div class="flex flex-col gap-3 pb-3">
          <DiscussBlock/>
          <DiscussBlock/>
          <DiscussBlock/>
          <DiscussBlock/>
        </div>

        <SideBar/>
      </div>
      <AnswerBox class="pt-3"/>
      <FootBar/>
    </div>
  </main>

</template>


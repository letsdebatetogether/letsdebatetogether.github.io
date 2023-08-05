<script setup>
import HotBar from "../components/HotBar.vue";
import ToolBox from "../components/ToolBox.vue"
import DiscussPreview from "../components/DiscussPreview.vue"
import FootBar from "@/components/FootBar.vue";

</script>

<template>
    <HotBar class="min-w-[290px]"/>
 <main class="flex flex-col container min-w-[290px] h-full w-full bg-[#F7F8FF] dark:bg-[#1e1e1e]">
    <div class="flex flex-col min-h-screen gap-1 bg-[#E5E6F1] dark:bg-[#242526] w-full px-2">
      <ToolBox/>
      <DiscussPreview/>
      <DiscussPreview/>
      <DiscussPreview/>
      <DiscussPreview/>
      <DiscussPreview/>
      <DiscussPreview/>
      <DiscussPreview/>
      <DiscussPreview/>
      <DiscussPreview/>
      <DiscussPreview/>
      <DiscussPreview/>
      <DiscussPreview/>
      <DiscussPreview/>
      <DiscussPreview/>
      <DiscussPreview/>
      <DiscussPreview/>
    </div>
   <footer class="sticky top-[100vh] pt-0.5 bg-[#E5E6F1] dark:bg-[#242526] w-full px-2">
     <FootBar/>
   </footer>
  </main>
</template>

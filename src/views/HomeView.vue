<script setup>
import HotBar from "../components/HotBar.vue";
import ToolBox from "../components/ToolBox.vue"
import DiscussPreview from "../components/DiscussPreview.vue"

</script>

<template>
    <HotBar/>
  <main class="flex container w-full bg-[#F7F8FF]">
    <div class="flex flex-col min-h-screen bg-[#E5E6F1] w-full px-2">
      <ToolBox/>
      <DiscussPreview/>
      <DiscussPreview/>
      <DiscussPreview/>
      <DiscussPreview/>
    </div>
  </main>
</template>

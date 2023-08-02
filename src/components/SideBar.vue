<script setup>

import Label from "@/components/Label.vue";
</script>

<template>
  <div class="justify-end hidden sm:flex">
    <div class="flex flex-col pt-2 px-2 gap-3">
      <div class="flex flex-col gap-3 pr-24">
        Labels:
        <Label/>
      </div>
      <div class="flex w-full  pt-1">
        <hr class="h-[2px] bg-black_font dark:bg-white_font w-full">
      </div>
      <h2>Participants:</h2>
      <h3 class="text-sm pl-1">Boby</h3>
    </div>
  </div>
</template>

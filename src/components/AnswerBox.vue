<script setup>

</script>

<template>
  <div class="flex flex-col p-2 pb-5">
    <div class="flex flex-wrap bg-[#DAE2F2] dark:bg-[#282E38] w-full">
      <div class="flex pl-3 pt-1 text-sm">
        <p>Answer</p>
      </div>
      <div class="flex flex-wrap w-full px-3 pb-3">
        <textarea class="focus:outline-none px-1 w-full rounded-lg h-44 min-h-[7rem] bg-[#E8EEFA] dark:bg-[#171A20] max-h-56" placeholder='Enter your message here'></textarea>

      </div>
    </div>
    <div class="flex p-3 justify-end">
      <button class="bg-[#9CED75] rounded"><p class="mx-1.5 text-2xl text-white">Reply</p></button>
    </div>

  </div>
</template>

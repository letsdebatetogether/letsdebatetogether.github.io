<script setup>



</script>

<script>
import vClickOutside from 'click-outside-vue3'
export default {
  directives: {
    clickOutside: vClickOutside.directive
  },

  methods: {
    onClickOutside() {
      this.$emit('hidden')
    },
  }
}
</script>

<template>

  <div class="absolute flex flex-col rounded-lg min-w-[6.5rem] max-w-xl max-h-32 bg-[#F7F8FF] shadow-xl mt-1 mb-1 dark:bg-[#121212]" v-click-outside="onClickOutside">
    <button class="flex justify-start pl-1 rounded-t-lg w-full hover:bg-[#c4c4c8] dark:hover:bg-[#2b2b2b]">Edit</button>
    <button class="flex justify-start pl-1 hover:bg-[#c4c4c8] dark:hover:bg-[#2b2b2b]">Copy Link</button>
    <button class="flex justify-start pl-1 hover:bg-[#c4c4c8] dark:hover:bg-[#2b2b2b]">Reply</button>
    <button class="flex justify-start pl-1 hover:bg-[#c4c4c8] dark:hover:bg-[#2b2b2b]">Debate</button>
    <button class="flex justify-start pl-1 rounded-b-lg hover:bg-[#c4c4c8] dark:hover:bg-[#2b2b2b]">Reply</button>
  </div>
</template>

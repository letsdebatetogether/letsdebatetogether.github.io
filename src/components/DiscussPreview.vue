<script setup>
import Label from './Label.vue'
</script>

<template>
    <div class="flex flex-col pb-1">
        <div class="flex flex-row">
            <div class="hidden pt-1.5 sm:flex">
                <Label/>
            </div>
            <div class="flex flex-col sm:pl-3 sm:pr-5">
                <h2 class="text-2xl">Title</h2>
                <div class="flex flex-row">
                    <div class="flex">
                        <h2 class="text-sm/4 font-medium">Description: </h2>
                    </div>
                    <div class="flex items-end">
                        <p class="text-xs/4 line-clamp-3 max-w-max pl-1">This is a discussion about almost everything please tell us your story
                            and your opinion about this topic. This is a discussion about almost everything please tell us your story
                        </p>
                    </div>
                </div>
                <div class="flex w-full pt-1 gap-1">
                    <div class="flex">
                        <p class="text-xs/4 whitespace-nowrap font-[500]">Last answer:</p>
                    </div>
                    <div class="flex w-full  items-end">
                        <p class="text-xs/4 line-clamp-1 max-w-max">
                            Hey Boys I'm new here and I'm looking for some friends
                        </p>
                    </div>
                    <div class="place-content-end">
                        <p class="text-xs/4 whitespace-nowrap font-[350]">3 days ago</p>
                    </div>
                </div>
        
            </div>
        </div>
        <div class="w-full pt-1">
                <hr class="h-[2px] bg-black_font dark:bg-white_font w-full">
            </div>
    </div>
</template>



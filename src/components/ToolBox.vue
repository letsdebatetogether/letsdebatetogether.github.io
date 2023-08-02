<script setup>

</script>

<template>
        <div class="flex flex-col w-full bg-transparent py-1 text-[#2C2C32] dark:text-[#B2B5CC]">
            <div class="flex w-full gap-2">
                <button class="bg-[#9CED75] rounded"><p class="mx-1 text-white">Create</p></button>
                <input type="search" class="flex focus:outline-none rounded text-[#757785] dark:text-[#60636D] w-full placeholder:text-[#757785] placeholder:dark:text-[#60636D] dark:bg-[#181819] pl-1 pb-[3px]" placeholder="Search...">
                <button class="flex rounded-md items-center bg-light_blue_button dark:bg-dark_blue_button">
                    <i class="fa-solid fa-magnifying-glass px-1"></i>
                </button>
                <button class="flex rounded-md items-center bg-light_blue_button dark:bg-dark_blue_button">
                    <div class="px-1">
                        Filters
                    </div>
                        <i class="fa-solid fa-caret-down pr-1"></i>
                </button>
                
            </div>
            <div class="w-full  pt-1">
                <hr class="h-[2px] bg-[#9D9D9D] w-full">
            </div>
    </div>
   
</template>




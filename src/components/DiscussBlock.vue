<script setup>

</script>

<template>


    <div class="flex w-full flex-col">
      <div class="flex flex-row px-2 py-1 w-full gap-2 rounded-t-lg whitespace-nowrap bg-[#c5dae8] dark:bg-[#0A0B0D]">
        <div class="flex w-full gap-2 ">
          <i class="fa-regular fa-user text-xl"></i>
          <p class="">Boby</p>
          <div class="flex items-center">
            <p class="pr-2 text-xs">3 days ago</p>
          </div>
        </div>
        <div class="flex justify-end">
          <div class="flex items-center">
            <p class="text-xs">Edited 3 hours ago</p>
          </div>
          <i class="fa-solid fa-ellipsis-vertical px-2 text-xl"></i>
        </div>
      </div>
      <div class="flex bg-[#e1e7f2] dark:bg-[#1B1D1F] rounded-b-lg">
        <div class="text-sm px-2 py-1">
          <div>Hello</div>
          <div>Ideally, a good test should be realistic, unambiguous, luckless, and easy to understand. Showing fairness
            is
            easier to do by the negative:
          </div>
          <div>If a model passes a question, but if you asked it in a chat, it would never give the right answer, then
            the
            test is not realistic. So HELM’s rejecting an answer if it is not the highest-probability one is
            reasonable.
          </div>
          <div>If a model sometimes had a high pass rate, sometimes low, its result would be ambiguous. So realism
            should
            not
            go all the way to using normal sampling like nucleus9. Yet…
          </div>
          <div>If a model passes a question, but if you asked in a chat, the answer would be basically random, then the
            test
            is lucky. So the test should account for how close the probability is for each answer: if they are all
            near-equal, but the right one is imperceptibly higher, then that should be taken into account.
          </div>
          <div>Besides, if a test result makes it unclear just how bad it is, then it is harder to understand. NeoX’s
            25%
            could be mistaken for an OK score, but it is essentially as good as a coin flip.
          </div>
        </div>
      </div>
    </div>

</template>


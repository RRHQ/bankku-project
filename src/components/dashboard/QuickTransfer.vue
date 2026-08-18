<script setup>
const contacts = [
  {
    name: 'Sylvia',
    role: 'CEO',
    image: '/images/Profile.png',
  },
  {
    name: 'Thomas',
    role: 'Director',
    image: '/images/Profile.png',
  },
  {
    name: 'Mike',
    role: 'Designer',
    image: '/images/Profile.png',
  },
]
</script>

<template>
  <section class="w- min-w-0">
    <!-- Header -->
    <h2 class="mb-4 text-[16px] font-semibold text-[#343C6A] sm:mb-5 sm:text-[18px] lg:text-[22px]">
      Quick Transfer
    </h2>

    <!-- Card -->
    <div
      class="w-full rounded-[20px] bg-white p-5 shadow-sm sm:rounded-[25px] sm:p-6 lg:min-h-[275px] lg:p-7"
    >
      <!-- Contacts List -->
      <div
        class="flex w-full items-center gap-6 overflow-x-auto pb-4 scrollbar-none sm:justify-center sm:gap-8 lg:gap-10 lg:overflow-visible lg:pb-0"
      >
        <!-- Contact -->
        <div
          v-for="contact in contacts"
          :key="contact.name"
          class="flex shrink-0 flex-col items-center"
        >
          <!-- Profile Image -->
          <div
            class="h-[50px] w-[50px] overflow-hidden rounded-full sm:h-[60px] sm:w-[60px] lg:h-[70px] lg:w-[70px]"
          >
            <img :src="contact.image" :alt="contact.name" class="h-full w-full object-cover" />
          </div>

          <!-- Name -->
          <p
            class="m-0 mt-3 text-center text-[12px] font-semibold text-[#232323] sm:text-[14px] lg:text-[16px]"
          >
            {{ contact.name }}
          </p>

          <!-- Role -->
          <p
            class="m-0 mt-1 text-center text-[11px] font-normal text-[#718EBF] sm:text-[13px] lg:text-[15px]"
          >
            {{ contact.role }}
          </p>
        </div>

        <!-- Next Button -->
        <button
          type="button"
          aria-label="Next contacts"
          class="ml-2 flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-transform hover:scale-105"
        >
          <svg
            class="h-4 w-4 text-[#718EBF] sm:h-5 sm:w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 5l7 7-7 7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>

      <!-- Transfer Form -->
      <div class="mt-6 flex items-center gap-4 sm:mt-8 lg:mt-10 lg:gap-6">
        <!-- Label -->
        <span
          class="whitespace-nowrap text-[12px] font-medium text-[#718EBF] sm:text-[14px] lg:text-[16px]"
        >
          Write Amount
        </span>

        <!-- Input + Send Button -->
        <div
          class="flex h-[45px] min-w-0 flex-1 items-center rounded-full bg-[#EDF1F7] sm:h-[50px] lg:h-[52px]"
        >
          <!-- Amount Input -->
          <input
            type="number"
            inputmode="decimal"
            min="0"
            step="0.01"
            placeholder="525.50"
            class="min-w-0 flex-1 bg-transparent px-4 text-[12px] font-medium text-[#718EBF] outline-none placeholder:text-[#718EBF] sm:px-6 sm:text-[14px] lg:text-[16px]"
          />

          <!-- Send Button -->
          <button
            type="button"
            class="flex h-full shrink-0 items-center gap-2 rounded-full bg-[#1814F3] px-6 text-[13px] font-medium text-white transition-colors duration-200 hover:bg-[#100CF0] sm:px-8 sm:text-[15px] lg:px-10 lg:text-[16px]"
          >
            <span>Send</span>

            <img src="/assets/dashboard/send.svg" alt="Send Icon" class="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Search } from 'lucide-vue-next'

const emit = defineEmits(['toggle-sidebar'])

const route = useRoute()


const pageTitles = {
  dashboard: 'Overview',
  transactions: 'Transactions',
  accounts: 'Accounts',
  investments: 'Investments',
  'credit-cards': 'Credit Cards',
  loans: 'Loans',
  services: 'Services',
  'my-previleges': 'My Privileges',
  settings: 'Setting',
  notifications: 'Notifications',
  profile: 'Profile',
}

const pageTitle = computed(() => {
  return pageTitles[route.name] || 'Overview'
})

const searchQuery = ref('')
</script>

<template>
  <header
    class="relative flex h-[101px] items-center justify-between border-b border-[#E6E9F0] bg-white px-8 max-md:h-[140px] max-md:px-4"
  >

    <div
      class="flex w-full items-center justify-between max-md:absolute max-md:left-0 max-md:top-0 max-md:h-[80px] max-md:px-4"
    >

      <div class="flex items-center gap-3">
        <!-- Hamburger -->
        <button
          type="button"
          aria-label="Open menu"
          class="hidden h-[32px] w-[32px] items-center justify-center max-md:flex"
          @click="emit('toggle-sidebar')"
        >
          <span class="h-[16px] w-[18px] leading-none"> ☰ </span>
        </button>

        <!-- Page Title -->
        <h1
          class="h-[34px] text-[28px] font-semibold leading-none text-[#343C6A] max-md:absolute max-md:left-1/2 max-md:top-1/2 max-md:-translate-x-1/2 max-md:-translate-y-1/2 max-md:text-[20px]"
        >
          {{ pageTitle }}
        </h1>
      </div>

      <div class="flex items-center gap-4 max-md:gap-2">

        <!-- Search -->
        <div
          class="flex h-[50px] w-[255px] items-center gap-3 rounded-full bg-[#F5F7FA] px-6 max-md:hidden"
        >
          <Search :size="20" :stroke-width="1.8" class="shrink-0 text-[#718EBF]" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search for something"
            class="w-full bg-transparent text-[15px] text-[#8BA3CB] outline-none placeholder:text-[#718EBF]"
          />
        </div>

        <!-- Settings -->
        <RouterLink
          to="/settings"
          aria-label="Settings"
          class="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F5F7FA] transition hover:bg-[#EAF0FF] max-md:hidden"
        >
          <img
            src="/assets/navbar/settings.svg"
            alt="Settings"
            class="h-[25px] w-[25px] object-contain"
          />
        </RouterLink>

        <!-- Notifications -->
        <RouterLink
          to="/notifications"
          aria-label="Notifications"
          class="relative flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F5F7FA] transition hover:bg-[#FFF0F5] max-md:hidden"
        >
          <img
            src="/assets/navbar/notification.svg"
            alt="Notifications"
            class="h-[25px] w-[25px] object-contain"
          />
        </RouterLink>

        <!-- Profile -->
        <RouterLink
          to="/profile"
          aria-label="Profile"
          class="h-[60px] w-[60px] overflow-hidden rounded-full max-md:h-[42px] max-md:w-[42px]"
        >
          <img src="/images/Profile.png" alt="Profile" class="h-full w-full object-cover" />
        </RouterLink>
      </div>
    </div>

    <!-- Search Mobile -->
    <div
      class="absolute bottom-[10px] left-4 right-4 hidden h-[40px] items-center gap-3 rounded-full bg-[#F5F7FA] px-4 max-md:flex"
    >
      <Search :size="18" :stroke-width="1.8" class="shrink-0 text-[#718EBF]" />

      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search for something"
        class="w-full bg-transparent text-[13px] text-[#343C6A] outline-none placeholder:text-[#718EBF]"
      />
    </div>
  </header>
</template>

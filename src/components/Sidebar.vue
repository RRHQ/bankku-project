<script setup>
import { RouterLink } from 'vue-router'

const menus = [
  {
    name: 'Dashboard',
    route: 'dashboard',
    icon: '/assets/sidebar/dashboard.svg',
  },
  {
    name: 'Transactions',
    route: 'transactions',
    icon: '/assets/sidebar/transactions.svg',
  },
  {
    name: 'Accounts',
    route: 'accounts',
    icon: '/assets/sidebar/accounts.svg',
  },
  {
    name: 'Investments',
    route: 'investments',
    icon: '/assets/sidebar/investments.svg',
  },
  {
    name: 'Credit Cards',
    route: 'credit-cards',
    icon: '/assets/sidebar/credit-cards.svg',
  },
  {
    name: 'Loans',
    route: 'loans',
    icon: '/assets/sidebar/loans.svg',
  },
  {
    name: 'Services',
    route: 'services',
    icon: '/assets/sidebar/services.svg',
  },
  {
    name: 'My Privileges',
    route: 'my-previleges',
    icon: '/assets/sidebar/privileges.svg',
  },
  {
    name: 'Setting',
    route: 'settings',
    icon: '/assets/sidebar/setting.svg',
  },
]

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])
</script>

<template>
  <aside
    :class="[
      'fixed left-0 top-0 z-100 h-screen w-[250px] bg-white transition-transform duration-300',
      'md:translate-x-0',
      isOpen ? 'translate-x-0' : '-translate-x-full',
    ]"
  >
    <!-- Logo -->
    <div class="flex h-[101px] items-center px-[38px]">
      <div class="flex items-center gap-[8px]">
        <img
          src="/assets/sidebar/logo.svg"
          alt="Bankku Logo"
          class="h-[36px] w-[36px] object-contain"
        />
        <span class="bankku-logo text-[24px] font-extrabold text-[#343C6A]"> Bankku. </span>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="flex flex-col gap-1 mt-2">
      <RouterLink
        v-for="menu in menus"
        :key="menu.route"
        :to="{ name: menu.route }"
        v-slot="{ isActive }"
        @click="emit('close')"
        class="group relative flex h-[60px] items-center overflow-hidden transition-colors duration-300 hover:bg-slate-50/50"
      >
       
        <span
          class="absolute left-0 top-0 h-full w-[6px] origin-center rounded-r-sm bg-[#2D60FF] transition-transform duration-300 ease-out"
          :class="isActive ? 'scale-y-100' : 'scale-y-0'"
        ></span>

        <div
          class="flex items-center gap-[20px] pl-[40px] transition-all duration-300 ease-out"
          :class="{
            'text-[#2D60FF]': isActive,
            'text-[#B1B1B1] group-hover:translate-x-2 group-hover:text-[#2D60FF]': !isActive,}"
        >

          <span
            class="sidebar-icon shrink-0 h-[20px] w-[20px] bg-current transition-transform duration-300 lg:h-[25px] lg:w-[25px]"
            :class="isActive ? 'scale-110' : 'group-hover:scale-110'"
            :style="{
              maskImage: `url(${menu.icon})`,
              WebkitMaskImage: `url(${menu.icon})`,
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
            }"
          ></span>

          <!-- Menu Text -->
          <span class="text-[16px] font-medium leading-none lg:text-[18px]">
            {{ menu.name }}
          </span>
        </div>
      </RouterLink>
    </nav>
  </aside>
</template>

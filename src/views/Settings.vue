<script setup>
import { ref } from 'vue'

import EditProfile from './Settings/EditProfile.vue'
import Preferences from './Settings/Preferences.vue'
import Security from './Settings/Security.vue'

const activeTab = ref('profile')

const tabs = [
  {
    id: 'profile',
    label: 'Edit Profile',
  },
  {
    id: 'preferences',
    label: 'Preferences',
  },
  {
    id: 'security',
    label: 'Security',
  },
]

const changeTab = (tab) => {
  activeTab.value = tab
}
</script>

<template>
  <div class="w-full px-4 pb-8 pt-[30px] sm:px-6 lg:px-10 lg:pb-10">
    <section
      class="w-full rounded-[20px] bg-white px-5 py-6 sm:px-7 sm:py-7 lg:px-[30px] lg:py-[30px]"
    >
      <!-- Tabs -->
      <div class="flex w-full justify-center border-b border-[#F1F2F6]">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          @click="changeTab(tab.id)"
          class="relative flex-1 px-2 pb-[11px] text-center text-[13px] font-medium transition-colors sm:flex-none sm:px-5 sm:text-[14px] lg:text-[16px] lg:px-6"
          :class="activeTab === tab.id ? 'text-[#1814F3]' : 'text-[#718EBF] hover:text-[#1814F3]'"
        >
          {{ tab.label }}

          <span
            v-if="activeTab === tab.id"
            class="absolute bottom-0 left-0 h-[3px] w-full rounded-t-full bg-[#1814F3]"
          ></span>
        </button>
      </div>

      <!-- Content -->
      <div class="pt-7 sm:pt-8">
        <EditProfile v-if="activeTab === 'profile'" />

        <Preferences v-else-if="activeTab === 'preferences'" />

        <Security v-else-if="activeTab === 'security'" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

import ToggleSwitch from '../../components/settings/ToggleSwitch.vue'

const preferences = reactive({
  currency: 'USD',
  timeZone: '(GMT-12:00) International Date Line West',

  digitalCurrency: true,
  merchantOrder: false,
  recommendation: true,
})

const notificationSettings = [
  {
    key: 'digitalCurrency',
    label: 'I send or receive digital currency',
  },
  {
    key: 'merchantOrder',
    label: 'I receive merchant order',
  },
  {
    key: 'recommendation',
    label: 'There are recommendations for my account',
  },
]

const handleSave = () => {
  console.log('Preferences saved:', {
    ...preferences,
  })
}
</script>

<template>
  <div class="w-full">
    <div class="grid grid-cols-1 gap-x-7 gap-y-5 md:grid-cols-2">
      <!-- Form -->
      <div>
        <label
          for="currency"
          class="mb-2 block text-[13px] lg:text-[16px] font-medium text-[#232323]"
        >
          Currency
        </label>

        <div class="relative">
          <select
            id="currency"
            v-model="preferences.currency"
            class="h-[50px] w-full appearance-none rounded-[12px] border border-[#DFEAF2] bg-white px-5 pr-12 text-[12px] lg:text-[15px] text-[#718EBF] outline-none transition focus:border-[#1814F3]"
          >
            <option value="USD">USD</option>

            <option value="EUR">EUR</option>

            <option value="IDR">IDR</option>
          </select>
          <ChevronDown
            :size="20"
            :stroke-width="1.8"
            class="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#718EBF]"
          />
        </div>
      </div>

      <div>
        <label
          for="timezone"
          class="mb-2 block text-[13px] lg:text-[16px] font-medium text-[#232323]"
        >
          Time Zone
        </label>

        <div class="relative">
          <select
            id="timezone"
            v-model="preferences.timeZone"
            class="h-[50px] w-full appearance-none rounded-[12px] border border-[#DFEAF2] bg-white px-5 pr-12 text-[12px] lg:text-[15px] text-[#718EBF] outline-none transition focus:border-[#1814F3]"
          >
            <option>(GMT-12:00) International Date Line West</option>

            <option>(GMT+07:00) Bangkok, Hanoi, Jakarta</option>

            <option>(GMT+08:00) Kuala Lumpur, Singapore</option>
          </select>

          <ChevronDown
            :size="20"
            :stroke-width="1.8"
            class="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#718EBF]"
          />
        </div>
      </div>
    </div>

    <!-- Notification -->
    <div class="mt-8">
      <h2 class="mb-5 text-[14px] lg:text-[17px] font-semibold text-[#232323]">Notification</h2>

      <div class="flex flex-col gap-5">
        <div v-for="item in notificationSettings" :key="item.key" class="flex items-center gap-5">
          <ToggleSwitch v-model="preferences[item.key]" />
          <span class="text-[14px] text-[#232323]">
            {{ item.label }}
          </span>
        </div>
      </div>
    </div>

    <!-- Save -->
    <div class="mt-8 flex justify-end">
      <button
        type="button"
        @click="handleSave"
        class="h-[50px] w-full rounded-[12px] bg-[#1814F3] text-[16px] font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#100cf0] hover:shadow-lg hover:shadow-[#1814F3]/40 active:scale-95 active:translate-y-0 sm:w-[190px]"
      >
        Save
      </button>
    </div>
  </div>
</template>

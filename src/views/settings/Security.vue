<script setup>
import { reactive } from 'vue'
import ToggleSwitch from '../../components/settings/ToggleSwitch.vue'

const security = reactive({
  twoFactor: true,
  currentPassword: '',
  newPassword: '',
})

const handleSave = () => {
  console.log('Security saved:', {
    twoFactor: security.twoFactor,
    currentPassword: security.currentPassword,
    newPassword: security.newPassword,
  })
}
</script>

<template>
  <div class="w-full">
    <div>
      <h2 class="mb-5 text-[14px] lg:text-[17px] font-semibold text-[#232323]">
        Two-factor Authentication
      </h2>
      <div class="flex items-center gap-5">
        <ToggleSwitch v-model="security.twoFactor" />
        <span class="text-[13px] lg:text-[16px] text-[#232323]">
          Enable or disable two factor authentication
        </span>
      </div>
    </div>

    <!-- Cahnge Pass -->
    <div class="mt-8">
      <h2 class="mb-5 text-[14px] lg:text-[17px] font-semibold text-[#232323]">Change Password</h2>
      <div class="grid grid-cols-1 gap-x-7 gap-y-5 md:grid-cols-2">
        <div>
          <label
            for="current-password"
            class="mb-2 block text-[13px] lg:text-[16px] font-medium text-[#232323]"
          >
            Current Password
          </label>
          <input
            id="current-password"
            v-model="security.currentPassword"
            type="password"
            placeholder="Enter current password"
            class="h-[50px] w-full rounded-[12px] border border-[#DFEAF2] px-5 text-[12px] lg:text-[15px] text-[#718EBF] outline-none transition placeholder:text-[#718EBF] focus:border-[#1814F3]"
          />
        </div>

        <div>
          <label
            for="new-password"
            class="mb-2 block text-[13px] lg:text-[16px] font-medium text-[#232323]"
          >
            New Password
          </label>
          <input
            id="new-password"
            v-model="security.newPassword"
            type="password"
            placeholder="Enter new password"
            class="h-[50px] w-full rounded-[12px] border border-[#DFEAF2] px-5 text-[12px] lg:text-[15px] text-[#718EBF] outline-none transition placeholder:text-[#718EBF] focus:border-[#1814F3]"
          />
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

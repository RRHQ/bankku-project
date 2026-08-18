<script setup>
import { reactive } from 'vue'
import { ChevronDown, Pencil } from 'lucide-vue-next'

const profile = reactive({
  name: 'Rayhan Ramadhan',
  username: 'RRHQ',
  email: 'rayhanramadhan@gmail.com',
  password: '1234567890',
  dateOfBirth: '30 Oktober 2005',
  presentAddress: 'Malang, Jawa Timur, Indonesia',
  permanentAddress: 'Malang, Jawa Timur, Indonesia',
  city: 'Malang',
  postalCode: '65119',
  country: 'Indonesia',
})

const handleSave = () => {
  console.log('Profile saved:', {
    ...profile,
  })
}
</script>

<template>
  <div class="w-full">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-[145px_minmax(0,1fr)] lg:gap-x-10">
      <div class="flex justify-center lg:justify-start">

        <!-- Image -->
        <div class="relative h-[130px] w-[130px]">
          <img
            src="/images/Profile.png"
            alt="Profile"
            class="h-full w-full rounded-full object-cover"
          />
          <button
            type="button"
            aria-label="Edit profile image"
            class="absolute bottom-[7px] right-[-2px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#1814F3] text-white transition hover:bg-[#100cf0]"
          >
            <Pencil :size="15" :stroke-width="2" />
          </button>
        </div>
      </div>

      <!-- Form -->
      <div class="grid grid-cols-1 gap-x-7 gap-y-5 md:grid-cols-2">
        <div>
          <label
            for="profile-name"
            class="mb-2 block text-[13px] lg:text-[16px] font-medium text-[#232323]"
          >
            Your Name
          </label>
          <input
            id="profile-name"
            v-model="profile.name"
            type="text"
            class="h-[50px] w-full rounded-[12px] border border-[#DFEAF2] px-5 text-[12px] lg:text-[15px] text-[#718EBF] outline-none transition focus:border-[#1814F3]"
          />
        </div>

        <div>
          <label
            for="profile-username"
            class="mb-2 block text-[13px] lg:text-[16px] font-medium text-[#232323]"
          >
            User Name
          </label>
          <input
            id="profile-username"
            v-model="profile.username"
            type="text"
            class="h-[50px] w-full rounded-[12px] border border-[#DFEAF2] px-5 text-[12px] lg:text-[15px] text-[#718EBF] outline-none transition focus:border-[#1814F3]"
          />
        </div>

        <div>
          <label
            for="profile-email"
            class="mb-2 block text-[13px] lg:text-[16px] font-medium text-[#232323]"
          >
            Email
          </label>
          <input
            id="profile-email"
            v-model="profile.email"
            type="email"
            class="h-[50px] w-full rounded-[12px] border border-[#DFEAF2] px-5 text-[12px] lg:text-[15px] text-[#718EBF] outline-none transition focus:border-[#1814F3]"
          />
        </div>

        <div>
          <label
            for="profile-password"
            class="mb-2 block text-[13px] lg:text-[16px] font-medium text-[#232323]"
          >
            Password
          </label>
          <input
            id="profile-password"
            v-model="profile.password"
            type="password"
            class="h-[50px] w-full rounded-[12px] border border-[#DFEAF2] px-5 text-[12px] lg:text-[15px] text-[#718EBF] outline-none transition focus:border-[#1814F3]"
          />
        </div>

        <div>
          <label
            for="profile-date"
            class="mb-2 block text-[13px] font-medium text-[#232323] lg:text-[16px]"
          >
            Date of Birth
          </label>
          <div class="relative">
            <input
              id="profile-date"
              v-model="profile.dateOfBirth"
              type="date"
              class="h-[50px] w-full rounded-[12px] border border-[#DFEAF2] px-5 text-[12px] text-[#718EBF] outline-none transition focus:border-[#1814F3] lg:text-[15px]"
            />
          </div>
        </div>

        <div>
          <label
            for="profile-present-address"
            class="mb-2 block text-[13px] lg:text-[16px] font-medium text-[#232323]"
          >
            Present Address
          </label>
          <input
            id="profile-present-address"
            v-model="profile.presentAddress"
            type="text"
            class="h-[50px] w-full rounded-[12px] border border-[#DFEAF2] px-5 text-[12px] lg:text-[15px] text-[#718EBF] outline-none transition focus:border-[#1814F3]"
          />
        </div>

        <div>
          <label
            for="profile-permanent-address"
            class="mb-2 block text-[13px] lg:text-[16px] font-medium text-[#232323]"
          >
            Permanent Address
          </label>
          <input
            id="profile-permanent-address"
            v-model="profile.permanentAddress"
            type="text"
            class="h-[50px] w-full rounded-[12px] border border-[#DFEAF2] px-5 text-[12px] lg:text-[15px] text-[#718EBF] outline-none transition focus:border-[#1814F3]"
          />
        </div>

        <div>
          <label
            for="profile-city"
            class="mb-2 block text-[13px] lg:text-[16px] font-medium text-[#232323]"
          >
            City
          </label>
          <input
            id="profile-city"
            v-model="profile.city"
            type="text"
            class="h-[50px] w-full rounded-[12px] border border-[#DFEAF2] px-5 text-[12px] lg:text-[15px] text-[#718EBF] outline-none transition focus:border-[#1814F3]"
          />
        </div>

        <div>
          <label
            for="profile-postal"
            class="mb-2 block text-[13px] lg:text-[16px] font-medium text-[#232323]"
          >
            Postal Code
          </label>
          <input
            id="profile-postal"
            v-model="profile.postalCode"
            type="text"
            class="h-[50px] w-full rounded-[12px] border border-[#DFEAF2] px-5 text-[12px] lg:text-[15px] text-[#718EBF] outline-none transition focus:border-[#1814F3]"
          />
        </div>

        <div>
          <label
            for="profile-country"
            class="mb-2 block text-[13px] lg:text-[16px] font-medium text-[#232323]"
          >
            Country
          </label>
          <input
            id="profile-country"
            v-model="profile.country"
            type="text"
            class="h-[50px] w-full rounded-[12px] border border-[#DFEAF2] px-5 text-[12px] lg:text-[15px] text-[#718EBF] outline-none transition focus:border-[#1814F3]"
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

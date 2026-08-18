<script setup>
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}
</script>

<template>
  <div class="min-h-screen bg-[#F5F7FA]">

    <!-- Sidebar -->
    <Sidebar
      :is-open="isSidebarOpen"
      @close="closeSidebar"
    />

    <!-- Mobile Overlay -->
    <div
      v-if="isSidebarOpen"
      class="fixed inset-0 z-[90] bg-black/30 md:hidden"
      @click="closeSidebar"
    ></div>

    <!-- Main Content -->
    <div
      class="
        ml-0
        min-w-0
        transition-[margin]
        duration-300
        md:ml-[250px]
      "
    >
      <Navbar
        @toggle-sidebar="toggleSidebar"
      />

      <main>
        <router-view />
      </main>
    </div>

  </div>
</template>
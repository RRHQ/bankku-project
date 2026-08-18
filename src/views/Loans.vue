<script setup>
import { computed } from 'vue'

const loans = [
  {
    icon: '/assets/loans/accounts.svg',
    type: 'Personal Loans',
    amount: '$50,000',
    iconBg: '#E7EDFF',
    iconColor: '#396AFF',
  },
  {
    icon: '/assets/loans/corporate.svg',
    type: 'Corporate Loans',
    amount: '$100,000',
    iconBg: '#FFF5D9',
    iconColor: '#FFBB38',
  },
  {
    icon: '/assets/loans/business.svg',
    type: 'Business Loans',
    amount: '$500,000',
    iconBg: '#FFE0EB',
    iconColor: '#FF82AC',
  },
  {
    icon: '/assets/loans/custom.svg',
    type: 'Custom Loans',
    amount: 'Choose Money',
    iconBg: '#DCFAF8',
    iconColor: '#16DBCC',
  },
]

const activeLoans = [
  {
    money: '$100,000',
    left: '$40,500',
    duration: '8 Months',
    interest: '12%',
    installment: '$2,000 / month',
  },
  {
    money: '$500,000',
    left: '$250,000',
    duration: '36 Months',
    interest: '10%',
    installment: '$8,000 / month',
  },
  {
    money: '$900,000',
    left: '$40,500',
    duration: '12 Months',
    interest: '12%',
    installment: '$5,000 / month',
  },
  {
    money: '$50,000',
    left: '$40,500',
    duration: '25 Months',
    interest: '5%',
    installment: '$2,000 / month',
  },
  {
    money: '$50,000',
    left: '$40,500',
    duration: '5 Months',
    interest: '16%',
    installment: '$10,000 / month',
  },
  {
    money: '$80,000',
    left: '$25,500',
    duration: '14 Months',
    interest: '8%',
    installment: '$2,000 / month',
  },
  {
    money: '$12,000',
    left: '$5,500',
    duration: '9 Months',
    interest: '13%',
    installment: '$500 / month',
  },
  {
    money: '$160,000',
    left: '$100,800',
    duration: '3 Months',
    interest: '12%',
    installment: '$900 / month',
  },
]

//Mengubah string uang menjadi angka murni
const parseCurrency = (str) => {
  if (!str) return 0
  // Hapus semua karakter kecuali angka dan titik desimal
  return Number(str.replace(/[^0-9.-]+/g, ''))
}

//Mengubah angka murni menjadi format uang
const formatCurrency = (num) => {
  return '$' + num.toLocaleString('en-US')
}

// Menghitung Total Loan Money
const totalMoney = computed(() => {
  const sum = activeLoans.reduce((total, loan) => total + parseCurrency(loan.money), 0)
  return formatCurrency(sum)
})

// Menghitung Total Left to Repay
const totalLeftToRepay = computed(() => {
  const sum = activeLoans.reduce((total, loan) => total + parseCurrency(loan.left), 0)
  return formatCurrency(sum)
})

// Menghitung Total Installment
const totalInstallment = computed(() => {
  const sum = activeLoans.reduce((total, loan) => total + parseCurrency(loan.installment), 0)
  return formatCurrency(sum) + ' / month'
})
</script>

<template>
  <div class="w-full px-4 pb-8 pt-5 sm:px-6 sm:pt-6 lg:px-10 lg:pb-10">
    <!-- SUMMARY CARDS -->
    <div
      class="flex w-full gap-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-2 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-6 sm:overflow-visible sm:pb-0"
    >
      <div
        v-for="(loan, index) in loans"
        :key="index"
        class="w-[240px] shrink-0 snap-center flex items-center gap-3 rounded-[20px] bg-white p-4 shadow-sm sm:w-auto sm:gap-4 sm:p-5 xl:p-6"
      >
        <!-- Ukuran ikon dikecilkan di tablet, membesar di XL (Desktop) -->
        <div
          class="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full xl:h-[70px] xl:w-[70px]"
          :style="{ backgroundColor: loan.iconBg, color: loan.iconColor }"
        >
          <img
            :src="loan.icon"
            :alt="loan.type"
            class="h-[20px] w-[20px] object-contain xl:h-[30px] xl:w-[30px]"
          />
        </div>

        <div class="min-w-0 flex-1">
          <!-- Class 'truncate' dihapus. Menambahkan 'leading-tight' agar rapi jika turun baris -->
          <p class="m-0 text-[11px] font-normal leading-tight text-[#718EBF] sm:text-[13px] xl:text-[15px]">
            {{ loan.type }}
          </p>

          <p class="m-0 mt-1 text-[14px] font-semibold text-[#232323] sm:text-[16px] xl:text-[20px]">
            {{ loan.amount }}
          </p>
        </div>
      </div>
    </div>

    <!-- ========================================
         ACTIVE LOANS OVERVIEW
    ========================================= -->
    <section class="mt-6">
      <h2 class="mb-5 text-[16px] font-semibold text-[#333B69] sm:text-[18px] lg:text-[22px]">
        Active Loans Overview
      </h2>

      <!-- Desktop / Tablet Table -->
      <!-- Hapus class overflow-x-auto agar secara natural memadat -->
      <div class="hidden w-full rounded-[20px] bg-white p-4 lg:p-6 md:block">
        <div class="w-full">
          <!-- Table Header -->
          <!-- Tambahkan gap antar kolom agar tidak menempel saat ditekan di mode tablet -->
          <div
            class="grid grid-cols-[0.5fr_1.2fr_1.2fr_1fr_1fr_1.5fr_0.8fr] gap-2 border-b border-[#F1F2F6] pb-4 text-[10px] font-medium text-[#718EBF] lg:text-[14px]"
          >
            <span>SL No</span>
            <span>Loan Money</span>
            <span>Left to repay</span>
            <span>Duration</span>
            <span>Interest rate</span>
            <span>Installment</span>
            <span>Repay</span>
          </div>

          <!-- Table Rows -->
          <!-- Gunakan font kecil (11px) di tablet, dan kembali membesar di desktop (lg:text-[14px]) -->
          <div
            v-for="(loan, index) in activeLoans"
            :key="index"
            class="grid grid-cols-[0.5fr_1.2fr_1.2fr_1fr_1fr_1.5fr_0.8fr] gap-2 items-center border-b border-[#F1F2F6] py-3.5 text-[11px] text-[#232323] lg:text-[14px]"
          >
            <span>{{ (index + 1).toString().padStart(2, '0') }}.</span>
            <span>{{ loan.money }}</span>
            <span>{{ loan.left }}</span>
            <span>{{ loan.duration }}</span>
            <span>{{ loan.interest }}</span>
            <span>{{ loan.installment }}</span>

            <!-- Button Repay: Tombol juga mengecil di tablet agar muat -->
            <div>
              <button
                type="button"
                class="rounded-full border border-[#232323] bg-transparent px-3 py-1 text-[11px] font-medium text-[#232323] transition-all duration-200 hover:border-[#396AFF] hover:text-[#396AFF] active:border-[#396AFF] active:bg-[#396AFF] active:text-white lg:px-6 lg:py-1.5 lg:text-[13px]"
              >
                Repay
              </button>
            </div>
          </div>

          <!-- Table Footer (Total) -->
          <div
            class="grid grid-cols-[0.5fr_1.2fr_1.2fr_1fr_1fr_1.5fr_0.8fr] gap-2 pt-4 text-[12px] font-medium text-[#FE5C73] lg:text-[15px]"
          >
            <span>Total</span>
            <span>{{ totalMoney }}</span>
            <span>{{ totalLeftToRepay }}</span>
            <span></span>
            <span></span>
            <span>{{ totalInstallment }}</span>
            <span></span>
          </div>
        </div>
      </div>

      <!-- Mobile List -->
      <div class="w-full overflow-hidden rounded-[20px] bg-white p-5 md:hidden">
        <!-- Table Header -->
        <div
          class="grid grid-cols-[1fr_1fr_auto] gap-3 border-b border-[#F1F2F6] pb-3 text-[11px] font-medium text-[#718EBF] sm:text-[12px]"
        >
          <span>Loan Money</span>
          <span>Left to repay</span>
          <span class="text-center">Repay</span>
        </div>

        <!-- Table Rows -->
        <div
          v-for="(loan, index) in activeLoans"
          :key="index"
          class="grid grid-cols-[1fr_1fr_auto] items-center gap-3 border-b border-[#F1F2F6] py-3 text-[12px] text-[#232323]"
        >
          <span class="font-medium">{{ loan.money }}</span>
          <span class="font-medium">{{ loan.left }}</span>

          <button
            type="button"
            class="min-w-[65px] rounded-full border border-[#232323] bg-transparent px-3 py-1 text-[11px] font-medium text-[#232323] transition-all duration-200 hover:border-[#396AFF] hover:text-[#396AFF] active:border-[#396AFF] active:bg-[#396AFF] active:text-white"
          >
            Repay
          </button>
        </div>

        <!-- Table Footer (Total) -->
        <div class="pt-3 text-[11px] font-medium text-[#FE5C73] sm:text-[12px]">
          <div class="mb-1">Total</div>
          <div class="grid grid-cols-[1fr_1fr_auto] gap-3">
            <span>{{ totalMoney }}</span>
            <span>{{ totalLeftToRepay }}</span>
            <div class="min-w-[65px]"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

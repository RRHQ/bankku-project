<script setup>
const transactions = [
  {
    icon: '/assets/dashboard/card.svg',
    name: 'Deposit from my Card',
    date: '28 January 2021',
    amount: '-$850',
    iconBg: '#FFF5D9',
    iconColor: '#FFB21A',
  },
  {
    icon: '/assets/dashboard/paypal.svg',
    name: 'Deposit Paypal',
    date: '25 January 2021',
    amount: '+$2,500',
    iconBg: '#E7EDFF',
    iconColor: '#396AFF',
  },
  {
    icon: '/assets/dashboard/user.svg',
    name: 'Jemi Wilson',
    date: '21 January 2021',
    amount: '+$5,400',
    iconBg: '#DDF9F6',
    iconColor: '#16DBCC',
  },
]
</script>

<template>
  <section class="w-full min-w-0">
    <!-- Header -->
    <div class="mb-5">
      <h2
        class="m-0 text-[18px] font-semibold leading-none text-[#343C6A] sm:text-[20px] lg:text-[22px]"
      >
        Recent Transaction
      </h2>
    </div>

    <!-- Transaction Card -->
    <div class="w-full rounded-[20px] bg-transparent lg:bg-white lg:px-6 lg:py-2">
      <!-- Transaction -->
      <div
        v-for="transaction in transactions"
        :key="transaction.name"
        class="flex min-w-0 items-center gap-3 py-3 sm:gap-4 sm:py-3.5 lg:min-h-[60px] lg:gap-4 lg:py-2"
      >
        <!-- Icon -->
        <div
          class="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full sm:h-[44px] sm:w-[44px] lg:h-[44px] lg:w-[44px]"
          :style="{
            backgroundColor: transaction.iconBg,
          }"
        >
          <img
            :src="transaction.icon"
            :alt="transaction.name"
            class="h-[20px] w-[20px] object-contain sm:h-[21px] sm:w-[21px]"
          />
        </div>

        <!-- Information -->
        <div class="min-w-0 flex-1">
          <!-- Name -->
          <p
            class="m-0 overflow-hidden text-ellipsis whitespace-nowrap text-[12px] font-medium leading-[18px] text-[#232323] sm:text-[13px] lg:text-[13px]"
          >
            {{ transaction.name }}
          </p>

          <!-- Date -->
          <p
            class="mt-[2px] m-0 text-[10px] font-normal leading-[16px] text-[#718EBF] sm:text-[11px] lg:text-[11px]"
          >
            {{ transaction.date }}
          </p>
        </div>

        <!-- Amount -->
        <p
          class="m-0 shrink-0 text-right text-[11px] font-medium sm:text-[12px] lg:text-[13px]"
          :class="transaction.amount.startsWith('+') ? 'text-[#41D4A8]' : 'text-[#FF4B4B]'"
        >
          {{ transaction.amount }}
        </p>
      </div>
    </div>
  </section>
</template>

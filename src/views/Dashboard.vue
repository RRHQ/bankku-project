<script setup>
import MyCards from '../components/dashboard/MyCards.vue'
import RecentTransactions from '../components/dashboard/RecentTransactions.vue'
import WeeklyActivity from '../components/dashboard/WeeklyActivity.vue'
import ExpenseStatistics from '../components/dashboard/ExpenseStatistics.vue'
import QuickTransfer from '../components/dashboard/QuickTransfer.vue'
import BalanceHistory from '../components/dashboard/BalanceHistory.vue'
</script>

<template>
  <div
    class="
      w-full
      px-4
      pb-8
      pt-5

      sm:px-6
      sm:pb-10
      sm:pt-6

      lg:px-8
      lg:pt-6

      xl:px-10
    "
  >

    <!-- TOP -->
    <div
      class="
        grid
        grid-cols-1
        gap-5

        xl:grid-cols-[minmax(0,1.7fr)_minmax(320px,1fr)]
        xl:gap-6
      "
    >
      <div class="min-w-0">
        <MyCards />
      </div>

      <div class="min-w-0">
        <RecentTransactions />
      </div>
    </div>


    <!-- MIDDLE -->
    <div
      class="
        mt-5
        grid
        grid-cols-1
        gap-5

        xl:mt-6
        xl:grid-cols-[minmax(0,1.7fr)_minmax(320px,1fr)]
        xl:gap-6
      "
    >
      <div class="min-w-0">
        <WeeklyActivity />
      </div>

      <div class="min-w-0">
        <ExpenseStatistics />
      </div>
    </div>


    <!-- BOTTOM -->
    <div
      class="
        mt-5
        grid
        grid-cols-1
        gap-5

        xl:mt-6
        xl:grid-cols-[minmax(0,1.7fr)_minmax(320px,1fr)]
        xl:gap-6
      "
    >
      <div class="min-w-0">
        <QuickTransfer />
      </div>

      <div class="min-w-0">
        <BalanceHistory />
      </div>
    </div>

  </div>
</template>
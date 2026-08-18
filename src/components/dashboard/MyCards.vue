<script setup>
const cards = [
  {
    balance: '$5,756',
    cardNumber: '3778 **** **** 1234',
    cardHolder: 'Eddy Cusuma',
    validThru: '12/22',
    dark: true,
  },
  {
    balance: '$5,756',
    cardNumber: '3778 **** **** 1234',
    cardHolder: 'Eddy Cusuma',
    validThru: '12/22',
    dark: false,
  },
]
</script>

<template>
  <section class="w-full min-w-0">
    <!-- Header Section -->
    <div class="mb-4 flex items-center justify-between sm:mb-5">
      <h2
        class="m-0 text-[16px] font-semibold leading-none text-[#343C6A] sm:text-[18px] lg:text-[22px]"
      >
        My Cards
      </h2>
      <button
        type="button"
        class="border-0 bg-transparent p-0 text-[14px] font-semibold text-[#343C6A] transition-colors duration-200 hover:text-[#2D60FF] sm:text-[15px] lg:text-[17px]"
      >
        See All
      </button>
    </div>

    <!-- Cards Wrapper -->
    <div
      class="grid min-w-0 grid-flow-col auto-cols-max gap-5 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-2 lg:grid-flow-row lg:grid-cols-2 lg:auto-cols-auto lg:gap-6 lg:overflow-visible lg:pb-0"
    >
      <!-- Card Loop -->
      <div
        v-for="(card, index) in cards"
        :key="index"
        :class="[
          'relative snap-center overflow-hidden rounded-[20px] sm:rounded-[25px] font-[Lato,sans-serif]',
          'h-[170px] sm:h-[190px] lg:h-[235px]',
          'w-[265px] sm:w-[280px] lg:w-full',
          card.dark
            ? 'bg-gradient-to-br from-[#5C5CFF] to-[#2D60FF] text-white'
            : 'border border-[#DFEAF2] bg-white text-[#343C6A]',
        ]"
      >
        <!-- Bagian Atas Kartu -->
        <div class="absolute inset-x-0 top-0 px-5 pt-5 sm:px-6 sm:pt-6 lg:px-6 lg:pt-6">
          <div class="flex items-start justify-between">
            <div>
              <p
                :class="[
                  'm-0 text-[11px] font-normal sm:text-[12px]',
                  card.dark ? 'text-white/70' : 'text-[#718EBF]',
                ]"
              >
                Balance
              </p>

              <p
                class="m-0 mt-1 text-[18px] font-semibold leading-none sm:text-[20px] lg:text-[24px]"
              >
                {{ card.balance }}
              </p>
            </div>

            <!-- Chip -->
            <span
              class="inline-block h-[28px] w-[28px] shrink-0 sm:h-[30px] sm:w-[30px] lg:h-[35px] lg:w-[35px]"
              :class="card.dark ? 'bg-white' : 'bg-[#343C6A]'"
              :style="{
                maskImage: 'url(/assets/dashboard/chip.svg)',
                WebkitMaskImage: 'url(/assets/dashboard/chip.svg)',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }"
            ></span>
          </div>

          <!-- Informasi Pemegang Kartu -->
          <div class="mt-4 grid grid-cols-[1fr_auto] gap-4 sm:mt-6 lg:mt-8">
            <!-- Card Holder -->
            <div>
              <p
                :class="[
                  'm-0 text-[10px] font-medium uppercase tracking-wide sm:text-[11px] lg:text-[12px]',
                  card.dark ? 'text-white/70' : 'text-[#718EBF]',
                ]"
              >
                Card Holder
              </p>

              <p class="m-0 mt-1 text-[14px] font-semibold sm:text-[15px] lg:text-[16px]">
                {{ card.cardHolder }}
              </p>
            </div>

            <!-- Valid Thru -->
            <div>
              <p
                :class="[
                  'm-0 text-[10px] font-medium uppercase tracking-wide sm:text-[11px] lg:text-[12px]',
                  card.dark ? 'text-white/70' : 'text-[#718EBF]',
                ]"
              >
                Valid Thru
              </p>

              <p class="m-0 mt-1 text-[14px] font-semibold sm:text-[15px] lg:text-[16px]">
                {{ card.validThru }}
              </p>
            </div>
          </div>
        </div>

        <div
          :class="[
            'absolute bottom-0 left-0 right-0 flex items-center justify-between',
            'h-[50px] px-5 sm:h-[55px] sm:px-6 lg:h-[70px] lg:px-6',
            card.dark
              ? 'bg-gradient-to-b from-black/10 to-black/20'
              : 'border-t border-[#DFEAF2] bg-white',
          ]"
        >
          <!-- Card Number -->
          <p
            :class="[
              'm-0 text-[16px] font-semibold tracking-[1px] sm:text-[18px] lg:text-[22px]',
              card.dark ? 'text-white' : 'text-[#343C6A]',
            ]"
          >
            {{ card.cardNumber }}
          </p>

          <!-- Mastercard -->
          <div class="flex items-center">
            <span
              :class="[
                'h-[26px] w-[26px] rounded-full sm:h-[28px] sm:w-[28px] lg:h-[30px] lg:w-[30px]',
                card.dark ? 'bg-white/50' : 'bg-[#9199AF]/50',
              ]"
            ></span>
            <span
              :class="[
                '-ml-3 h-[26px] w-[26px] rounded-full sm:h-[28px] sm:w-[28px] lg:h-[30px] lg:w-[30px]',
                card.dark ? 'bg-white/30' : 'bg-[#9199AF]/30',
              ]"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

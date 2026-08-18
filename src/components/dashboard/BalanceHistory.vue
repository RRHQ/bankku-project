<script setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js'

import { Line } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip)

const balanceData = [
  {
    month: 'Jul',
    value: 120,
  },
  {
    month: 'Aug',
    value: 330,
  },
  {
    month: 'Sep',
    value: 250,
  },
  {
    month: 'Oct',
    value: 480,
  },
  {
    month: 'Nov',
    value: 220,
  },
  {
    month: 'Dec',
    value: 560,
  },
  {
    month: 'Jan',
    value: 640,
  },
]

const chartData = {
  labels: balanceData.map((item) => item.month),

  datasets: [
    {
      data: balanceData.map((item) => item.value),

      borderColor: '#1814F3',

      borderWidth: 3,

      pointBackgroundColor: '#1814F3',

      pointBorderColor: '#1814F3',

      pointRadius: 3,

      pointHoverRadius: 5,

      tension: 0.45,

      fill: true,

      backgroundColor: 'rgba(24, 20, 243, 0.10)',
    },
  ],
}

const chartOptions = {
  responsive: true,

  maintainAspectRatio: false,

  interaction: {
    intersect: false,
    mode: 'index',
  },

  plugins: {
    legend: {
      display: false,
    },

    tooltip: {
      enabled: true,

      backgroundColor: '#343C6A',

      titleColor: '#FFFFFF',

      bodyColor: '#FFFFFF',

      displayColors: false,

      padding: 10,

      cornerRadius: 8,
    },
  },

  scales: {
    x: {
      border: {
        display: false,
      },

      grid: {
        color: '#E6E9F0',

        borderDash: [4, 4],

        drawTicks: false,
      },

      ticks: {
        color: '#718EBF',

        font: {
          family: 'Inter',
          size: 12,
        },

        padding: 10,
      },
    },

    y: {
      min: 0,

      max: 800,

      ticks: {
        stepSize: 200,

        color: '#718EBF',

        font: {
          family: 'Inter',
          size: 12,
        },

        padding: 10,
      },

      grid: {
        color: '#E6E9F0',

        borderDash: [4, 4],

        drawTicks: false,
      },

      border: {
        display: false,
      },
    },
  },
}
</script>

<template>
  <section class="min-w-0 w-full">
    <!-- Header -->
    <h2 class="mb-4 text-[16px] font-semibold text-[#343C6A] sm:mb-5 sm:text-[18px] lg:text-[22px]">
      Balance History
    </h2>

    <!-- Card -->
    <div
      class="w-full rounded-[20px] bg-white p-5 shadow-sm sm:rounded-[25px] sm:p-6 lg:h-[263px] lg:p-7"
    >
      <!-- Chart -->
      <div class="relative h-[200px] w-full sm:h-[210px]">
        <Line :data="chartData" :options="chartOptions" />
      </div>
    </div>
  </section>
</template>

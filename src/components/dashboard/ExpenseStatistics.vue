<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

const chartData = {
  labels: ['Entertainment', 'Bill Expense', 'Others', 'Investment'],
  datasets: [
    {
      data: [30, 15, 35, 20],
      backgroundColor: [
        '#343C6A', 
        '#FC7900',
        '#1814F3', 
        '#FA00FF', 
      ],
      borderWidth: 8, 
      borderColor: '#ffffff',
      hoverOffset: 8, 
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 10, 
  },
  plugins: {
    legend: {
      display: false,
    },
  
    tooltip: {
      backgroundColor: '#343C6A',
      padding: 10,
      cornerRadius: 8,
      callbacks: {
        label: (context) => {
          return ` ${context.label}: ${context.raw}%`
        },
      },
    },
 
    datalabels: {
      color: '#ffffff',
      textAlign: 'center',
      font: {
        size: 14,
        weight: 'bold',
      },

      formatter: (value, context) => {
        const label = context.chart.data.labels[context.dataIndex]
        return `${value}%\n${label}`
      },
    },
  },
}
</script>

<template>
  <section class="w-full min-w-0">
  
    <h2
      class="mb-4 m-0 text-[16px] font-semibold leading-none text-[#343C6A] sm:mb-5 sm:text-[18px] lg:text-[22px]"
    >
      Expense Statistics
    </h2>

    <!-- Card -->
    <div
      class="flex w-full items-center justify-center rounded-[20px] bg-white p-5 shadow-sm sm:rounded-[25px] sm:p-6 lg:min-h-[330px] lg:p-7"
    >
      <!-- Wrapper Chart -->
      <div class="relative h-[250px] w-full max-w-[300px] lg:h-[300px] lg:max-w-[320px]">
        <Pie :data="chartData" :options="chartOptions" />
      </div>
    </div>
  </section>
</template>

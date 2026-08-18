<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const chartData = {
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Deposit',
      backgroundColor: '#16DBCC', 
      data: [240, 130, 260, 370, 240, 340, 330], 
      borderRadius: 8, 
      borderSkipped: false, 
      barThickness: 12,
    },
    {
      label: 'Withdraw',
      backgroundColor: '#1814F3',
      data: [480, 350, 330, 480, 150, 390, 400],
      borderRadius: 8,
      borderSkipped: false,
      barThickness: 12,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false, 
  plugins: {
    legend: {
      position: 'top',
      align: 'end', 
      labels: {
        usePointStyle: true, 
        boxWidth: 8,
        boxHeight: 8,
        color: '#718EBF',
        font: {
          size: 13,
          family: "'Lato', sans-serif",
        },
      },
    },
    tooltip: {
      backgroundColor: '#343C6A',
      padding: 10,
      cornerRadius: 8,
    },
  },
  scales: {
    x: {
      grid: {
        display: false, 
        drawBorder: false,
      },
      ticks: {
        color: '#718EBF',
        font: {
          size: 12,
          family: "'Lato', sans-serif",
        },
      },
    },
    y: {
      min: 0,
      max: 500, 
      grid: {
        color: '#F3F3F5', 
        drawBorder: false,
      },
      ticks: {
        stepSize: 100, 
        color: '#718EBF',
        font: {
          size: 12,
          family: "'Lato', sans-serif",
        },
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
      Weekly Activity
    </h2>

    <!-- Pembungkus Grafik -->
    <div class="w-full rounded-[20px] sm:rounded-[25px] bg-white p-5 shadow-sm sm:p-6 lg:p-7">
      <!-- Container dengan tinggi fix agar grafik proporsional -->
      <div class="relative h-[250px] w-full lg:h-[300px]">
        <Bar :data="chartData" :options="chartOptions" />
      </div>
    </div>
  </section>
</template>

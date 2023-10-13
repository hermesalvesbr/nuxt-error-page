<template>
  <v-container>
    Pie chart sample
    <Pie
      :chart-options="chartOptions"
      :data="chartData"
    />
  </v-container>
</template>

<script setup lang="ts">
import { Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const chartData = ref({
  labels: [
    "Basic Materials",
    "Consumer Cyclical",
    "Financial Services",
    "Real Estate",
    "Consumer Defensive",
    "Healthcare",
    "Utilities",
    "Communication Services",
    "Energy",
    "Industrials",
    "Technology",
  ],
  datasets: [
    {
      backgroundColor: [
        "#FF4A4A",
        "#FFAC4A",
        "#FFE9C9",
        "#F9C87C",
        "#F97432",
        "#7a7979",
        "#FFCC00",
        "#FF9900",
        "#86370e",
        "#FFFF66",
        "#ed9e67",
      ],
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    {
      backgroundColor: [
        "#FF4A4A",
        "#FFAC4A",
        "#FFE9C9",
        "#F9C87C",
        "#F97432",
        "#7a7979",
        "#FFCC00",
        "#FF9900",
        "#86370e",
        "#FFFF66",
        "#ed9e67",
      ],
      data: [1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1],
    },
  ],
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
  },
});

//methods
const loadData = () => {};

//add on mount API request
onMounted(() => {
  loadData();
});
</script>

<style scoped>
#pie-chart {
  width: 30% !important;
  height: 30%;
}
</style>

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display:false,
    },
  },
};

const labels = [ '6-8','8-12', '12-15', '15-18', '18-21', '21-24'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000})),
      backgroundColor: '#3491F8',
    },
  ],
};

export default function BookingTimeGraph() {
  return <Bar options={options} data={data} />;
}

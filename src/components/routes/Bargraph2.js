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
    title: {
      display: true,
      text: 'Number of Users',
      position:'left'
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'User',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50})),
      backgroundColor: '#3491F8',
    },
  ],
};

export default function Bargraph2() {
  return <Bar options={options} data={data} />;
}

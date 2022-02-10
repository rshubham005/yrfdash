import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Amount in Cr.',
      position:'left'
    },
  },
};

export default function RevenueGraph1() {
  
const labels = ['-7','-6','-5','-4','-3','-2','-1','0','1','2','3','4','5','6','7','8','9','10','11','12','13','14'];

const data = {
  labels,
  datasets: [
    {
      label: 'War',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      borderColor: '#3491F8',
    },
    {
      label: 'TZH',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 40 })),
      borderColor: '#ED7d31',
    },
    {
      label: 'TOH',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 25 })),
      borderColor: '#a5a5a5',
    },
    {
      label: 'Race 3',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 40 })),
      borderColor: '#E8B56B',
    },
    {
      label: 'Sooryavanshi',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      borderColor: '#ffc000',
    },
  ],
};

  return (
  <>
  <div className='filter'>
    <label>Revenue Cr.</label>
  </div>
  <Line options={options} data={data} />
  </>
  )
}

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    
  },
};


export const data = {
  labels: ['Uploaded','Scanned','SMS/Email'],
  datasets: [
    {
      label: '# of Votes',
      data: [17,26,13],
      backgroundColor: [
        '#96A6FF',
        '#E8B56B',
        '#ACFFE3',

      ],
      borderColor: [
        '#96A6FF',
        '#E8B56B',
        '#ACFFE3',
      ],
      borderWidth: 1,
    },
  ],
};

export default function DoughnutChart() {
  return <Doughnut options={options} data={data} />;
}

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

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
  labels: ['Points','Registration'],
  datasets: [
    {
      label: '# of Votes',
      data: [20, 29],
      backgroundColor: [
        '#ed7d31',
        '#889aff',

      ],
      borderColor: [
        '#ed7d31',
        '#889aff',
        
      ],
      borderWidth: 1,
    },
  ],
};

export default function Points() {
  return <Pie options={options} data={data} />;
}

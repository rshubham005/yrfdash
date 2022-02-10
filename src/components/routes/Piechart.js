import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position:'bottom'
    },
    title: {
      display: true,
      text: 'Users in percentage',
      position:'left'
    },
  },
};


export const data = {
  labels: ['Female','Male'],
  datasets: [
    {
      label: '# of Votes',
      data: [42.75, 57.25],
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

export default function Piechart() {
  return <Pie options={options} data={data} />;
}

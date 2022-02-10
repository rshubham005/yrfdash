import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right'
    },
    
  },
};
export const data = {
  labels: ['13-18','18-24','25-34','35-44','45-54','55-64','65+'],
  datasets: [
    {
      label: '# of Votes',
      data: [957,1578, 1235, 1093, 867, 637],
      backgroundColor: [
        '#3491F8',
        '#ED7d31',
        '#a5a5a5',
        '#E8B56B',
        '#ffc000',
        '#70ad47',
        '#5b9bd5'
      ],
      borderColor: [
        '#3491F8',
        '#ED7d31',
        '#a5a5a5',
        '#E8B56B',
        '#ffc000',
        '#70ad47',
        '#5b9bd5'
      ],
      borderWidth: 1,
    },
  ],
};

export default function Piegraph() {
  return (
  <>
  <h3 style={{paddingTop:"10px"}}>Users Age group</h3>
  <Doughnut options={options} data={data} />
  </>
    )
}

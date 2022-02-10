import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Title,
  Tooltip
);
export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: false,
      text: 'Chart.js Line Chart - Multi Axis',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};


export default function RevenueVolume() {
    
const labels = ['15-20 Yr', '21-25 Yr', '26-30 Yr', '31-35 Yr', '36-40 Yr', '41-45 Yr', '46- 60 Yr'];

const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'Ticket Volume',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      yAxisID: 'y',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
    },
    {
      type: 'bar',
      label: 'Revenue in Cr.',
      backgroundColor: 'rgb(75, 192, 192)',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: 'white',
      yAxisID: 'y1',
      borderWidth: 2,
    }
  ],
};

  return (
  <>
  <div className='filter'>
      <label>Revenue V/S Volume Graph</label>
  </div>

  <Chart data={data}  options={options}/>
  </>
  )
}

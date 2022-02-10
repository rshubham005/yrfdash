import React,{useState} from 'react';
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
import '../css/Barchart.css'

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
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Number of Tickets',
      position:'left'
    },
  },
};


export default function Bargraph() {
  const [group,setgroup]=useState(0)
    const handlegroup=(e)=>
    {
      setgroup(e.target.value)
    }
    const cityname =[
      ['Mumbai', 'Thane', 'Delhi', 'Gurgaon', 'Noida', 'Kolkata'],
      [ 'Mumbai', 'Thane', 'Pune', 'Nagpur', 'Kolhapur', 'Aurangabad'],
      ['Pune', 'Ahmedabad', 'Jaipur', 'Indore', 'Bhopal', 'Chandigarh', 'Surat', 'Bengaluru', 'Lucknow', 'Hyderabad'],
      ['Mumbai', 'Thane', 'Pune', 'Ahmedabad', 'Surat', 'Rajkot', 'Goa', 'Belgam', 'Gandhinagar', 'Baroda'],
      ['Delhi', 'Lucknow', 'Noida', 'Gurgaon', 'Kanpur', 'Dehradun', 'Varanasi', 'Agra', 'Allahabad', 'Meerut'],
      ['Chandigarh', 'Gurgaon', 'Jammu', 'Amritsar', 'Ambala', 'Shimla', 'Hisar', 'Ludhiana', 'Jalandhar', 'Karnal', 'Sonipat'],
      ['Patna', 'Jamshedpur', 'Dhanbad', 'Ranchi', 'Kolkata', 'Guwahati', 'Bhubneshwar', 'Siliguri', 'Howrah'],
      ['Nagpur', 'Amravati', 'Akola', 'Raipur', 'Bilaspur', 'Bhilai',],
      ['Indore', 'Bhopal', 'Jabalpur', 'Rewa', 'Katni', 'Satna', 'Gwalior', 'Ujjain'],
      [ 'Jaipur', 'Kota', 'Udaipur', 'Jodhpur', 'Ajmer', 'Bikaner'],
      ['Bengaluru', 'Chennai', 'Hyderabad', 'Mysore', 'Mangalore', 'Manipal', 'Kochi', 'Visakhapatnam', 'Coimbatore'],
      ['Indore', 'Kota', 'Pune'],
      ['Mumbai', 'Thane', 'Delhi', 'Noida', 'Gurgaon', 'Kolkata', 'Bengaluru', 'Chennai', 'Hyderabad', 'Pune', 'Ahmedabad'],
      ['Ahmedabad', 'Bengaluru', 'Chennai', 'Delhi', 'Hyderabad', 'Kochi', 'Kolkata', 'Mumbai']
  ]
  const labels = cityname[group];;

 const data = {
  labels,
  datasets: [
    {
      label: 'Paytm',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#E8B56B',
    },
    {
      label: 'BookMyShow',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#3491F8',
    },
  ],
};

  return (
        <>
        <div className='filter'>
        <label>Filter:</label>
          <select onChange={handlegroup} className="date-sort">
          <option value={0}>Metro</option>
          <option value={1}>Maharashtra</option>
          <option value={2}>A++Cities</option>
          <option value={3}>Mumbai Circuit</option>
          <option value={4}>Delhi Circuit</option>
          <option value={5}>East Punjab Circuit</option>
          <option value={6}>Eastern Circuit</option>
          <option value={7}>C.P. Berar Circuit</option>
          <option value={8}>C.I. Circuit</option>
          <option value={9}>Rajasthan Circuit</option>
          <option value={10}>South Markets</option>
          <option value={11}>Student Cities</option>
          <option value={12}>Richest Cities</option>
          <option value={13}>Most Movie Watching</option>
          </select>
        </div>
        <Bar options={options} data={data} />
        </>
  );
}

import React,{useState} from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../css/Map.css'

function Map(){
  var myicon = L.icon({
  iconUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=',
  iconSize:[25,45],
  iconAnchor:[12.5,45],
  popupAnchor:[0,-45]
})
 const [filter,setfilter]=useState(0)
// const position=[{name:"Delhi",coord:[28.6139 777.2090,
//                 {name:"Mumbai",coord:[19.0760, 72.8777]},
//                 {name:"Noida",coord:[22.985, 77.209]},
//                 {name:"Bengaluru",coord:[12.9716, 77.5946]},
//                 {name:"Chennai",coord:[18.585, 75.209]}]

const data =[[{name:"Mumbai",coord:[19.0760, 72.8777],users:151654,ios:105615,android:51351,tickets:513218},
              {name:"Pune",coord:[18.5204, 73.8567],users:194654,ios:175615,android:91351,tickets:543218},
              {name:"Delhi",coord:[28.6139, 77.2090],users:211654,ios:195615,android:151351,tickets:593218},
              {name:"Ahemdabad",coord:[23.0225, 72.5714],users:171654,ios:135615,android:81351,tickets:8713218},
              {name:"Bhopal",coord:[23.2599, 77.4126],users:101654,ios:85615,android:71351,tickets:613218}],

              [{name:"Delhi",coord:[28.6139, 77.2090],users:211654,ios:195615,android:151351,tickets:593218},
              {name:"Mumbai",coord:[19.0760, 72.8777],users:151654,ios:105615,android:51351,tickets:513218},
              {name:"Pune",coord:[18.5204, 73.8567],users:194654,ios:175615,android:91351,tickets:543218},
                {name:"Lucknow",coord:[26.8467, 80.9462],users:251654,ios:195615,android:95351,tickets:813218},
                {name:"Bengaluru",coord:[12.9716, 77.5946],users:551654,ios:195615,android:91351,tickets:563218}],

                [{name:"Mumbai",coord:[19.0760, 72.8777],users:151654,ios:105615,android:51351,tickets:513218},
                {name:"Delhi",coord:[28.6139, 77.2090],users:211654,ios:195615,android:151351,tickets:593218},
                {name:"Lucknow",coord:[26.8467, 80.9462],users:251654,ios:195615,android:95351,tickets:813218},
                {name:"Indore",coord:[22.7196, 75.8577],users:151654,ios:105615,android:51351,tickets:513218},
                {name:"Bengaluru",coord:[12.9716, 77.5946],users:551654,ios:195615,android:91351,tickets:563218}],

                [{name:"Delhi",coord:[28.6139, 77.2090],users:211654,ios:195615,android:151351,tickets:593218},
                {name:"Mumbai",coord:[19.0760, 72.8777],users:151654,ios:105615,android:51351,tickets:513218},
                {name:"Jaipur",coord:[26.9124, 75.7873],users:251654,ios:135615,android:65645,tickets:953218},
                {name:"Kota",coord:[25.2138, 75.8648],users:175165,ios:145615,android:94641,tickets:713218},
                {name:"Noida",coord:[28.5355, 77.3910],users:195516,ios:185615,android:76516,tickets:813218}]]

const handlefilter=(index)=>
{
  setfilter(index)
}
return(
<>
<div className='row'>
  <div className='col-md-12'>
  <div className='filters'>
    <h3>Filters</h3>
    <button className={(filter===0)?"clicked":"unclicked"} onClick={()=>handlefilter(0)}>Top 5 Performing cities</button>
    
    <button className={(filter===1)?"clicked":"unclicked"} onClick={()=>handlefilter(1)}>Top 5 Performing pincodes</button>
    
    <button className={(filter===2)?"clicked":"unclicked"} onClick={()=>handlefilter(2)}>Top 5 Cities by volume</button>
    
    <button className={(filter===3)?"clicked":"unclicked"} onClick={()=>handlefilter(3)}>Top 5 Cities by value</button>
  </div>
  <MapContainer className='map' center={[23.585, 82.209]} zoom={5} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {
    data[filter].map((item)=>
    {
      return(
        <Marker position={item.coord} icon={myicon}>
        <Popup className='popup'>
        <h3>{item.name}</h3>
        <p>Total Users: <span>{item.users}</span></p>
        <p>Android Users: <span>{item.android}</span></p>
        <p>iOS Users: <span>{item.ios}</span></p>
        <p>Total Tickets: <span>{item.tickets}</span></p>
        <p></p>
        </Popup>
      </Marker>
      )
    })
  }
</MapContainer>
    </div>
    </div>
</>
  )
}

export default Map;
import React,{useState} from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import Popup from 'reactjs-popup';
import { ImCross } from "react-icons/im";
import '../css/Actors.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import akshay from '../images/Akshay.png'
import selmon from '../images/Selmon.png'
import Hritik from '../images/Hritik.png'
import alia from '../images/alia.jpeg'
import amit from '../images/amit.jpg'
import rashmi from '../images/rashmi.jpg'
import vicky from '../images/vicky.jpg'
import Vidyut from '../images/Vidyut.jpg'
import srk from '../images/srk.jpg'
import jacqueline from '../images/jacqueline.jpg'
import kriti from '../images/kriti.jpg'
import deepu from '../images/deepu.jpeg'

function Actors() {
    // const [actors,setactors] = useState([])
    const [search,setsearch] = useState('')
    const [searchactor,setsearchactor]=useState([])
    const stars=[{name:'Akshay Kumar',image:akshay},
                {name:"Salman Khan",image:selmon},
                {name:"Deepika Padukone",image:deepu},
                {name:"Hritik Roshan",image:Hritik},
                {name:"Alia Bhatt",image:alia},
                {name:"Amitabh Bacchan",image:amit},
                {name:"Rashmika Mandhana",image:rashmi},
                {name:"Vicky Kaushal",image:vicky},
                {name:"Jacqueline Fernandez",image:jacqueline},
                {name:"Vidhyut Jamwal",image:Vidyut},
                {name:"Sha Ruk Khan",image:srk},
                {name:"Kriti Sanon",image:kriti},
                ]
    // useEffect(()=>
    // {
    //     // k_beppf171
    //     // k_m9g3r9v4
    //     // public api key pk_eskrg9ljw4po7s91y
    //     var url= `https://imdb-api.com/en/API/IMDbList/k_beppf171/ls020280202`
    //     axios.request(url).then((response)=> 
    //     {
    //         console.log(response)
    //         console.log(response.data.items)
    //         const arr=response.data
    //         // console.log(arr.items)
    //         setactors(arr.items)
    //     }).catch((err)=> console.log(err))
    // },[])
    
    const handleSearch=(e)=>
    {
        setsearch(e.target.value)
        setsearchactor([])
    }
   
    //search actor
    const searchactorapi=()=>
    {
        const url=`https://imdb-api.com/en/API/SearchName/k_tvowiai3/${search}`
        axios.request(url).then((response)=>
        {
            console.log(response.data)
            setsearchactor(response.data.results)
        }).catch(err=> console.log(err))
    }
    
    // https://imdb-api.com/en/API/SearchName/k_tvowiai3/Jean%20Reno
    return (
        <div className='actors'>
            <h3 className='celeb'>Celebrities/Actors</h3>
            <div className="search">
                <div className='search-bar'>
                    <input type='text' value={search} onChange={handleSearch} placeholder='Search for Actors and actresses and click search icon' />
                    <Popup onOpen={searchactorapi} trigger={<AiOutlineSearch className='icon'/>} modal>
                {
                close=>
                (
                    <div className="model-content2"> 
                        <button onClick={close} className="cross"><ImCross /></button>
                        <div className='row'>
                            {
                                 (searchactor)?
                                    searchactor.map((item,index)=>
                                    {
                                        return(
                                            <div key={index} className='col-md-6 actor'>
                                                <Link className='actor-link' to={`/actor-details/${item.title}`}>
                                                <img src={item.image} alt='Actor' className='actor-img' />
                                                <p>{item.title}</p>
                                                </Link>
                                            </div>
                                        )
                                    }): <p className='lead'>Please wait for 15 seconds if nothing happens means api call limit is over</p>
                            }
                        </div>
                    </div>
                )
                }
            </Popup>
                </div>
            </div>
            <div className='actor-list'>
                <div className='row'>
                    {
                        stars.map((actor,index)=>
                        {
                            return (
                                <div key={index} className='col-md-3 actor'>
                                    <Link className='actor-link' to={`/actor-details/${actor.name}`}>
                                    <img src={actor.image} alt='Actor' className='actor-img' />
                                    <p>{actor.name}</p>
                                    </Link>
                                </div>
                            )
                        })  
                    }
                </div>
            </div>
        </div>
    )
}

export default Actors

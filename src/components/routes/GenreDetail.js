import React,{useEffect,useState} from 'react'
import '../css/ActorDetails.css'
import {Link} from 'react-router-dom'
import { HiArrowNarrowLeft } from "react-icons/hi";
import {useParams} from 'react-router-dom'
import axios from 'axios'

function GenreDetail() {
    const [list,setlist]=useState(null)
    const {genre}= useParams();
    useEffect(()=>
    {
       
var url = `https://imdb-api.com/API/AdvancedSearch/k_beppf171?genres=${genre}&countries=in&languages=hi`

axios.request(url).then(function (response) {
	console.log(response.data);
    setlist(response.data.results)

}).catch(function (error) {
	console.error(error);
});
    },[genre])
    return (
        <div className='actor-details'>
            <div className='title'>
            <h3>Genre : {genre}</h3>
            <Link to='/dashboard/genre'><button><HiArrowNarrowLeft />  Back</button></Link>
            </div>
            <div className="row movie-listing">
                <div className='col-md-12'>
                <table>
                <thead className='table-head'>
                    <tr>
                    <th scope="col">Movie Name</th>
                    <th scope="col">Release Year</th>
                    <th scope="col">G-FBO</th>
                    <th scope="col">G-WBO</th>
                    <th scope="col">G-LBO</th>
                    </tr>
                </thead>
                <tbody>
                    {   (list)?
                        list.map((item,index)=>
                        {
                            return(
                                <Link className="table-row" key={index} to={`/movie-detail/${item.title}`}>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>26.29 cr.</td>
                                    <td>120.66 cr.</td>
                                    <td>191.05 cr.</td>
                                </Link>
                            )
                        }):<tr className="table-row"><td></td><td>Please Wait...</td><td></td><td></td><td></td></tr>
                    }
                </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default GenreDetail

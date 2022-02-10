import React,{useState} from 'react'
import '../css/MovieDetail.css'
import FBO from './FBO'
import LBO from './LBO'
import WBO from './WBO'
import {Link,Routes,Route,useParams} from 'react-router-dom'
import { HiArrowNarrowLeft } from "react-icons/hi";

function MovieDetail() {
    const [tab,settab]=useState(1)

    const handletabs=(index)=>
    {
        settab(index)
    }
    const {movie}=useParams();
    return (
        <div className='movie-detail'>
            <div className='title'>
            <h3>Movie Name : <span>{movie}</span></h3>
            <Link to='/dashboard/actors'><button><HiArrowNarrowLeft />  Back</button></Link>
            </div>
            <div className='tabs'>
                <Link to={`/movie-detail/${movie}`}><button onClick={()=>handletabs(1)} value={1} className={tab===1?"clicked":"unclicked"}>G-FBO</button></Link>
                <Link to={`/movie-detail/wbo/${movie}`}><button onClick={()=>handletabs(2)} value={2} className={tab===2?"clicked":"unclicked"}>G-WBO</button></Link>
                <Link to={`/movie-detail/lbo/${movie}`}><button onClick={()=>handletabs(3)} value={3} className={tab===3?"clicked":"unclicked"}>G-LBO</button></Link>
            </div>
            <Routes>
                <Route exact path='/:movie' element={<FBO />}/>
                <Route exact path='/wbo/:movie' element={<WBO />}/>
                <Route path='/lbo/:movie' element={<LBO />}/>
            </Routes>
        </div>
    )
}

export default MovieDetail

import React,{useState} from 'react'
import '../css/Dashboard.css'
import {Link,Routes,Route} from 'react-router-dom'
import Appusage from './Appusage'
import Actors from './Actors'
// import { IoExitOutline } from "react-icons/io5";
import Genre from './Genre'

function Dashboard() {
    const [tab,settab]=useState(1)
    const handletab=(index)=>
    {
        settab(index)
    }
    // const logout= ()=>
    // {
    //     localStorage.clear();
    // }
    return (
        <div className="dashboard">
            <div className="head">
                {/* <h3>Dashboard</h3> */}
                {/* <div className="user">
                    <img src={tanmay} alt="tanmay"/>
                    <div>
                    <h5>{user}</h5>
                    <p>Admin</p>
                    </div>
                </div> */}
                {/* <Link to='/auth'><button className="logout" onClick={logout}>Logout <IoExitOutline /></button></Link> */}
            </div>
            <div className="sub-pages">
                <Link onClick={()=> handletab(1)} className={tab===1?"clicked":"unclicked"} to="/"><p>App Usage</p></Link>
                <Link onClick={()=> handletab(2)} className={tab===2?"clicked":"unclicked"} to="/dashboard/actors"><p>Actors</p></Link>
                <Link onClick={()=> handletab(3)} className={tab===3?"clicked":"unclicked"} to="/dashboard/genre"><p>Genre</p></Link>
            </div>
            <Routes>
                <Route path="/" element={<Appusage />} ></Route>     
                <Route path="/dashboard/actors" element={<Actors />} ></Route>
                <Route path="/dashboard/genre" element={<Genre />} ></Route>
            </Routes>
        </div>
    )
}

export default Dashboard
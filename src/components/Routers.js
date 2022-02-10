import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './css/Routers.css'
import { AiFillHome,AiOutlineUser,AiFillSetting} from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import {FaUserCircle} from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import logo from './images/logo.jpeg'

function Routers() {
    const logout= ()=>
    {
        localStorage.clear();
    }
    const [tab,settab]=useState(1)
    const handletab=(index)=>
    {
        settab(index)
    }
    return (
        <div className="navbar">
            <div className='logo'>
            <img src={logo} alt='logo'/>
            </div>
        <hr className='partition'/>
        <div className='admin-info'>
            <div className='admin-icon'>
                <FaUserCircle />
            </div>
            <div className='admin-details'>
                <h4>YashRaj Films</h4>
                <p>Admin</p>
            </div>
        </div>
        <hr className='partition'/>
        <Link className="link" to="/">
          <div onClick={()=> handletab(1)} className={tab===1?"click":"unclick"}>
          <AiFillHome className="link-icon" />
            <p>Dashboard</p>
          </div>
        </Link>
        <Link className="link" to="/user-management">
        <div  onClick={()=> handletab(2)} className={tab===2?"click":"unclick"}>
            <AiOutlineUser className="link-icon" />
            <p>User Management</p>
            
        </div></Link>
        <Link className="link" to="/rewards">
        <div onClick={()=> handletab(3)} className={tab===3?"click":"unclick"}>
            <GiMoneyStack className="link-icon" />
            <p>Rewards</p>
        </div>
        </Link>
        <Link className="link" to="/setting">
        <div onClick={()=> handletab(4)} className={tab===4?"click":"unclick"}>
            <AiFillSetting className="link-icon" />
            <p>Settings</p>
        </div>  
        </Link>
        <Link to='/auth'><button className="logout" onClick={logout}>Logout <IoExitOutline /></button></Link>
        </div>
    )
}

export default Routers

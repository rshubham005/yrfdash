import React,{useContext,useState,useEffect} from 'react'
import tanmay from '../images/tanmay.png'
import {Link,useParams} from 'react-router-dom'
import { HiArrowNarrowLeft } from "react-icons/hi";
import '../css/Usermoreinfo.css'
import {Contextdata} from '../DataContext'
import { IoExitOutline } from "react-icons/io5";
import axios from 'axios'
function Usermoreinfo() {
    const {id} = useParams();
    const [address,setaddress]=useState({})
const [userinfo,setuserinfo]= useState({})
const logout= ()=>
    {
        localStorage.clear();
    }
useEffect(()=>
{
    let result
var config = {
    method: 'get',
    url: `https://5c9twl6zfb.execute-api.ap-south-1.amazonaws.com/dev/api/v1/users/${id}`,
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    // console.log(JSON.stringify(response.data));
    result=response.data
    console.log(result)
    setuserinfo(result)
    setaddress(JSON.stringify(result.address))
  })
  .catch(function (error) {
    console.log(error);
  });
  
},[id])
const {user,setuser} = useContext(Contextdata)
setuser(localStorage.getItem('username'))

    return (
        <div className='usermoreinfo'>
            <div className="head">
                <h3>User management</h3>
                <div>
                <button className="btn btn-outline-secondary">Download a CSV ⬇</button>
                <div className="user">
                    <img src={tanmay} alt="tanmay"/>
                    <div>
                    <h5>{user}</h5>
                    <p>Admin</p>
                    </div>
                </div>
                <Link to='/auth'><button className="logout" onClick={logout}>Logout <IoExitOutline /></button></Link>
                </div>
            </div>
            <div className="name">
                <div>
                    <h5>{userinfo.firstName}</h5>
                    <p>{userinfo.firstName} {userinfo.lastName}</p>
                </div>
                <Link to={`/user-info/${userinfo.id}`}><button><HiArrowNarrowLeft />  Back</button></Link>
            </div>
            <div className="basic">
                <div className="row">
                    <div className="col-md-7">
                    <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227821.9337606216!2d80.80242439719233!3d26.84892933168773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1638962660240!5m2!1sen!2sin" title="map" style={{border:"0",borderRadius:"20px"}} width="100%" height="220px" allowfullscreen=""></iframe>
                    </div>
                    </div>
                    <div className="col-md-5 location">
                        <h2>User Location Details</h2>
                        <table>
                            <tr>
                                <td className="table-item">State:</td>
                                <td className="table-item">{address.state}</td>
                            </tr>
                            <tr>
                                <td className="table-item">City:</td>
                                <td className="table-item">{address.city}</td>
                            </tr>
                            <tr>
                                <td className="table-item">Cinema:</td>
                                <td className="table-item">S2 Haseen PVR</td>
                            </tr>
                            <tr>
                                <td className="table-item">Address:</td>
                                <td className="table-item">{address.detail} {address.landmark} {address.city} {address.state} {address.pincode}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="booking-details">
                        <h4>User Booking Details</h4>
                        <h5>Sort By</h5>
                        </div>
                        <table>
                            <thead>
                                <th scope="col">Movie</th>
                                <th scope="col">Booking Date</th>
                                <th scope="col">Price</th>
                                <th scope="col">Time</th>
                            </thead>
                            <tbody>
                                <tr className='table-row'>
                                <td>Venom</td>
                                <td>28 Oct 2021</td>
                                <td>220 /-</td>
                                <td>07:50 PM</td>
                                </tr>
                                <tr className='table-row'>
                                <td>Soooryavanshi</td>
                                <td>28 Oct 2021</td>
                                <td>220 /-</td>
                                <td>07:50 PM</td>
                                </tr>
                                <tr className='table-row'>
                                <td>Shang-Chi</td>
                                <td>28 Oct 2021</td>
                                <td>220 /-</td>
                                <td>07:50 PM</td>
                                </tr>
                                <tr className='table-row'>
                                <td>Mortal Combat</td>
                                <td>28 Oct 2021</td>
                                <td>220 /-</td>
                                <td>07:50 PM</td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Usermoreinfo

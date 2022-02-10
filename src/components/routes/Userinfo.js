import React,{useEffect,useState} from 'react'
import {Link,useParams} from 'react-router-dom'
import '../css/Userinfo.css'
// import tanmay from '../images/tanmay.png'
import { HiArrowNarrowLeft } from "react-icons/hi";
import { AiOutlineUser,AiOutlineHeart,AiOutlineClockCircle } from "react-icons/ai";
import {BsGraphUp} from "react-icons/bs";
// import DoughnutChart from './DoughnutChart'
import Bargraph2 from './Bargraph2';
// import Popup from 'reactjs-popup';
// import { ImCross } from "react-icons/im";
// import { IoExitOutline } from "react-icons/io5";
import axios from 'axios'


function Userinfo() {
const {id} = useParams();
const [userinfo,setuserinfo]= useState({})
const [rcount,setrcount]=useState([])
const [points,setpoints]=useState(0)
const [tickets,settickets]=useState([])
const [refcount,setrefcount]=useState([])
const [bookings,setbookings]=useState([])

useEffect(()=>
{
let result
var config = {
    method: 'get',
    url: `https://5c9twl6zfb.execute-api.ap-south-1.amazonaws.com/dev/api/v1/users/${id}`,
  };
  axios(config)
  .then(function (response) {
    // console.log(JSON.stringify(response.data));
    result=response.data
    console.log(result)
    setuserinfo(result)
  }).catch(function (error) {console.log(error);});

  var creds = {
    method: 'get',
    url: `https://5c9twl6zfb.execute-api.ap-south-1.amazonaws.com/dev/api/v1/awarededPoints?userId=${id}`,
  };
  axios(creds)
  .then(function (response) {
    console.log(JSON.stringify(response.data.data));
    const reward=response.data.data
    // eslint-disable-next-line
    setpoints( reward.reduce((a,v)=> a = a + v.points , 0))
    settickets(reward.map((reward)=> {return reward.ticketId?reward.ticketId.count:0} ))
    // eslint-disable-next-line
    setrcount(reward.filter(item=>{if(item.eventName==="POINTS_CLAIMED"){return item}}))
    // eslint-disable-next-line
    setrefcount(reward.filter(item=>{if(item.eventName==="Referral"){return item}}))
    // eslint-disable-next-line
    setbookings(reward.filter(item=>{if(item.ticketId){return item.ticketId}}))
    console.log(reward)
  })
  .catch(function (error) {
    console.log(error);
  });
  
}
// eslint-disable-next-line
,[id])
// Chart data
// const data=[
//     {
//       "id": "Uploaded",
//       "label": "Uploaded",
//       "value": 17,
//       "color": "hsl(256, 70%, 50%)"
//     },
//     {
//       "id": "Scanned",
//       "label": "Scanned",
//       "value": 26,
//       "color": "black"
//     },
//     {
//       "id": "SMS/Message",
//       "label": "SMS/Message",
//       "value": 13,
//       "color": "#7D90B2"
//     }
//   ]

console.log(bookings)
    return (
        <div className='userinfo'>
            <div className="name">
                    <div>
                    <h5>{userinfo.firstName}</h5>
                    <p>{userinfo.firstName} {userinfo.lastName}</p>
                    </div>
                <Link to={`/user-management`}><button><HiArrowNarrowLeft /> Back </button></Link>
            </div>
            <div className="tiles">
                <div className="row">
                    <div className="col-md-3">
                        <div className="tile">
                        <AiOutlineUser className="tile-icon" />
                        <div>
                            <h3>{points}</h3>
                            <p>Total Points</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="tile">
                        <BsGraphUp className="tile-icon" />
                        <div>

                            <h3>{ // eslint-disable-next-line
                                eval(tickets.join('+'))
                                }</h3>
                            <p>Tickets Uploaded</p>
                        </div>
                        </div>
                    </div>
                    {/* <div className="col-md-4">
                        <div className="tile">
                        <BsGraphDown className="tile-icon" />
                        <div>
                            <h3>3</h3>
                            <p>Movies watched</p>
                        </div>
                        </div>
                    </div> */}
                        <div className="col-md-3">
                            <div className="tile">
                                <AiOutlineHeart className="tile-icon" />
                                <div>
                                    <h3>{rcount.length}</h3>
                                    <p>Rewards Claimed</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="tile">
                                <AiOutlineClockCircle className="tile-icon" />
                                <div>
                                    <h3>{refcount.length}</h3>
                                    <p>Referals</p>
                                </div>
                                </div>
                            </div>
                </div>
                <div className="row ">
                    <div className="col-md-7">
                        <h3>Location:</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227821.9337606216!2d80.80242439719233!3d26.84892933168773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1638962660240!5m2!1sen!2sin" title="map" style={{border:"0",borderRadius:"20px"}} width="100%" height="240px" allowfullscreen=""></iframe>
                        <div className="bargraph">
                        <div className="usage">
                            <h3>App Usage</h3>
                        </div>
                        <Bargraph2 />
                        </div>
                    </div>
                    <div className='col-md-5 booking-info'>
                    <h3>User Booking Details</h3>
                        {
                            bookings.map((item,index)=>
                                {
                                    return(
                                        <div className="row ticket" key={index}>
                                            <div className='col-md-5'>
                                        <img src={item.ticketId.ticketImage} alt='movie poster' />
                                        </div>
                                        <div className='col-md-7'>
                                            <div className='ticket-info'>
                                            <p><span>Movie Name :</span>{item.ticketId.movieName }</p>
                                            <p><span>Ticket Count :</span>{item.ticketId.count }</p>
                                            <p><span>Theater Name :</span>{item.ticketId.theater }</p>
                                            <p><span>Theater City :</span>{item.ticketId.city }</p>
                                            </div>
                                            {/* <p>{item.ticketId.bookingDate }</p> */}
                                        </div>
                                        </div>
                                    )
                                }
                                )
                        }
                </div>
                </div>
            </div>
        </div>
    )
}

export default Userinfo

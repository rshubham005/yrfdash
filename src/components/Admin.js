import React from 'react'
import './css/Admin.css'

import Routers  from './Routers'
import {
    Routes,
    Route,
  } from "react-router-dom";
import Users from './routes/Users'
import Dashboard from './routes/Dashboard';
import Rewards from './routes/Rewards'
import Setting from './routes/Setting'
import Rewarddesc from './routes/Rewarddesc';
import Userinfo from './routes/Userinfo'
import Usermoreinfo from './routes/Usermoreinfo';
import Appusage from './routes/Appusage'
// import Bookingdetails from './routes/Bookingdetails';
import Actors from './routes/Actors';
import ActorDetails from './routes/ActorDetails';
import MovieDetail from './routes/MovieDetail';
import FBO from './routes/FBO'
import LBO from './routes/LBO'
import WBO from './routes/WBO'
import Genre from './routes/Genre'
import GenreDetail from './routes/GenreDetail';

function Admin() {
    return (
        <div className="adminroute">
            <div>
            <Routers />
            </div>
            <div className="row container-fluid">
                <div className="col-md-2">
                    
                </div>
                <div className="col-md-10 content">
                    <Routes>
                        <Route path="/" element={<Dashboard />}>
                        <Route path="/" element={<Appusage />} ></Route>   
                        {/* <Route path="/dashboard/booking-details" element={<Bookingdetails />} ></Route>    */}
                        <Route path="/dashboard/actors" element={<Actors />} ></Route>
                        <Route path="/dashboard/genre" element={<Genre />} ></Route>
                        </Route>
                        <Route path="/genre-info/:genre" element={<GenreDetail />} ></Route>
                        <Route path='actor-details/:actor' element={<ActorDetails />} ></Route>
                        <Route path='movie-detail/' element={<MovieDetail />} >
                            <Route exact path='/movie-detail/:movie' element={<FBO />}/>
                            <Route exact path='/movie-detail/wbo/:movie' element={<WBO />}/>
                            <Route exact path='/movie-detail/lbo/:movie' element={<LBO />}/>
                        </Route>
                        <Route path="/user-management" element={<Users />}></Route>
                        <Route path="/rewards" element={<Rewards />}></Route>
                        <Route path="/setting" element={<Setting />}></Route>
                        <Route path="/reward-description/:id" element={<Rewarddesc />}></Route>
                        <Route path="/user-info/:id" element={<Userinfo />}></Route>
                        <Route path="/user-more-info/:id" element={<Usermoreinfo />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Admin

import React from 'react'
// import { AiOutlineUser,AiOutlineHeart} from "react-icons/ai";
// import {BsGraphUp} from "react-icons/bs";
import '../css/Appusage.css'
// import Piechart2 from './Piechart2';
import Piegraph from './Piegraph'
// import UsageGraph from './UsageGraph';
// import Points from './Points';
import Plateform from './Plateform';
import CityAgeGraph from './CityAgeGraph';
import Map from './Map'

function Appusage() {
    return (
        <div>
            <Map />
            {/* <div className="row">
            <div className="col-md-9">
                <div className="row tiles">
                    <div className="col-md-4">
                        <div className="tile">
                        <BsGraphUp className="tile-icon" />
                        <div>
                            <h3>1000</h3>
                            <p>Overall Points</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="tile">
                        <AiOutlineUser className="tile-icon" />
                        <div>
                            <h3>620</h3>
                            <p>No. of Users</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="tile">
                        <AiOutlineHeart className="tile-icon" />
                        <div>
                            <h3>20</h3>
                            <p>Rewards Claimed</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="downloads">
                    <h3>Downloads</h3>
                    <h4>Most claimed rewards</h4>
                </div>
                <div className="row">
                    <div className="col-md-7 bargraph">
                        <UsageGraph />
                        <div className="graph-details">
                            <div>
                                <p>Total Downloads</p>
                                <h3>2 Millions+</h3>
                                <p>+7.00%</p>
                            </div>
                            <div>
                                <ul>
                                    <li><h3>Android devices</h3></li>
                                    <li><h3>IOS Devices</h3></li>    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 pie-graph-2">
                        <Piechart2 />
                        <ol>
                            <li>StarBucks</li>
                            <li>Meet With a star</li>
                            <li>Music Subscription</li>
                            <li>Paytm</li>
                            <li>Naykaa</li>
                        </ol>
                    </div>
                </div>
                </div>
                <div className="col-md-3">
                    <div className="pie-graph">
                    <h4>YRF Records</h4>
                    <Points />
                            <div className="chart-item">
                            <p>Points</p>
                            <p>20</p>
                            </div>
                            <div className="chart-item">
                            <p>Registration</p>
                            <p>29</p>
                            </div>
                    </div>
                    <div className="special">
                        <h4>Today's Special</h4>
                        <div><h5>20</h5></div>
                        <p>Tickets Scanned</p>
                        <div><h5>300</h5></div>
                        <p>Points Earned</p>
                        <div><h5>4</h5></div>
                        <p>Rewards Claimed</p>
                    </div>
                </div>
            </div> */}
           <div className='row' style={{margin:"10px 0px"}}>
           <div className="col-md-6">
                <div className='plateform'>
                <Plateform />
                </div>
                </div>
                <div className="col-md-6">
                   <div className='piegraph'>
                       <Piegraph />
                   </div>
                </div>
            </div>
            <div className="bargraph2">
                <div className="usage">
                    <h3>CityWise Age group bookings</h3>
                </div>
                <CityAgeGraph />
            </div>
        </div>
    )
}

export default Appusage

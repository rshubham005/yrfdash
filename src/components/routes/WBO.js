import React from 'react'
import '../css/Graphs.css'
import Bargraph from './Bargraph'
import LocationGraph from './LocationGraph'
import Piechart from './Piechart'
import Barchart from './Barchart'
import AgeTimeGraph from './AgeTimeGraph'
import TicketBookingGraph from './TicketBookingGraph'
import RevenueVolume from './RevenueVolume'

function WBO() {
    return (
        <div>
            <div className='contents'>
                <h4>Weekly Box-office Collection</h4>
                <div className='row graph-row'>
                    <div className='col-md-6 pie'>
                        <Piechart />
                        <p>Gender(%)</p>
                    </div>
                    <div className='col-md-6 info'>
                        <Bargraph />
                        <p>Platform</p>
                    </div>
                </div>
                <div className='row graph-row'>
                    <div className='col-md-6 info'>
                        <LocationGraph />
                        <p>Location</p>
                    </div>
                    <div className='col-md-6 info'>
                        <Barchart/>    
                        <p>Age Group</p>
                    </div>
                </div>
                <div className='row graph-row'>
                    <div className='col-md-6 info'>
                    <AgeTimeGraph />
                    </div>
                    <div className='col-md-6 info'>
                    <TicketBookingGraph />
                    </div>
                </div>
                <div className='row graph-row'>
                    <div className="col-md-3"></div>
                    <div className='col-md-6 info'>
                    <RevenueVolume />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WBO

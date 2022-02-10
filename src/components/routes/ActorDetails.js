import React from 'react'
import '../css/ActorDetails.css'
import {Link} from 'react-router-dom'
import { HiArrowNarrowLeft } from "react-icons/hi";
import {useParams} from 'react-router-dom'
import RevenueContribution from './RevenueContribution'
import RevenueGraph from './RevenueGraph';
import TicketBooking from './TicketBooking';

function ActorDetails() {
    const {actor}=useParams()
    return (
        <div className='actor-details'>
            <div className='title'>
            <h3>Summary : {actor}</h3>
            <Link to='/dashboard/actors'><button><HiArrowNarrowLeft />  Back</button></Link>
            </div>
            <div className="row movie-listing">
                <div className='col-md-12'>
                <table>
                <thead>
                    <tr>
                    <th scope="col">Movie Name</th>
                    <th scope="col">Release Date</th>
                    <th scope="col">FBO</th>
                    <th scope="col">WBO</th>
                    <th scope="col">LBO</th>
                    </tr>
                </thead>
                <tbody>
                    <Link className="table-row" to='/movie-detail/Sooryavanshi'>
                    <td className='table-data'>Sooryavanshi</td>
                    <td className='table-data'>5 Nov 2021</td>
                    <td className='table-data'>26.29 cr.</td>
                    <td className='table-data'>120.66 cr.</td>
                    <td className='table-data'>191.05 cr.</td>
                    </Link>
                    <Link className="table-row" to='/movie-detail/Sooryavanshi'>
                    <td className='table-data'>Sooryavanshi</td>
                    <td className='table-data'>5 Nov 2021</td>
                    <td className='table-data'>26.29 cr.</td>
                    <td className='table-data'>120.66 cr.</td>
                    <td className='table-data'>191.05 cr.</td>
                    </Link>
                    <Link className="table-row" to='/movie-detail/Sooryavanshi'>
                    <td className='table-data'>Sooryavanshi</td>
                    <td className='table-data'>5 Nov 2021</td>
                    <td className='table-data'>26.29 cr.</td>
                    <td className='table-data'>120.66 cr.</td>
                    <td className='table-data'>191.05 cr.</td>
                    </Link>
                    <Link className="table-row" to='/movie-detail/Sooryavanshi'>
                    <td className='table-data'>Sooryavanshi</td>
                    <td className='table-data'>5 Nov 2021</td>
                    <td className='table-data'>26.29 cr.</td>
                    <td className='table-data'>120.66 cr.</td>
                    <td className='table-data'>191.05 cr.</td>
                    </Link>
                    <Link className="table-row" to='/movie-detail/Sooryavanshi'>
                    <td className='table-data'>Sooryavanshi</td>
                    <td className='table-data'>5 Nov 2021</td>
                    <td className='table-data'>26.29 cr.</td>
                    <td className='table-data'>120.66 cr.</td>
                    <td className='table-data'>191.05 cr.</td>
                    </Link>
                    <Link className="table-row" to='/movie-detail/Sooryavanshi'>
                    <td className='table-data'>Sooryavanshi</td>
                    <td className='table-data'>5 Nov 2021</td>
                    <td className='table-data'>26.29 cr.</td>
                    <td className='table-data'>120.66 cr.</td>
                    <td className='table-data'>191.05 cr.</td>
                    </Link>
                    <Link className="table-row" to='/movie-detail/Sooryavanshi'>
                    <td className='table-data'>Sooryavanshi</td>
                    <td className='table-data'>5 Nov 2021</td>
                    <td className='table-data'>26.29 cr.</td>
                    <td className='table-data'>120.66 cr.</td>
                    <td className='table-data'>191.05 cr.</td>
                    </Link>
                </tbody>
                </table>
                </div>
            </div>
            <hr />
                <div className='row graph'>
                    <div className='col-md-12'>
                        <RevenueContribution />
                    </div>
                </div>
                <hr />
                <div className='row graph'>
                    <div className='col-md-12'>
                        <RevenueGraph />
                    </div>
                </div>
                <hr />
                <div className='row graph'>
                    <div className='col-md-12'>
                        <TicketBooking />
                    </div>
                </div>
        </div>
    )
}

export default ActorDetails

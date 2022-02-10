import React from 'react'
import Popup from 'reactjs-popup';
import { ImCross } from "react-icons/im";
import '../css/Settings.css'
import {MdDelete} from "react-icons/md";

function Setting() {
    
    return (
        <div className='settings'>
            <div className="head">
                {/* <h3>Settings</h3> */}
                <Popup trigger={<button className="btn btn-secondary">Add New Admin</button>} modal>
                        {
                            close=>
                            (
                                <div className="model-content">
                                    <h3>ADD NEW ADMIN</h3>
                                    <button onClick={close} className="cross"><ImCross /></button>
                                    
                                        <div>
                                            <label for="firstName">First Name: </label>
                                            <input type="text" placeholder="First Name" />
                                        </div>
                                        <div>
                                        <label for="lastName">Last Name: </label>
                                        <input type="text" placeholder="Last Name" />
                                        </div>
                                        <div>
                                            <label for="email">Email: </label>
                                            <input type="email" name='email' placeholder="Enter Email" />
                                        </div>
                                        <div>
                                        <label for="contact">Contact Number: </label>
                                        <input type="text" name='contact' placeholder="Contact Number" />
                                        </div>
                                        <div>
                                        <label for="contact">Password: </label>
                                        <input type="password" name='password' placeholder="Enter Password" />
                                        </div>                                    
                                    <button className="save">Save</button>
                                </div>
                            )
                        }
                    </Popup>  
            </div>

            <table>
            <thead className='table-head'>
                <tr>
                <th scope="col">Sr No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Password</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr className="table-row">
                    <td>1</td>
                    <td>YashRaj Films</td>
                    <td>yashrajfilms@gmail.com</td>
                    <td>9012345678</td>
                    <td>Yashraj</td>
                    <td>Edit</td>
                    <td><MdDelete/></td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Setting

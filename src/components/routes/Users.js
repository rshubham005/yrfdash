import React,{useEffect, useState} from 'react'
// import tanmay from '../images/tanmay.png'
import '../css/users.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { CSVLink } from "react-csv";
import moment from 'moment'
// import {FaSearch} from "react-icons/fa";
function Users() {
    const [alluser,setallusers] =useState([])
    const [searcheduser,setsearcheduser]=useState(null)
    useEffect(()=>
    {
        let result;
        var config = {
            method: 'get',
            url: 'https://5c9twl6zfb.execute-api.ap-south-1.amazonaws.com/dev/api/v1/users',
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            result=response.data
            setallusers(result.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    },[])
    console.log(alluser)

    //search user
    const searchuserhandler=(e)=>
    {
        const output= alluser.filter((item)=>
    {
        return item.firstName.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setsearcheduser(output)
    }   
    return (
        <div className="user-management">
            <div className="head">
                <CSVLink data={alluser} filename='All-Users.csv' className="btn btn-secondary">Download CSV</CSVLink>
                <input type="text" onChange={searchuserhandler} name="search" placeholder="🔎 Search User"/>
            </div>
            <table className="userlist">
            <thead className='table-head'>
                <tr>
                <th className='srno' scope="col">Sr No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile No</th>
                <th scope="col">DOB</th>
                <th scope="col">Pin Code</th>
                <th scope="col">Gender</th>
                </tr>
            </thead>
            <tbody>
                
                {
                    (searcheduser)?
                    searcheduser.map((item,index)=>
                    {
                        return(
                            <Link className="table-row" to={`/user-info/${item.id}`}>
                                <td className='srno'>{index+1}</td>
                                <td>{item.firstName} {item.middleName} {item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNo}</td>
                                <td>{(item.dateOfBirth)?moment(item.dateOfBirth).format("DD-MMMM-YYYY"):"N/A"}</td>
                                <td>{JSON.stringify(item.address).pincode}</td>
                                <td>{item.gender}</td>
                            </Link>
                        )
                    })
                    :
                    alluser.map((item,index)=>
                    {
                        return(
                            <Link className="table-row" to={`/user-info/${item.id}`}>
                                <td className='srno'>{index+1}</td>
                                <td>{item.firstName} {item.middleName} {item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNo}</td>
                                <td>{(item.dateOfBirth)?moment(item.dateOfBirth).format("DD-MMMM-YYYY"):"N/A"}</td>
                                <td>{item.address?(JSON.parse(item.address)).pincode?(JSON.parse(item.address)).pincode:"N/A":"N/A"}</td>
                                <td>{item.gender}</td>
                            </Link>
                        )
                    })
                }
            </tbody>
            </table>
        </div>
    )
}

export default Users

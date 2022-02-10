import React,{useState,useEffect} from 'react'
// import tanmay from '../images/tanmay.png'
import '../css/Reward.css'
import {MdDelete} from "react-icons/md";
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup';
import { ImCross } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import axios from 'axios';
import { CSVLink } from "react-csv";
import moment from 'moment'
function Rewards() {
    let count=1
    const [picture, setPicture] = useState(null);
    const [picturepreview,setpicturepreview] = useState(null);
    const [tnc,settnc]=useState('')
    const [searchedreward,setsearchedreward]=useState(null)
    const [newreward,setnewreward]=useState(
    {    
        rewardName:"",
        rewardDescription:"",
        validity:"",
        points:50,
        thumbnailImage:"",
        bannerImage:"",
        termsAndCondition:[
            {
                name:'term',
                text:''
            }
        ]
    }
    )
const [result,setresult]=useState([]);
useEffect(()=>
{
    var data;
    var config = {
        method: 'get',
        url: 'https://5c9twl6zfb.execute-api.ap-south-1.amazonaws.com/dev/api/v1/rewards',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        data=response.data
        setresult(data.data)
        // console.log(result)
      })
      .catch(function (error) {
        console.log(error);
      });
      
},[searchedreward,result,newreward])
//handling image upload

const uploadPicture = (e) => {
    if(e.target.files[0])
    {
        setPicture(e.target.files[0])
        setpicturepreview(URL.createObjectURL(e.target.files[0]))
    }
};

//input handler
const inputhandler=(e)=>
{
    let inputname=e.target.name;
    let value= e.target.value;
    setnewreward({...newreward,[inputname]:value})
}

//Adding new reward
const addreward =(e)=>
{  
    
    e.preventDefault();
    var data = JSON.stringify({
        "filePath": "yrf",
        "fileType": `${picture.type}`
      });
      
      var config = {
        method: 'post',
        url: 'https://shared-services.futurely.io/api/v1/documents/cdn.futurely.io',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(response.data);
        let url = response.data.url
        // console.log(url.split('?')[0])
        newreward.thumbnailImage=url.split('?')[0]
        newreward.bannerImage=url.split('?')[0]
        newreward.termsAndCondition[0].text=tnc
        console.log(url)
        var data = picture
        var config = {
            method: 'put',
            url: url,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(response);
            console.log("success")
            var data = JSON.stringify(newreward)
            var config = {
                method: 'post',
                url: 'https://5c9twl6zfb.execute-api.ap-south-1.amazonaws.com/dev/api/v1/rewards',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : data
              };
              
              axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
                alert("Reward Added Successfully !")
                setnewreward(
                    {    
                        rewardName:"",
                        rewardDescription:"",
                        validity:"",
                        points:50,
                        thumbnailImage:"",
                        bannerImage:"",
                        Termsnconditions:[
                            {
                                name:'term',
                                text:''
                            }
                        ]
                    }
                )
                settnc('')
                setpicturepreview(null)
              })
              .catch(function (error) {
                console.log(error);
              });
          })
          .catch(function (error) {
            console.log(error);
          });          
      })
      .catch(function (error) {
        console.log(error);
      });
      
}
//
const handletnc=(e)=>
{
    settnc(e.target.value)
}
//Search Rewards
 const searchhandler=(e)=>
 {
    const output= result.filter((item)=>
    {
        return item.rewardName.toLowerCase().includes(e.target.value.toLowerCase())
    }) 
    setsearchedreward(output)
    
 }

// delete reward fumction 
const deletereward=(id)=>
{
    var data = '';

    var config = {
      method: 'delete',
      url: `https://5c9twl6zfb.execute-api.ap-south-1.amazonaws.com/dev/api/v1/rewards/${id}`,
      headers: { },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      alert('Reward Deleted Successfully')
    })
    .catch(function (error) {
      console.log(error);
    });
}

    return (
        <div className='user-management'>
            <div className="head">
                {/* <h3>Rewards</h3> */}
                <div>
                <Popup trigger={<button className="btn btn-primary"> +  Add Rewards </button>} modal>
                {
                close=>
                (
                    <div className="model-content2"> 
                        <button onClick={close} className="cross"><ImCross /></button>
                        <h5>Reward Name</h5>
                        <input type="text" placeholder="Text here" onChange={inputhandler} name="rewardName" className="form-control" />
                        <h5>Reward Description</h5>
                        <textarea className="form-control" rows="4" onChange={inputhandler} name='rewardDescription' placeholder="Text Here"></textarea>
                        <div className="upload">
                            <div>
                            <h5>Validity</h5>
                            <input type="date" name='validity' onChange={inputhandler} className="form-control" />
                            <h5>Points</h5>
                            <input type="text" name='points' onChange={inputhandler} className="form-control" placeholder="Pts" />
                            </div>
                            <div>
                                <h5>Banner</h5>
                                <div className="file">
                                    <label for="banner-img">
                                        {
                                            (picturepreview)?<img alt="preview pic" src={picturepreview} className='file' />:<AiOutlinePlus className="plus-icon" />
                                        }
                                    </label>
                                    <input type="file" id="banner-img" onChange={uploadPicture} name='bannerImage' className="form-control" />
                                </div>
                            </div>
                        </div>
                        <h5>Terms and Conditions</h5>
                        <textarea type="text" rows="3" className='form-control' onChange={handletnc} name='term' placeholder='Terms and Conditions' />
                        <button type='submit' onClick={addreward}>Add Reward</button>
                    </div> 
                )
                }
            </Popup>
            <CSVLink data={result} filename='All-Users.csv' className="btn btn-secondary">Download CSV</CSVLink>
                </div>
                <input type="text" onChange={searchhandler} name="search" placeholder="🔎 Search Rewards"/>
            </div>
            <table>
            <thead className='table-head'>
                <tr>
                <th className='srno' scope="col">Sr No</th>
                <th scope="col" className='rewardname srno'>Name</th>
                <th scope="col" className='description srno'>Description</th>
                <th className='srno' scope="col">Validity</th>
                <th scope="col">Points</th>
                <th className='srno' scope="col">Edit</th>
                <th className='srno' scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    (searchedreward)?
                    // eslint-disable-next-line
                    searchedreward.map((item,index)=>
                    {
                        if(!item.deleted)
                        {return (
                            <tr className="table-row" key={index}>
                                <td className='srno'>{count++}</td>
                                <td className='rewardname'>{item.rewardName}</td>
                                <td className='description'>{item.rewardDescription}</td>
                                <td>{(item.validity)?moment(item.validity).format("DD-MMMM-YYYY"):"N/A"}</td>
                                <td>{item.points}</td>
                                <td className='srno'><Link className="edit" to={`/reward-description/${item.id}`}>Edit</Link></td>
                                <td className='srno'><MdDelete onClick={()=>deletereward(item.id)} /></td>
                            </tr>
                        )}
                    })
                    :
                    // eslint-disable-next-line
                    result.map((item,index)=>
                    {
                        if(!item.deleted)
                        {return (
                            <tr className="table-row" key={index}>
                                <td className='srno'>{count++}</td>
                                <td className='rewardname'>{item.rewardName}</td>
                                <td className='description'>{item.rewardDescription}</td>
                                <td>{(item.validity)?moment(item.validity).format("DD-MMMM-YYYY"):"N/A"}</td>
                                <td>{item.points}</td>
                                <td className='srno'><Link className="edit" to={`/reward-description/${item.id}`}>Edit</Link></td>
                                <td className='srno'><MdDelete onClick={()=>deletereward(item.id)} /></td>
                            </tr>
                        )}
                    })
                }
            </tbody>
            </table>
        </div>
    )
}

export default Rewards

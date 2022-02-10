import React,{useState,useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import '../css/Desc.css';
import axios from 'axios';
import { BiEdit } from "react-icons/bi";

function Rewarddesc() {
  const [data, setdata] =useState({})
  const [tnc,settnc] = useState('')
  const [preview,setpreview]=useState('')
  const [picture,setpicture]=useState()
    let {id} = useParams()
    // const [updatereward,setupdatereward] = useState(
    //     {
    //     rewardName:"",
    //     rewardDescription:"",
    //     validity:"",
    //     points:50,
    //     thumbnailImage:"",
    //     bannerImage:""
    //     }
    // )
    
    useEffect(()=>
    {   let apiurl=`https://5c9twl6zfb.execute-api.ap-south-1.amazonaws.com/dev/api/v1/rewards/${id}`
        var config = {
            method: 'get',
            url: apiurl,
            headers: { },
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            setdata(response.data)
            setpreview(data.bannerImage)
            console.log(response.data.termsAndCondition)
            if(response.data.termsAndCondition[0].text) {settnc(response.data.termsAndCondition[0].text)}
          })
          .catch(function (error) {
            console.log(error);
          });
     // eslint-disable-next-line      
    },[id])

    const updatepicture=(e)=>
    {
      if(e.target.files[0])
      {
        setpicture(e.target.files[0])
        setpreview(URL.createObjectURL(e.target.files[0]))
      }
    }

    const updatehandler=(e)=>
    {
        let inputname=e.target.name;
        let value= e.target.value;
        setdata({...data,[inputname]:value})
    }
    const updatereward =()=>
    {
      if(data.termsAndCondition[0])
      {
        data.termsAndCondition[0].text=tnc
      }
      else
      {
        data.termsAndCondition[0]={
          name:'term',
          text:tnc
        }
      }
       
      if(picture)
      {
        var img = JSON.stringify({
          "filePath": "yrf",
          "fileType": `${picture.type}`
        });
        
        var apikeys = {
          method: 'post',
          url: 'https://shared-services.futurely.io/api/v1/documents/cdn.futurely.io',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : img
        };
        axios(apikeys)
        .then(function (response) {
          console.log(response.data);
          let url = response.data.url
          data.thumbnailImage=url.split('?')[0]
          data.bannerImage=url.split('?')[0]
          var pic = picture
          var config = {
              method: 'put',
              url: url,
              headers: {
                  'Content-Type': 'multipart/form-data'
              },
              data : pic
            };
            
            axios(config)
            .then(function (response) {
              console.log(response)
              var config = {
                method: 'put',
                url: `https://5c9twl6zfb.execute-api.ap-south-1.amazonaws.com/dev/api/v1/rewards/${id}`,
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : data
              };
              
              axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
                alert('Reward Updated Successfully!!')
              })
              .catch(function (error) {
                console.log(error);
              });
            })
        })
      }
      else
      {
        var config = {
            method: 'put',
            url: `https://5c9twl6zfb.execute-api.ap-south-1.amazonaws.com/dev/api/v1/rewards/${id}`,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            alert('Reward Updated Successfully!!')
          })
          .catch(function (error) {
            console.log(error);
          });   
        }       
    }

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
// tnc handler
const handletnc = (e)=>
{
    settnc(e.target.value)
}
    return (
        <div className="desc">
            <div className="head">
                <h3>Reward Description</h3>
            </div>
            <div className="row">
                <div className="col-md-6 left">
                <div className='star'>
                <img src={(preview)?preview:data.bannerImage} alt="reward description"/>
                </div>
                <label for='banner'><BiEdit className='edit'/></label>
                <input type='file' className="form-control" onChange={updatepicture} id='banner' hidden='true' />
                <div className="inputbox">
                    <input type='text'  name='rewardName' onChange={updatehandler} value={data.rewardName} />
                </div>
                <div className="inputbox">
                    <p>Validity :</p> <input type='date' name='validity' onChange={updatehandler} value={data.validity} />
                    
                </div>
                <div className="inputbox">
                    <p>Points :</p> <input type='text' name='points' onChange={updatehandler} value={data.points} /> <p>Pts</p>
                    
                </div>
                </div>
                <div className="col-md-6 right">
                    <textarea className="form-control" rows="7" name='rewardDescription' onChange={updatehandler} value={data.rewardDescription} placeholder="Description"></textarea>
                    <br/>
                    <textarea className="form-control" rows="7" name='termsAndCondition' onChange={handletnc} value={tnc} placeholder="Terms and Conditions"></textarea>
                    <br/>
                    <Link to='/rewards' className="reward-update"><button className="form-control update" onClick={updatereward}>Update</button></Link>
                    <br/>
                    <Link to='/rewards' className="reward-update"><button onClick={()=>deletereward(data.id)} className="form-control update">Remove Reward</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Rewarddesc

import React,{useState,useContext,useRef} from 'react'
import key from '../images/key.png'
import mail from '../images/email.png'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {Contextdata} from '../DataContext' ;
import SimpleReactValidator from 'simple-react-validator';

function Login() {
    const validator =useRef(new SimpleReactValidator({}));
    let navigate = useNavigate();
    const [cred,setcred]=useState(
        {
        phoneNo:"",
        email:"",
        password:""
        }
    )
    const {setuser} = useContext(Contextdata)
    const credentialhandler=(e)=>
    {
        let inputname=e.target.name;
        let value= e.target.value;
        setcred({...cred,[inputname]:value})
    }
const handleLogin=()=>
{
    if (validator.current.allValid()) {
        var data = {...cred};
    var config = {
    method: 'post',
    url: 'https://5c9twl6zfb.execute-api.ap-south-1.amazonaws.com/dev/api/v1/users/login/admin',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    }

    axios(config)
    .then(function (response) {
    console.log(response.data);
    const result= response.data
    localStorage.setItem('username',result.data.firstName)
    setuser(localStorage.getItem('username'))
    navigate("/", { replace: true })
    window.location.reload();
    alert("Login Successful")
    setcred({
        phoneNo:"",
        email:"",
        password:""
        })
    })
    .catch(function (error) {
    console.log(error);
    alert('Wrong Credentials')
    });   

      }
       else
        {
        validator.current.showMessages();  
      }  
}
    return (
            <div className="form">
                <h4>Welcome to</h4>
                <h3>Admin Dashboard</h3>
                
                <div className="inputbox">
                <div className="box">
                    <div className="icon-box">
                    <img src={key} className="icon" alt="key" />
                    </div>
                    <div>
                        <p>Admin email</p>
                        <input type="email" onChange={credentialhandler} name="email" value={cred.email}/>
                        {validator.current.message('email', cred.email, 'required|email', { className: 'text-danger' })}
                    </div>
                </div>
                <div className="box">
                    <div className="icon-box">
                    <img src={key} className="icon" alt="key" />
                    </div>
                    <div>
                        <p>Phone Number</p>
                        <input type="text"  onChange={credentialhandler} name="phoneNo" value={cred.phoneNo} />
                        {validator.current.message('phoneNo', cred.phoneNo, 'required|min:10|max:10', { className: 'text-danger' })}
                    </div>
                </div>
                <div className="box">
                    <div className="icon-box">
                    <img src={mail} className="icon" alt="mail" />
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="password" required='required' onChange={credentialhandler} name="password" value={cred.password}/>
                    </div>
                </div>
                </div>
                <button className="login-btn" onClick={handleLogin}>
                    Login
                </button>
            </div>
    )
}

export default Login

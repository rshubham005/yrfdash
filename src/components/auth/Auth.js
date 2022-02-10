import React from 'react'
import auth from '../images/auth.svg'
import '../css/auth.css'
import {
    Routes,
    Route,
  } from "react-router-dom";
import Login from './Login'

function Auth() {
    
    return (
            <div className="auth">
            <div className="container bg-light">
            <div className="row">
                <div className="col-md-6">
                    <img src={auth} alt="Login" />
                </div>
                <div className="col-md-6">
                    <Routes>
                    <Route path='/' element={<Login />}></Route>
                    </Routes>
                </div>
            </div>
            </div>
            </div>
    )
}

export default Auth

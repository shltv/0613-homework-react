/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import logo from './logo.svg'
import './header-style.css'
const {format} = require('date-fns');

const Header = () => {
    const [today,setToday] = useState();
    

    useEffect(()=>{
        setInterval(() => setToday(format(new Date(),'dd.MM.yyyy hh:mm:ss')), 1000)    
    },[today])

    
    return (
        <div>
            <div className='header-wrapper'>
                <div className='logo-search'>
                    <img src={logo} id='logo'/>
                    <input />
                </div>
                <div><h2>{today}</h2></div>
            </div>
        </div>
    )
}

export default Header
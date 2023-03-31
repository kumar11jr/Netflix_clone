import React, {useState, useEffect } from 'react'
import "./Nav.css";

const Nav = () => {
  const [show,handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY>350) {
                handleShow(true);
            }else{
                handleShow(false);
            }
        });
        return()=>{
            window.removeEventListener("scroll",()=>{});
        };
    },[]);
  return (
    <div className={`nav ${show && "nav_black"}` }>
        <img className='logo' src="logo.png" alt="Netflix" srcset="" />
        <div>
        <button className='sign'>Downloads</button>
        </div>
        
    </div>
  )
}

export default Nav

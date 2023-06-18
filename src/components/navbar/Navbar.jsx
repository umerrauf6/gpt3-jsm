import React, { useState } from 'react'
import logo from "../../assets/logo.svg"
import "./navbar.css"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const Menu = () => {
  return (
     <>
        <p><a href="#Home">Home</a></p>
        <p><a href="#WhatisGpt">What is Gpt</a></p>
        <p><a href="#openai">Open AI</a></p>
        <p><a href="#CaseStudy">Case Study</a></p>
        <p><a href="#Library">Library</a></p>
      </>
  )
}

const Navbar = () => {
  const [toggle,setToggle]=useState("false")
  return (
    <div className='navbar'>
      <div className='navbar__links-container'>
        <div className='navbar__logo'>
        <img src={ logo} alt='logo'/>
      </div>
      <div className='navbar__links'>
       <Menu/>
      </div>
      </div>
      
      <div className='navbar__button-container'>
       <p>signin</p>
        <button type='button'>signup</button>
      </div>
      <div className='navbar__toggle'>
        {
          toggle ? <AiOutlineMenu size={27} onClick={()=>setToggle(!toggle)}/>: <AiOutlineClose size={27} onClick={()=>setToggle(!toggle)}/>
        }
        {
          toggle===false  && (
            <div className='navbar__toggle-container scale-up-center'>
              <div className='navbar__toggle-container_links'>
                <Menu/>
              <div className='navbar__toggle-container_buttons'>
                <p>signin</p>
                <button type='button'>signup</button>
              </div>
              </div>

            </div>
          )
        }
       
      </div>
      
    </div>
  )
}

export default Navbar

import React from 'react'
import "./footer.css"
import logo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className='footer__section section__padding'>
      <div className='footer__section-heading'>
        <h4 className='gradient__text'>Do you want to step in to the future before others</h4>
      </div>
      <div className='footer__section-btn'>
        <button>Request Early Access</button>
      </div>
      <div className='footer__section-container'>
        <div className='footer__section-container_title'>
          <img src={logo} alt="" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='footer__section-container_links'>
          <li>
          <ul>Links</ul>
            <ul>Overons</ul>
            <ul>Social Media</ul>
            <ul>Counters</ul>
            <ul>Contact</ul>
          </li>
        </div>
        <div className='footer__section-container_links'>
          <li>
          <ul>Company</ul>
            <ul>Terms & Conditions</ul>
            <ul>Privacy Policy</ul>
            <ul>Contact</ul>
          </li>
        </div>
        <div className='footer__section-container_links'>
          <li>
            <ul>Get in Touch</ul>
            <ul>Maqboolabad Gujrat</ul>
            <ul>+92-349-4682429</ul>
            <ul>umerrauf6@gmail</ul>
          </li>
        </div>
      </div>
      <div className='footer__section-text'>
        © 2021 GPT-3. All rights reserved.
      </div>
    </div>
  )
}

export default Footer

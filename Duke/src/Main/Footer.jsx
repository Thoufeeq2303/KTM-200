import React from 'react'
import './footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <section id='black'>
      <div className='container'>
        <div className='row'>
          <h4>FOLLOW US ON</h4>
          <div className='col-sm-2 bl'>
            <FaInstagram /> <FaFacebookF /> <FaYoutube />
          </div>
        </div>
      </div>
    </section>
    <section id='foot'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-2'>
            <h5><b>NAKED BIKE</b></h5>
            <a className='h' href='#'><h6>KTM 1390 DUKE</h6></a>
            <a className='h' href='#'><h6>KTM 890 DUKE</h6></a>
            <a className='h' href='#'><h6>KTM 390 DUKE</h6></a>
            <a className='h' href='#'><h6>KTM 250 DUKE</h6></a>
            <a className='h' href='#'><h6>KTM 200 DUKE</h6></a>
            <a className='h' href='#'><h6>KTM 160 DUKE</h6></a>
          </div>
          <div className='col-sm-2'>
            <h5><b>SUPERSPORT</b></h5>
            <a className='h' href='#'><h6>KTM RC GP</h6></a>
            <a className='h' href='#'><h6>KTM RC 390</h6></a>
            <a className='h' href='#'><h6>KTM RC 200</h6></a>
          </div>
          <div className='col-sm-2'>
            <h5><b>TRAVEL</b></h5>
            <a className='h' href='#'><h6>KTM 1290 ADVENTURE</h6></a>
            <a className='h' href='#'><h6>KTM890 ADVENTURE</h6></a>
            <a className='h' href='#'><h6>KTM250 ADVENTURE</h6></a>
            <a className='h' href='#'><h6>KTM390 ADVENTURE</h6></a>
          </div>
          <div className='col-sm-2'>
            <h5><b>MOTOCROSS</b></h5>
            <a className='h' href='#'><h6>KTM 450 SX</h6></a>
            <a className='h' href='#'><h6>KTM 250 SX</h6></a>
            <a className='h' href='#'><h6>KTM 85 SX</h6></a>
            <a className='h' href='#'><h6>KTM 65 SX</h6></a>
            <a className='h' href='#'><h6>KTM 50 SX</h6></a>
          </div>
          <div className='col-sm-2'>
            <h5><b>CONNECT</b></h5>
            <a className='h' href='#'><h6>Enqire Now</h6></a>
            <a className='h' href='#'><h6>Test Ride</h6></a>
            <a className='h' href='#'><h6>Book Now</h6></a>
            <a className='h' href='#'><h6>Check Finance Offers</h6></a>
            <a className='h' href='#'><h6>Contact us</h6></a>
          </div>
        </div>
      </div>
    </section>
    <section id='last'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-2'>
            <h6>TERMS & CONDITIONS</h6>
          </div>
           <div className='col-sm-1'>
            <h6>DISLAIMER</h6>
          </div>
           <div className='col-sm-2'>
            <h6>PRIVACY POLICY</h6>
          </div>
          <div className='col-sm-2'></div>
          <div className='col-sm-5'>
            <p>Copyright © 2025 Bajaj Auto Ltd. All rights reserved</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Footer
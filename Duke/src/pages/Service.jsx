import React from 'react'
import './service.css'
import Footer from '../Main/Footer'

const Service = () => {
  return (
    <>
    <section id='banner2'>
      <h1><span className="title">KTM ASSURE:</span> STRESS FREE <br/>MAINTENANCE</h1>
      <button className="ktm-button">DOWNLOAD BROCHURE</button>
    </section>
    <section id='text1'>
      <div className='container mt-5'>
        <h2>WHY CHOOSE KTM ASSURE?</h2><br/>
        <h5>Your KTM isn’t just a motorcycle; It’s a promise of adrenaline-fueled adventures. With KTM assure, we’ve got your back, ensuring your ride remains as thrilling as the day you first revved it. Say goodbye to maintenance worries and hello to uninterrupted journeys.</h5><br/>
        <h2>KEY BENEFITS</h2><br/>
        <h5><img src='https://cdn.bajajauto.com/-/media/ktm/Service-Page/Vector'/> Ride stress-free with <b>Hassle-Free Maintenance</b> for your KTM Motorcycle.</h5>
        <h5><img src='https://cdn.bajajauto.com/-/media/ktm/Service-Page/Vector'/> Inclusive coverage for periodic service components.</h5>
        <h5><img src='https://cdn.bajajauto.com/-/media/ktm/Service-Page/Vector'/> Available at all <b>Authorized KTM Dealership.</b></h5>
        <h5><img src='https://cdn.bajajauto.com/-/media/ktm/Service-Page/Vector'/> <b>Secure Protection Against Price</b> increases on spare parts due to inflation.</h5>
        <h5><img src='https://cdn.bajajauto.com/-/media/ktm/Service-Page/Vector'/> <b>Easily Transferable Policy</b> to the next motorcycle owner.</h5>
        <h5><img src='https://cdn.bajajauto.com/-/media/ktm/Service-Page/Vector'/> For more information, <b>Visit Your Nearest KTM Dealership.</b></h5>
        <h5><img src='https://cdn.bajajauto.com/-/media/ktm/Service-Page/Vector'/> Program options tailored to you</h5>
      </div>
    </section>
    <section id='text2'>
      <div className='container mt-5'>
        <h2>PROGRAM DETAILS</h2>
        <div class="table-container mt-5">
  <table class="ktm-table">
    <thead>
      <tr>
        <th>KTM ASSURE PLAN DETAILS</th>
        <th>COMPREHENSIVE PLAN</th>
        <th>PERIODIC PLAN</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>All Scheduled Services as per owner's Manual</td>
        <td class="tick"><img src='https://www.ktmindia.com/~/media/ktm/Service%20Page/subway_tick'/></td>
        <td class="tick"><img src='https://www.ktmindia.com/~/media/ktm/Service%20Page/subway_tick'/></td>
      </tr>
      <tr>
        <td>Labour cost for periodic maintenance</td>
        <td class="tick"><img src='https://www.ktmindia.com/~/media/ktm/Service%20Page/subway_tick'/></td>
        <td class="tick"><img src='https://www.ktmindia.com/~/media/ktm/Service%20Page/vaadin_close'/></td>
      </tr>
      <tr>
        <td>Replacement of spare parts at periodic maintenance</td>
        <td class="tick"><img src='https://www.ktmindia.com/~/media/ktm/Service%20Page/subway_tick'/></td>
        <td class="tick"><img src='https://www.ktmindia.com/~/media/ktm/Service%20Page/subway_tick'/></td>
      </tr>
      <tr>
        <td>Package</td>
        <td class="price">Starting at just <b>₹ 11,799/</b>-<br/>(For 2 years package)</td>
        <td class="price">Starting at just <b>₹ 6,699/-</b><br/>(For 2 years package)</td>
      </tr>
    </tbody>
  </table>
</div><br/>
      <button className="duke-button">DOWNLOAD BROCHURE</button>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Service

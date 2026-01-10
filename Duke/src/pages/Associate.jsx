import React from 'react'
import './associate.css'
import Footer from '../Main/Footer'

const Associate = () => {
  return (
    <>
    <section id='banner3'>
      <div className='container hero'>
      <h3>RIDE A KTM</h3>
      <h4>FUEL YOUR READY TO RACE SPIRIT</h4><br/>
      <h6>For KTM Enthusiast</h6>
      </div>
    </section>
    <section id='box'>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className="card">
              <h4>KTM @ LADAKH</h4>
  <img src="https://cdn.bajajauto.com/-/media/ktm/pro-experience/home-page/adventure/associations/Ladakh%20Service-Thumbnail.ashx" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>KTM LEH & multiple service centers</b></h5>
    <p className="card-text">KTM LEH is now fully operational with sales, service & spares support. RSA, returnable spares kit & special offers to tour operators are available on demand. This is an effort from KTM India to ensure you with hassle-free Adventure.</p>
    <a href="#" class="btn">KNOW MORE</a>
  </div>
</div>
          </div>
          <div className='col-lg-6'>
            <div className="card">
              <h4>TOUR WITH A RENTED KTM ADVENTURE</h4>
  <img src="https://www.ktmindia.com/-/media/ktm/pro-experience/home-page/adventure/ride-a-ktm/1.webp" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>Tour Operators</b></h5>
    <p className="card-text">KTM has partnered with tour operators nationwide to provide KTM Adventure experiences to fans. Fans can rent a KTM Adventure through these partners and explore different locations according to their schedule.</p>
    <a href="#" class="btn">KNOW MORE</a>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
          <Footer/>

    </>
  )
}

export default Associate

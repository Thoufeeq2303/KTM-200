import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { BiTag } from "react-icons/bi";
import './collect.css'
import Footer from "../Main/Footer";

const Collect = () => {
  const [active, setActive] = useState("duke");

  const data = {
    duke: [
      { name: "KTM 1390 SUPER DUKE R", price: "22,95,800/-" },
      { name: "KTM 890 DUKE R", price: "14,50,000/-" },
      { name: "KTM 390 DUKE", price: "2,97,443/-" },
      { name: "KTM 250 DUKE", price: "2,12,196/-" },
      { name: "KTM 200 DUKE", price: "1,91,324/-" },
      { name: "KTM 160 DUKE", price: "1,70,545/-" }
    ],
    rc: [
      { name: "KTM RC 390", price: "3,18,000/-" },
      { name: "KTM RC 200", price: "2,14,000/-" }
    ],
    travel: [
      { name: "KTM 890 ADVENTURE R", price: "15,80,000/-" },
      { name: "KTM 1290 ADVENTURE S", price: "22,73,900/-" },
      { name: "KTM 250 ADVENTURE", price: "2,40,010/-" },
      { name: "KTM 390 ADVENTURE", price: "3,69,699/-" },
      { name: "KTM 390 ADVENTURE X", price: "2,47,000/-" }
    ],

    motocross: [
      { name: "KTM 450 SX-F", price: "8,10,000/-" },
      { name: "KTM 250 SX-F", price: "8,10,000/-" },
      { name: "KTM 85 SX", price: "8,10,000/-" },
      { name: "KTM 65 SX", price: "8,10,000/-" },
      { name: "KTM 50 SX", price: "7,20,000/-" }
    ],

    enduro: [
      { name: "KTM EXC 300", price: "9,50,000/-" }
    ],

    dual: [
      { name: "KTM 450 RALLY", price: "10,20,000/-" }
    ]
  };

  const [bikedata, setBikedata] = useState([])

  useEffect(() => {
    fetch("http://localhost:3229/getKTM").then((res) => res.json()).then((data) => {
      if (Array.isArray)
        setBikedata(data)
    })
  })

  return (
    <>
      <section id='top'>
      </section>
      <section id='colect'>
        <div className='container'>
          <h1><b>KTM BIKES IN INDIA</b></h1><br />
          <p>KTM offers a motorcycle for every rider, whether you're after power, speed, or the sheer thrill of the ride. Prices for KTM bikes in India start at Rs. 1,70,545 for the KTM 160 Duke, making it the most affordable entry into the world of KTM. At the top of the range, the KTM 1390 Super Duke R, priced at Rs. 22,95,800, delivers unmatched power and precision for an unforgettable riding experience</p><br />
          <p>KTM India has a lineup of 19 models, featuring 5 Naked bikes in the Duke category, 2 Sports models from the RC series, 5 Adventure bikes, 5 Motocross dirt bikes, 1 Enduro dirt bike and 1 Dualsport dirt bike. Among the most popular bikes in India are the 160 Duke 200 Duke, 250 Duke, and 390 Duke</p>
        </div>
      </section>
      <section id='product'>
        <div className='container'>
          <h1>EXPLORE KTM INDIA BIKE COLLECTIONS</h1>
          <div className='row'>
            {
              bikedata.map((item) => (
                <div className='col-lg-4' key={item._id}>
                  <div className="card">
                    {/* <img className='logo' src='https://www.ktmindia.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-390-duke/logo/ktm-logo.webp?h=85&iar=0&w=95&hash=E70AD6D424791907B3775EF7360D6F73' /> */}
                    <img className='bike' src={item.image} alt="..." />
                    <div className="card-body">
                      <h5 className="card-title"><b>{item.username}</b></h5>
                      <h5 className='num'>₹ {item.price}</h5>
                      <div className='row'>
                        <div className='col-sm-4'>
                          <h6>ENGINE CAPACITY</h6>
                          <p>{item.engine}</p>
                        </div>
                        <div className='col-sm-4'>
                          <h6>MAX POWER</h6>
                          <p>{item.power}</p>
                        </div>
                        <div className='col-sm-4'>
                          <h6>MAX TORQUE</h6>
                          <p>{item.torque}</p>
                        </div>
                      </div>
                      <div className='butt'>
                        <a href="#" className="btn">EXPLORE</a>
                        < Link to={`/Book/${item._id}`} className="btn1">BOOK NOW</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }


          </div>
        </div>
      </section>
      <div className="price-container">
        <h1>KTM BIKE PRICE IN INDIA</h1>
        <div className="tabs mt-5">
          {[
            ["duke", "DUKE PRICE"],
            ["rc", "RC PRICE"],
            ["travel", "TRAVEL PRICE"],
            ["motocross", "MOTOCROSS PRICE"],
            ["enduro", "ENDURO PRICE"],
            ["dual", "DUALSPORT PRICE"]
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={active === key ? "active" : ""}
            >
              {label}
            </button>
          ))}
        </div>
        <h2 className="title">KTM {active.toUpperCase()} PRICE LIST</h2>
        <div className="table-head">
          <p>VARIANTS</p>
          <p>PRICE</p>
          <p>SPECIFICATION</p>
        </div>
        <div className="content">
          {data[active].map((item, i) => (
            <div className="row1" key={i}>
              <p>{item.name}</p>
              <div className="price-col">
                <p className="main-price">{item.price}</p>
                <span className="view">View Bike Price</span>
              </div>
              <span className="view1">Click to View</span>
            </div>
          ))}
        </div>
      </div>
      <div className="faq">
        <div className="container">
          <h1>FAQs FOR KTM BIKES</h1>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Where are KTM bikes manufactured?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  KTM bikes are designed in Austria, where the brand was originally founded and developed, while manufacturing takes place in India. This setup allows KTM to maintain high-quality European engineering standards while achieving competitive pricing in markets like India.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Which is the most affordable KTM bike available in India?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  The most budget-friendly KTM bike in India is the KTM Duke 250. This model offers a Single Cylinder, Liquid Cooled, LC4c, FI Engine with a capacity of 249.07 cc. It has a 15L fuel tank, Supermoto ABS for enhanced braking control, a Quickshifter+ system for clutch-free gear shifts, and a split-trellis frame for stability and performance.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Which KTM bikes are available in India?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  KTM’s Indian lineup includes various models across categories:<br /><br />
                  a. Naked Bikes: KTM 390 Duke, KTM 250 Duke, KTM 200 Duke<br />
                  b. Supersport Bikes: KTM RC GP, KTM RC 390, KTM RC 200<br />
                  c. Travel Bikes: 2023 KTM 390 Adventure, KTM 390 Adventure, KTM 390 Adventure X, KTM 250 Adventure<br /><br />
                  Each of these bikes offers unique features and specifications tailored for different riding styles, from urban commuting to long-distance touring and adventurous off-roading.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                  What is the price of KTM bikes?
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  If you're considering purchasing a KTM bike in India, here’s a detailed breakdown of the current ex-showroom prices for various KTM models:
                  <br />
                  <br />
                  Naked Bikes
                  <br />
                  <br />
                  KTM 390 Duke: ₹2,97,443/- Ex-showroom Delhi<br />
                  KTM 250 Duke: ₹2,12,196/- Ex-showroom Delhi<br />
                  KTM 200 Duke: ₹1,91,324/- Ex-showroom Delhi<br />
                  KTM 160 Duke: ₹1,70,545/- Ex-showroom Delhi<br />
                  <br />
                  Travel Bikes
                  <br />
                  <br />
                  2023 KTM 390 Adventure: ₹3,64,142/- Ex-showroom Delhi<br />
                  KTM 390 Adventure: ₹3,41,877/- Ex-showroom Delhi<br />
                  KTM 390 Adventure X: ₹3,03,768/- Ex-showroom Delhi<br />
                  KTM 250 Adventure: ₹2,40,010/- Ex-showroom Delhi<br />
                  <br />
                  Supersport Bikes
                  <br />
                  <br />
                  KTM RC 390: ₹3,22,719/- Ex-showroom Delhi<br />
                  KTM RC 200: ₹2,14,721/- Ex-showroom Delhi
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Which is the latest KTM bike in India?
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  The latest KTM bikes in India represent a thrilling expansion of their global lineup, catering to every kind of rider. Whether you're into naked performance, adventure touring, off-road exploration, or motocross racing, KTM has something exceptional to offer.
                  <br /><br />
                  1. Naked Bikes: The KTM 1390 SUPER DUKE R and KTM 890 DUKE R are the ultimate choices for adrenaline junkies who demand top-tier performance and aggressive styling.<br />
                  2. Adventure Bikes: For those seeking to conquer vast landscapes, the KTM 1290 SUPER ADVENTURE S and KTM 890 ADVENTURE R deliver unmatched power, endurance, and rugged capability.<br />
                  3. Enduro Bikes: The KTM 350 EXC-F is perfect for serious off-road enthusiasts, offering exceptional handling and performance in challenging terrains.<br />
                  4. Motocross Range: KTM caters to professional racers with the KTM 450 SX-F and KTM 250 SX-F. For younger racers, the KTM 85 SX, KTM 65 SX, and KTM 50 SX provide the perfect platform to begin their journey.<br />
                  <br /><br />
                  KTM's latest offerings in India reflect their commitment to providing high-performance bikes for every riding style.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  How does the KTM new model 2025 compare to the previous versions?
                </button>
              </h2>
              <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  The KTM new model 2025 offers for the 390 Adventure and 390 Duke significant upgrades over its predecessors, featuring improved performance, enhanced safety features, and a more refined design. Compared to earlier versions, it boasts a more responsive engine, cruise control offering better power delivery, and a smoother ride. The suspension has been reworked for improved handling, making the KTM new model 2025 more suitable for both urban and off-road conditions.
                  <br />
                  Additionally, the new model incorporates modern technology, such as advanced digital displays and smarter connectivity options, making it a step ahead in the KTM lineup. Riders can expect a more versatile and comfortable experience overall.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Collect
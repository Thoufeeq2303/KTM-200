import React, { useState } from 'react'
import './models.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaLongArrowAltRight,FaLongArrowAltLeft } from "react-icons/fa";
import Footer from '../Main/Footer';

const Models = () => {
    const slides     = [
        {
id: 1,            
image: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-200-duke/performance-new/desk/webp/race-spec-engine.webp',
eyebrow: 'PERFORMANCE',
heading: 'FIRE BREATHING HP',
title: 'RACE SPEC ENGINE',
desc: "the KTM 200 DUKE is ready and waiting to tear-up the streets and the circuits alike. The lightweight, compact engine packs a real punch and with 19 kW (25 PS) it's the most powerful option in its class.",
},
{
    id: 2, 
image: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-200-duke/performance-new/desk/webp/cylinder-head.webp',
eyebrow: 'PERFORMANCE',
heading: 'FIRE BREATHING HP',
title: 'CYCLINDER HEAD',
desc: "Just like the 1290 SUPER DUKE R, the four valves in the cylinder head of the KTM 200 DUKE are actuated by two overhead camshafts and ultra-hard, carbon coated cam followers. The result is an ultra-reliable, long-lasting engine that produces next-level power.",
},
{
    id: 3, 
image: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-200-duke/performance-new/desk/webp/injection.webp',
eyebrow: 'PERFORMANCE',
heading: 'FIRE BREATHING HP',
title: 'INJECTION',
desc: "The intricate engine design, state-of-the-art injection electronics and close-ratio, 6-speed transmission not only help the KTM 200 DUKE to achieve white-knuckle performance, but also extreme fuel efficiency.",
},
{
    id: 4, 
image: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-200-duke/200-duke/desktop/webp/exhaust.webpww',
eyebrow: 'PERFORMANCE',
heading: 'FIRE BREATHING HP',
title: 'EXHAUST',
desc: "The compact underbelly, three-chamber silencer is positioned close to the bike's overall center of gravity. This helps keep the bike's balance centered and eliminates any chance of accidental contact between the exhaust and both the rider's and passenger's legs.",
},
    ]
     const [index, setIndex] = useState(0);
const prevslides = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
const nextslides = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
    const slide1    = [
        {
id: 1,            
image: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-200-duke/duke-spirit/desk/webp/split-streel-trellis-frame.webp',
eyebrow: '100% DUKE SPIRIT',
heading: 'THE SHARP & STYLISH STREETFIGHTER',
title: 'SPLIT STEEL TRELLIS FEAME',
desc: "The world-class chassis, paired with a lightweight split-steel trellis frame, turns the KTM 200 DUKE into a perfect street weapon. Weight is close to the center of gravity, maximizing its maneuverability and precision.",
},
{
    id: 2, 
image: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-200-duke/duke-spirit/desk/webp/wp-apex-usd-forks.webp',
eyebrow:'100% DUKE SPIRIT' ,
heading:'THE SHARP & STYLISH STREETFIGHTER',
title:'WP APEX USED FORKS',
desc:"The KTM 200 DUKE comes with ultra-lightweight, high-performance upside-down WP forks as standard. Using the latest technology, these forks not only perform flawlessly when pushed to the limit, but also allow riders to cruise comfortably on longer stretches of tarmac.",
},
{
    id: 3, 
image: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-200-duke/200-duke/desktop/webp/wp-apex-monoshock.webp',
eyebrow: '100% DUKE SPIRIT',
heading: 'THE SHARP & STYLISH STREETFIGHTER',
title: 'WP APEX MONOSHOCK',
desc: "Thanks to its progressive 150 mm spring, the KTM 200 DUKE will perform in any environment you can throw at it. The preload is adjustable, so you can count on well-balanced suspension whether you're riding solo or two-up, with or without luggage, on road or on track. The choice is yours.",
},
{
    id: 4, 
image: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-200-duke/duke-spirit/desk/webp/radially-mounted-brake-calipers.webp',
eyebrow: '100% DUKE SPIRIT',
heading: 'THE SHARP & STYLISH STREETFIGHTER',
title: 'RADIALLY MOUNTED BREAK CALIPERS',
desc: "More than adequate deceleration is ensured at the wheels by the radially mounted four-piston monoblock calipers gripping floating 300 mm dises on the front and a two-piston caliper gripping the 230 mm discs on the rear. This ensures equal bite force throughout the brakepads for a super sharp braking.",
},
    ]
     const [index1, setIndex1] = useState(0);
const prevslide1 = () => setIndex1((i) => (i === 0 ? slide1.length - 1 : i - 1));
const nextslide1 = () => setIndex1((i) => (i === slide1.length - 1 ? 0 : i + 1));
const slides2     = [
        {
id: 1,            
image: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-200-duke-2024/200-duke-new/cards/tft-web.webp',
eyebrow: 'RACE AHEAD',
heading: 'TFT DISPLAY WITH CONNECTIVITY',
title: 'TFT DISPLAY & SWITCH GEAR',
desc: "Everything you need at a glance. The KTM 200 DUKE features an all-new 5 bonded glass TFT dashboard.new switch cube, with 4-way menu switches that allow easy interaction with all vehicle functions",
},
{
    id: 2, 
image: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-200-duke-2024/200-duke-new/cards/super-moto-web.webp',
eyebrow: 'RACE AHEAD',
heading: 'TFT DISPLAY WITH CONNECTIVITY',
title: 'ABS WITH SUPERMOTO',
desc: "Thrill-seeking riders will love the added fun-factor (and extra racetrack control) of the advanced Supermoto mode, activated at the push of a button. Rear brake pressure is entirely up to the rider's right foot. Feel like a trail braking master.",
},
{
    id: 3, 
image: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-250-duke/arsenal-of-tech/desktop/webp/full-led-headlamps.webp',
eyebrow: 'RACE AHEAD',
heading: 'TFT DISPLAY WITH CONNECTIVITY',
title: 'FULL LED HEADLAMPS',
desc: "One look at the twin LED headlights on the KTM 200 DUKE, you are hooked by its full-offensive stance. Optimum visibility is guaranteed with that distinctive look.",
},
{
    id: 4, 
image: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-200-duke-2024/200-duke-new/cards/nav-ride-web.webp',
eyebrow: 'RACE AHEAD',
heading: 'TFT DISPLAY WITH CONNECTIVITY',
title: 'NAVIGATION WITH BLUETOOTH PARING',
desc: "Stay connected on long rides with KTM MY RIDE. View and manage incoming calls on the TFT display using the mode switch, all while keeping your focus on the road.",
},
    ]
     const [index2, setIndex2] = useState(0);
const prevslides2 = () => setIndex2((i) => (i === 0 ? slide3.length - 1 : i - 1));
const nextslides2 = () => setIndex2((i) => (i === slide3.length - 1 ? 0 : i + 1));
 const slide3    = [
        {
id: 1,            
image: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-200-duke-2024/200-duke-new/cards/handle-web.webp',
eyebrow: 'RAZOR SHARP ERGONOMICS',
heading: 'MAXIMUM MANEUVERABILITY WITH PRECISION',
title: 'HANDLEBAR',
desc: "Hi-tech upright handlebars offer KTM 200 DUKE riders a controlled yet aggressive body position, allowing you to dominate in all aspects of riding. From destroying corners to pulling the perfect stoppie, these bars will give you the balance and confidence you need to attack the tarmac like never before.",
},
{
    id: 2, 
image: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-200-duke-2024/200-duke-new/cards/fuel-web.webp',
eyebrow:'RAZOR SHARP ERGONOMICS' ,
heading:'MAXIMUM MANEUVERABILITY WITH PRECISION',
title:'FUEL TANK',
desc:"The innovative and ergonomic 13.5 L fuel tank not only provides riders with perfect knee contact for attacking every corner, but also with an unbelievably long range, even when you ride as fast as you dare all day long.",
},
{
    id: 3, 
image: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-200-duke/200-duke/desktop/webp/seat.webp',
eyebrow: 'RAZOR SHARP ERGONOMICS',
heading: 'MAXIMUM MANEUVERABILITY WITH PRECISION',
title: 'SEAT',
desc: "The two-part seat offers first class sport riding ergonomics with maximum support for both rider and pillion.",
},
{
    id: 4, 
image: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-200-duke-2024/200-duke-new/cards/wheel-web.webp',
eyebrow: 'RAZOR SHARP ERGONOMICS',
heading: 'MAXIMUM MANEUVERABILITY WITH PRECISION',
title: 'WHEELS',
desc: "As light as they are stable, the 17-inch cast alloy racing wheels help you put the power down with confidence. Wrapped in premium rubber, the pro-spec tires will keep your KTM glued to the road.",
},
    ]
     const [index3, setIndex3] = useState(0);
const prevslide3 = () => setIndex3((i) => (i === 0 ? slide3.length - 1 : i - 1));
const nextslide3 = () => setIndex3((i) => (i === slide3.length - 1 ? 0 : i + 1));
const [color, setColor] = useState("#f26522");
  const img = {
    "#f26522": "https://www.ktmindia.com/-/media/images/ktm/booking/ktm-pngs-and-webps/ktm-200-duke/electronic-orange-webp.webp",
    black: "https://www.ktmindia.com/-/media/images/ktm/booking/ktm-pngs-and-webps/ktm-200-duke/dark-galvano-webp.webp",
    silver: "https://www.ktmindia.com/-/media/images/ktm/booking/ktm-pngs-and-webps/ktm-200-duke/silver-metallic-duke-200.webp",
  };
 
  return (
    <div>
    <section id="banner">
        <div className='container'>
        <div className='hero'>
            <h6>KTM 200 Duke</h6>
            <h2>5" COLOR TFT<br/> with CONNECTIVITY<br/> ALL -NEW<br/> KTM 200 DUKE</h2>
            <button className="ktm-animated-btn"><span>CLICK & COLLECT</span></button>
        </div>
        </div>
</section>
<section id='down'>
    <div className='container'>
        <div className='row mt-4'>
            <div className='col-lg-3'>
                <img src='https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-390-duke/key-features/performance_icon.svg'/>
                <h5>PERFORMANCE</h5>
                <h6>Fire breathing HP when<br/>you need it</h6>
            </div>
             <div className='col-lg-3'>
                <img src='https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-390-duke/key-features/design_icon.svg'/>
                <h5>100% DUKE SPIRIT</h5>
                <h6>The sharp & stylish<br/>streetfighter</h6>
            </div>
             <div className='col-lg-3'>
                <img src='https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-390-duke/key-features/technology_icon-ktm.png'/>
                <h5>ARSENAL OF TECH</h5>
                <h6>SuperMoto ABS, WP<br/>USD & more</h6>
            </div>
             <div className='col-lg-3'>
                <img src='https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-390-duke/key-features/safety_icon.svg'/>
                <h5>RAZOR SHARP ERGONOMICS</h5>
                <h6>Maximum maneuverability<br/>with precision</h6>
            </div>
        </div>
    </div>
</section>
<section id='road'>
    <div className='container-fluid mt-5'>
        <div className='rd'>
        <h1><b>Check On Road Price</b></h1>
        <h5>KTM 200 Duke</h5>
        </div>
        <div className='row'>
          <div className='col-lg-3'>
             <img src={img[color]} style={{ width: 800 }} />
        </div>
        <div className='col-lg-2'></div>
        <div className='col-lg-5 dd'>
          <h4>KTM 200 DUKE</h4>
    <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
  {["#f26522", "black", "silver"].map(c => (
    <div
      key={c}
      onClick={() => setColor(c)}
      style={{
        width: 40,
        height: 40,
        borderRadius: "100%",
        background: c,
        border: color === c ? "3px solid #ff5100ff" : "1px solid ",
        cursor: "pointer"
      }}
    />
  ))}
</div><br/>
          <h5>STATE</h5>
                <select class="select" aria-label="Default select example" data-bs-spy="scroll">
                  <option selected>SELECT STATE</option>
                  <option value="1">TAMIL NADU</option>
                  <option value="2">KARNATAKA</option>
                  <option value="3">KERALA</option>
                </select>
                <div className='ex'>
                <h5>Starting From</h5><br/>
                <h2>₹ 2 07 666 /-*</h2>
                <h4>Ex-showroom price</h4>
                </div>
                <button className='Ktm-rd'>CHECK ON ROAD PRICE</button>
            </div>
        </div>
      </div>
</section>
<section id='emi'>
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-lg-6'></div>
            <div className='col-lg-6 mt-1 emm'>
                <h2>Calculate EMI</h2>
                <h6>Calculate EMI For</h6>
                <h4>KTM 200 Duke</h4>
                <h5><b>PLAN YOUR MONTHLY INSTALLMENTS</b></h5>
                <h6>Use our EMI Calculator to check the monthly EMI & Finance options for better deal.</h6><br/>
                <p><img src='https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/enduro/ktm-200-duke/loan-banner/icon/tenure.svg'/> Max tenure: 48 months
                <br/><br/><img src='https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/enduro/ktm-200-duke/loan-banner/icon/price.svg'/> Lowest Processing Fees: 1% or Rs 750 whichever is lowest
                <br/><br/><img src='https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/enduro/ktm-200-duke/loan-banner/icon/roi.svg'/> Lowest ROI: 9.49%
                <br/><br/><img src='https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/enduro/ktm-200-duke/loan-banner/icon/emi.svg'/> EMI: Less than Rs 100 per day</p>
                <div className='bbb'>
                  <button className="ktm-btn">CALCULATE EMI</button>
                </div>
            </div>
        </div>
    </div>
</section>
<section id='spec'>
    <h1><b>SPECIFICATIONS</b></h1>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-3'>
                <h6>Engine Displacement</h6>
                <h3>199.5 cc</h3>
            </div>
             <div className='col-lg-3'>
                <h6>Engine Type</h6>
                <h3>Single Cylinder</h3>
                <p>Liquid Cooled, DOHC, FI Engine</p>
            </div>
             <div className='col-lg-3'>
                <h6>Power (PS)</h6>
                <h3>25 PS</h3>
                <p>@ 10000 rpm</p>
            </div>
             <div className='col-lg-3'>
                <h6>Torque</h6>
                <h3>19.3 Nm</h3>
                <p>@ 8000 rpm</p>
            </div>
        </div>
    </div>
    <div className="btn-box">
      <button className="btn-orange">VIEW DETAILED SPECS</button>
      <button className="btn-white">DOWNLOAD BROCHURE</button>
    </div>
</section>
<div className='tx1'><h2>KTM 200 Duke Bike Details</h2></div>
<section id='detail'>
<div className='slide'>
    <div className="gs-wrapper">
<div className="gs-left">
<img src={slides[index].image} alt="slide" />
</div>
<div className="gs-right">
<p className="gs-eyebrow">{slides[index].eyebrow}</p>
<h2 className="gs-heading">{slides[index].heading}</h2>
<h4 className="gs-title">{slides[index].title}</h4>
<p className="gs-desc">{slides[index].desc}</p>
<div className="gs-controls">
<button onClick={prevslides}><FaLongArrowAltLeft /></button>
<button onClick={nextslides}><FaLongArrowAltRight /></button>
</div>
</div>
</div>
</div>
<div className='slide1'>
     <div className="gs-wrapper">
<div className="gs-left">
<p className="gs-eyebrow">{slide1[index1].eyebrow}</p>
<h2 className="gs-heading">{slide1[index1].heading}</h2>
<h4 className="gs-title">{slide1[index1].title}</h4>
<p className="gs-desc">{slide1[index1].desc}</p>
<div className="gs-controls">
<button onClick={prevslide1}><FaLongArrowAltLeft /></button>
<button onClick={nextslide1}><FaLongArrowAltRight /></button>
</div>
</div>
<div className="gs-right">
<img src={slide1[index1].image} alt="slide1" />
</div>
</div>
</div>
<div className='slide2'>
    <div className="gs-wrapper">
<div className="gs-left">
<img src={slides2[index2].image} alt="slide" />
</div>
<div className="gs-right">
<p className="gs-eyebrow">{slides2[index2].eyebrow}</p>
<h2 className="gs-heading">{slides2[index2].heading}</h2>
<h4 className="gs-title">{slides2[index2].title}</h4>
<p className="gs-desc">{slides2[index2].desc}</p>
<div className="gs-controls">
<button onClick={prevslides2}><FaLongArrowAltLeft /></button>
<button onClick={nextslides2}><FaLongArrowAltRight /></button>
</div>
</div>
</div>
</div>
<div className='slide3'>
     <div className="gs-wrapper">
<div className="gs-left">
<p className="gs-eyebrow">{slide3[index3].eyebrow}</p>
<h2 className="gs-heading">{slide3[index3].heading}</h2>
<h4 className="gs-title">{slide3[index3].title}</h4>
<p className="gs-desc">{slide3[index3].desc}</p>
<div className="gs-controls">
<button onClick={prevslide3}><FaLongArrowAltLeft /></button>
<button onClick={nextslide3}><FaLongArrowAltRight /></button>
</div>
</div>
<div className="gs-right">
<img src={slide3[index3].image} alt="slide3" />
</div>
</div>
</div>
</section>
<section id='gallery'>
    <div className='container'>
        <h3>GALLERY</h3>
        <div className='row'>
            <div className='col-lg-3 mt-4'>
                <img src='https://www.ktmindia.com/ktm-bikes/naked-bike/-/media/Images/ktm/ktm-bikes/gallery-section/duke-200/g/1.webp'/>
            </div>
            <div className='col-lg-3 mt-4'>
                <img src='https://www.ktmindia.com/ktm-bikes/naked-bike/-/media/Images/ktm/ktm-bikes/gallery-section/duke-200/g/3.webp'/>
            </div>
            <div className='col-lg-3 mt-4'>
                <img src='https://www.ktmindia.com/ktm-bikes/naked-bike/-/media/Images/ktm/ktm-bikes/gallery-section/duke-200/g/4.webp'/>
            </div>
        </div>
    </div>
</section>
<section id='qa'>
    <h1>Frequently Asked Questions</h1>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-5'>
                <img src='https://cdn.bajajauto.com/-/media/ktm/ktm-faq/new/ktm-bike-angle-5pm_200-duke-orange.webp'/>
            </div>
            <div className='col-lg-7 mt-5'>
                <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What are the colours options available for KTM 200 DUKE?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Electronic Orange And Dark Galvano
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What is the max power of KTM 200 DUKE?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        18.4 kW (25 PS) @ 10000 rpm
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What is fuel tank capacity of KTM 200 DUKE?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        13.5 L
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
        What is the Ex-showroom price of KTM 200 DUKE?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Ex-showroom Price (Delhi) for KTM 200 DUKE is ₹ 1 91 324/-*
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        What is the engine capacity of KTM 200 DUKE and power figures?
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        KTM 200 DUKE is powered by 199.5 cc engine generating 18.4 kW (25 PS) @ 10000 rpm
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        What is the torque figure of KTM 200 DUKE?
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        KTM 200 DUKE generates 19.3 Nm Torque @ 8000 rpm
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    </div>
</section>
<Footer/>
    </div>
  )
}
export default Models
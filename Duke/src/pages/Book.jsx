import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import Footer from '../Main/Footer'
import './book.css'

const Book = () => {
  const { id } = useParams()

  const [bike, setBikedata] = useState({
    username: "",
    image: "",
    price: "",
    engine: "",
    power: "",
    torque: "",
    des1: "",
    des2: "",
    des3: "",
    des4: "",
    des5: ""
  })

  useEffect(() => {
    fetch(`http://localhost:3229/getKTM/${id}`)
      .then(res => res.json())
      .then(data => {
        setBikedata(data)
      })
  }, [id])

  return (
    <>
      <section id="top"></section>

      <section id="poster">
        <div className="container-fluid">
          <div className="row" key={bike._id}>

            <div className="col-lg-8">
              <div className="cont">
                <div className="titlet">
                  <h3>{bike.username}</h3>
                </div>
                <img className="KTMBike" src={bike.image} alt="KTM Bike" />
              </div>
            </div>

            <div className="col-lg-4 Side">
              <div className="specfi">
                <h2><b>PURE FACTS</b></h2>
              </div>

              <div className="sp">
                <h6>{bike.des1}</h6>
                <h6>{bike.des2}</h6>
                <h6>{bike.des3}</h6>
                <h6>{bike.des4}</h6>
                <h6>{bike.des5}</h6>
              </div>

              <div className="row">
                <div className="col-lg-5 booking">
                  <div className="price">
                    <h6>Ex-Showroom Price*</h6>
                  </div>
                  <div className="rate">₹ {bike.price} /-</div>
                  <div className="location">
                    <h6>Delhi</h6>
                  </div>
                </div>
                <div className="col-lg-5 bookings">
                  <Link to={`/Form/${id}`}className="btn10">BOOK NOW @ ₹1999</Link>
                  <div className="obj">Fully Refundable</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Book

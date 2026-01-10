import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Footer from '../Main/Footer';
import './form.css';

const Form = () => {
  const { id } = useParams();

  const [bike, setBikedata] = useState({
    username: "",
    image: "",
    price: ""
  });
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [dealer, setDealer] = useState("");

  const dealersByCity = {
    Chennai: ["KTM Anna Nagar", "KTM OMR", "KTM Velachery"],
    Coimbatore: ["KTM Avinashi Road", "KTM Gandhipuram"],
    Madurai: ["KTM KK Nagar"],
    Bengaluru: ["KTM Whitefield", "KTM Indiranagar"],
    Kochi: ["KTM Edappally"]
  };

  useEffect(() => {
    fetch(`http://localhost:3229/getKTM/${id}`) .then(res => res.json()) .then(data => setBikedata(data)); }, [id]);

  const isFormValid =
    name.trim() &&
    mobile.trim() &&
    city.trim() &&
    dealer.trim();

  return (
    <>
      <section id='top'></section>

      <div className='container-fluid'>
        <div className='row'>

          <div className='col-lg-8'>
            <div className='cont'>
              <div className='titlet'>
                <h3>{bike.username}</h3>
              </div>
              <img className="KTMBike" src={bike.image} alt="KTM Bike" />
            </div>
          </div>

          <div className='col-lg-4'>
            <div className='title'>FILL YOUR DETAILS BELOW</div>

            <form className='sheet'>

              <label>Name <span style={{ color: "red" }}>*</span></label>
              <input type="text" className='form-control w-100' placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
              <label>Mobile number <span style={{ color: "red" }}>*</span></label>
              <input type="number" className='form-control w-100' placeholder="Enter mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
              <label>Location (City) <span style={{ color: "red" }}>*</span></label>
              <select className="select2 form-control w-100" value={city} onChange={(e) => {
                setCity(e.target.value);
                setDealer("");
              }}
              >
                <option value="">Select City</option>
                {Object.keys(dealersByCity).map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              <label>Dealer <span style={{ color: "red" }}>*</span></label>
              <select
                className="select2 form-control w-100"
                value={dealer}
                onChange={(e) => setDealer(e.target.value)}
                disabled={!city}
              >
                <option value="">
                  {city ? "Select Dealer" : "Select city first"}
                </option>
                {city &&
                  dealersByCity[city].map((d, index) => (
                    <option key={index} value={d}>{d}</option>
                  ))
                }
              </select>
              <button
                type="button"
                className="btn2"
                disabled={!isFormValid}
                style={{
                  opacity: isFormValid ? 1 : 0.5,
                  cursor: isFormValid ? "pointer" : "not-allowed"
                }}
              >
                VERIFY AND PAY
              </button>
              <div className='con'> By clicking on Verify and Pay, you agree to our T&C and Privacy Policy </div>
    </form>
  </div>
</div>
</div>

      <Footer />
    </>
  );
};

export default Form;
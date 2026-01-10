import React, { useRef } from "react";
import "./locate.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiCompass } from "react-icons/fi";
import Footer from "../Main/Footer";

const dealers = [
  { id: 1, name: "KTM@ COIMBATORE", 
    address: "Mettupalayam Road" 
  },
  { id: 2, name: "KTM@ COIMBATORE", 
    address: "Sungam Bypass" 
  },
  { id: 3,
    name: "KTM@ COIMBATORE",
    address: "Avinashi Road",
  },
  { id: 4, name: "KTM@ COIMBATORE", 
    address: "Ganapathy" 
  },
];
const Locate = () => {
  const iframeRef = useRef(null);
  return (
    <>
      <section id="banner1">
        <div className="container map"><h2>.</h2></div>
          
          <div className="dealer-container">

      <h2 className="dealer-title">LOCATE A DEALER</h2>

      <div className="input-box">
        <label className="label">LOCATION <span>*</span></label>

        <div className="location-wrapper">
          <div className="input-icon">
            <FaMapMarkerAlt size={18} />
          </div>

          <input type="text"placeholder="Coimbatore" className="location-input"/>

          <button className="detect-btn">
            <FiCompass size={18} />
            DETECT
          </button>
        </div>
      </div>

    </div>
        
      </section>
      <div className="map-page">
        <aside className="sidebar">
          <h3 className="count">14 DEALERS FOUND</h3>
          <div className="list">
            {dealers.map((d) => (
              <div key={d.id} className="card">
                <div className="card-head">
                  <h4>{d.name}</h4>
                </div>
                <p className="addr">{d.address}</p>
                <button className="view">VIEW CONTACT</button>
              </div>
            ))}
          </div>
        </aside>
        <main className="map-area">
          <iframe
            ref={iframeRef}
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d31331.288025992835!2d76.9638634!3d11.007758!3m2!1i1024!2i768!4f13.1!2m1!1sktm%20coimbatore!5e0!3m2!1sen!2sin!4v1763549036424!5m2!1sen!2sin"
            style={{ width: "100%", height: "100%", border: 0, marginLeft: "10px" }}
            allowFullScreen
            loading="lazy"
          />
        </main>
      </div>
      <Footer/>
    </>
  );
};

export default Locate;

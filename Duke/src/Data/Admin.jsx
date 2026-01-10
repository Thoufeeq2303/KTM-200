import React from 'react'
import {Link} from 'react-router-dom'
import './admin.css'

const Admin = () => {
  return (
    <>
    <div className='Nav'></div>
    <div className='admin'>
      <Link to='/admin'><h2>Dashboard</h2></Link>
      <Link to='/Naked'><h2>Naked Bike</h2></Link>
      <Link to='/Super'><h2>Super Sport</h2></Link>
      <Link to='/Travel'><h2>Travel</h2></Link>
      <Link to='/Moto'><h2>Motocross</h2></Link>
      <Link to='/Enduro'><h2>Enduro</h2></Link>
    </div>
      {/* <div className='content'>
        <h2>HISTORY OF KTM</h2>
        <h5>KTM's history began in 1934 with Hans Trunkenpolz's repair shop in Mattighofen, Austria, evolving from car/bike repairs to producing motorcycles, marked by bankruptcy in the early 90s, major growth with Bajaj Auto partnership in 2007, and expanding to own Husqvarna & GasGas, becoming a global leader known for its "Ready to Race" off-road and street bikes, identifiable by its signature orange color.</h5><br></br>
        <h5>2023 represented the 70th anniversary of ‘Kronreif & Trunkenpolz Mattighofen’ and the registration of ‘KTM’ as a company. The genesis of the firm came about almost twenty years earlier. In 1934 Hans Trunkenpolz opened a fitter’s shop located in the guest house ‘Zum Schwarzen Adler’ in the small Upper Austrian town of Mattighofen, that principally dealt with the maintenance of motorcycles and cars. Within two years, Trunkenpolz was certified as a machinist and for motor vehicle servicing. Pre-WWII his set-up became one of the biggest repair workshops throughout the region although for legal reasons the company was known as ‘Moser & Co.’ from 1948 to 1953.</h5><br></br>
        <h5>Post-war and into the 1950s the number of repair orders declined. Trunkenpolz was forced to operate in industrial spare part production and was constantly looking for new fields of activity. At that time, a commitment to motorcycle fabrication seemed to be promising as mobility was considerably limited, and cost-effective means of transportation was highly sought after.</h5>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQBxk8pV51OFOUwbGn7HkcATSpMBiWejgwtw&s' alt='bike'/>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKemQG1_DQq2P9MpO_KRQFAFVJWFkZEaA9Q&s' alt='bike'/>
      </div> */}
      </>
  )
}

export default Admin


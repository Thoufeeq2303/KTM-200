import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './naked.css'
import Admin from './Admin'
import File from './File'

const Naked = () => {

  const[bikedata, setBikedata] = useState([])

  useEffect(() => {
  fetch("http://localhost:3229/getKTMByCategory?category=MotoBike")
    .then(res => res.json())
    .then(data => setBikedata(data));
}, []);


  const deletedata = (id) =>{
    fetch(`http://localhost:3229/getKTM/${id}`, {
      method:"DELETE",
    }).then((res)=>res.json()).then((data)=> {confirm("data deleted")
      setBikedata((prevData)=>prevData.filter((bike)=>bike._id != id))
    })
  }


  return (
   <>
   <section>
        <Admin/>
        <section className='tb'>
           <Link to='/file'><h2><button className='btn mt-4 mb-4 red'>ADD +</button></h2></Link>
        <table className='table'>
          <thead>
            <th>NAME</th>
            <th>IMAGE</th>
            <th>PRICE</th>
            <th>ENGINE CAPACITY</th>
            <th>MAX POWER</th>
            <th>MAX TORQUE</th>
            <th>ACTION</th>
          </thead>
          <tbody>
            {
              bikedata.map((bike)=>(
                <tr key={bike._id}>
                  <td>{bike.username}</td>
                  <td><img src={bike.image} width={100}></img></td>
                  <td>{bike.price}</td>
                  <td>{bike.engine}</td>
                  <td>{bike.power}</td>
                  <td>{bike.torque}</td>
                  <td><Link to={`/edit/${bike._id}`}><button className='btn btn-success'>EDIT</button></Link> <button className='btn btn-danger' onClick={()=>deletedata(bike._id)}>DELETE</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        </section>
      </section>
   </>
  )
}

export default Naked

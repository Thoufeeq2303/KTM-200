import React, { use, useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import './edit.css'
import Admin from './Admin'
import { toast } from 'react-toastify';

const Edit = () => {
  const id = useParams().id
  const[editData, setEditData] = useState({
    username:"",
    image:"",
    price:"",
    engine:"",
    power:"",
    torque:""
  })

  useEffect(()=>{
    fetch(`http://localhost:3229/getKTM/${id}`).then((res)=>res.json()).then((data)=>{
      setEditData(data)
    })
  })

  const handleSubmit = (e)=>{
    e.preventDefault()
    const form = e.target
    const username = form.username.value
    const image = form.image.value
    const price = form.price.value
    const engine = form.engine.value
    const power = form.power.value
    const torque = form.torque.value
    const quantity = 1

    if(username === "" || image==="" || price==="" || engine===""|| power===""|| torque===""){
      alert("Please fill all the feilds")
      return
    }

    const obj1 = {
      username,
      image,
      price,
      engine,
      power,
      torque
    }
    console.log(obj1)

    fetch(`http://localhost:3229/updateKTM/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(obj1)
    }).then((res)=>res.json())
    .then((data)=>{alert("data Updated successfully")
    form.reset()
    window.location.href="/Naked"
  })
  
  }
  return (
    <>
    <section className='Full'>
        <Admin/>
       <div className='Form mt-5'>
        <h2>DUKE BIKE FORM</h2>
        <div className='Sheet'>
          <form onSubmit={handleSubmit}>
        <label value="username">NAME</label>
        <input type="text" placeholder="Name" className='form-control w-50' name='username' id='username' defaultValue={editData.username}/><br/>
         
        <label value="image">IMAGE</label>
        <input type="text" placeholder="Image" className='form-control w-50' name='image' id='image' defaultValue={editData.image}/><br/>
        <label value="price">PRICE</label>
        <input type="text" placeholder='Price' className='form-control w-50' name='price' id='price' defaultValue={editData.price}/><br/>
        <label value="engine">ENGINE CAPACITY</label>
        <input type="text" placeholder='CC' className='form-control w-50' name='engine' id='engine' defaultValue={editData.engine}/><br/>
        <label value="power">MAX POWER</label>
        <input type="text" placeholder='PS' className='form-control w-50' name='power' id='power' defaultValue={editData.power}/><br/>
        <label value="torque">MAX TORQUE</label>
        <input type="text" placeholder='NM' className='form-control w-50' name='torque' id='torque' defaultValue={editData.torque}/><br/>
        <button className='btn0' type="submit">SUBMIT</button>
        </form>
        </div>
       </div>
    </section>
    <div className='blank'></div>
    </>
  )
}

export default Edit

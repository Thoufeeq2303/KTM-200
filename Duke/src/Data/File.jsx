import React, { use } from 'react'
import {Link} from 'react-router-dom'
import './file.css'
import Admin from './Admin'
import { toast } from 'react-toastify';

const File = () => {
  const handleSubmit = (e)=>{
    e.preventDefault()
    const form = e.target
    const username = form.username.value
    const image = form.image.value
    const price = form.price.value
    const engine = form.engine.value
    const power = form.power.value
    const torque = form.torque.value
    const des1 = form.des1.value
    const des2 = form.des2.value
    const des3 = form.des3.value
    const des4 = form.des4.value
    const des5 = form.des5.value
    const quantity = 1

    if(username === "" || image==="" || price==="" || engine===""|| power===""|| torque===""|| des1===""|| des2===""|| des3===""|| des4===""|| des5===""){
      alert("Please fill all the feilds")
      return
    }

    const obj1 = {
      username,
      image,
      price,
      engine,
      power,
      torque,
      des1,
      des2,
      des3,
      des4,
      des5
    }
    // console.log(obj1)

    fetch("http://localhost:3229/uploadbikedata",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(obj1)
    }).then((res)=>res.json())
    .then((data)=>{alert("data uploaded successfully")
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
        <label>NAME</label>
        <input type="text" placeholder="Name" className='form-control w-50' name='username' id='username'/><br/>
        <label>IMAGE</label>
        <input type="text" placeholder="Image" className='form-control w-50' name='image' id='image'/><br/>
        <label>PRICE</label>
        <input type="text" placeholder='Price' className='form-control w-50' name='price' id='price'/><br/>
        <label>ENGINE CAPACITY</label>
        <input type="text" placeholder='CC' className='form-control w-50' name='engine' id='engine'/><br/>
        <label>MAX POWER</label>
        <input type="text" placeholder='PS' className='form-control w-50' name='power' id='power'/><br/>
        <label>MAX TORQUE</label>
        <input type="text" placeholder='NM' className='form-control w-50' name='torque' id='torque'/><br/>
        <label>Description1</label>
        <input type="text" placeholder='Description1' className='form-control w-50' name='des1' id='des1'/><br/>
        <label>Description2</label>
        <input type="text" placeholder='Description2' className='form-control w-50' name='des2' id='des2'/><br/>
        <label>Description3</label>
        <input type="text" placeholder='Description3' className='form-control w-50' name='des3' id='des3'/><br/>
        <label>Description4</label>
        <input type="text" placeholder='Description4' className='form-control w-50' name='des4' id='des4'/><br/>
        <label>Description5</label>
        <input type="text" placeholder='Description5' className='form-control w-50' name='des5' id='des5'/><br/>
        <button className='btn0' type="submit">SUBMIT</button>
        </form>
        </div>
       </div>
    </section>
    </>
  )
}

export default File
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './Main/Nav'
import Footer from './Main/Footer'
import Models from "./pages/Models"
import Locate from "./pages/Locate"
import Service from "./pages/Service"
import Blog from "./pages/Blog"
import Associate from "./pages/Associate"
import Collect from "./pages/Collect"
import Admin from './Data/Admin'
import Naked from './Data/Naked'
import Travel from './Data/Travel'
import Enduro from './Data/Enduro'
import Moto from './Data/Moto'
import Super from './Data/Super'
import File from './Data/File'
import Login from './Data/Login'
import Edit from './Data/Edit'
import Book from './pages/Book'
import Form from './pages/Form'

function App(){
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Models/>}/>
        <Route path="/locate" element={<Locate/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/associate" element={<Associate/>}/>
        <Route path='/collect' element={<Collect/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/naked' element={<Naked/>}/>
        <Route path='/super' element={<Super/>}/>
        <Route path='/travel' element={<Travel/>}/>
        <Route path='/moto' element={<Moto/>}/>
        <Route path='/enduro' element={<Enduro/>}/>
        <Route path='/file' element={<File/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/edit' element={<Edit/>} />
        <Route path='/Book' element={<Book/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path="/Book/:id" element={<Book />}/>
         <Route path="/Form/:id" element={<Form />} />
        <Route path='/edit/:id' element={<Edit/>} loader={(params)=>fetch(`http://localhost:3229/getKTM/${params.id}`)}/>

      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
      
    </div>
  )
}

export default App

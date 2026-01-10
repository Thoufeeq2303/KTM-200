import React, { useState } from 'react'
import { IoPersonCircleOutline } from "react-icons/io5";
import { PiDotsNineFill } from "react-icons/pi";
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('naked')
  const data = {
  naked: [
    {
      name: 'KTM 1390 SUPER DUKE R',
      img: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/model-images-2024/2024-ktm-1390-super-duke.webp'
    },
    {
      name: 'KTM 890 DUKE R',
      img: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/model-images-2024/2023-ktm-890-duke-r.webp'
    },
    {
      name: 'KTM 390 DUKE',
      img: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/model-images-2024/ktm-390.webp'
    },
    {
      name: 'KTM 250 DUKE',
      img: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/model-images-2024/ktm-250-duke-new.webp'
    },
    {
      name: 'KTM 200 DUKE',
      img: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/model-images-2024/ktm-200.webp'
    },
    {
      name: 'KTM 160 DUKE',
      img: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-160-duke/pdp/ktm-160-duke_nevigation-panel_185-x-120_1.webp'
    },{
      name: 'KTM 160 DUKE TFT',
      img: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-160-duke/pdp/ktm-160-duke_nevigation-panel_185-x-120_1.webp'
    }
  ],
  supersport: [
    {
      name: 'KTM RC 390',
      img: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/bikes-images/dropdown/dropdown-webp/ktm-rc-390-new.webp'
    },
    {
      name: 'KTM RC 200',
      img: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/bikes-images/dropdown/dropdown-webp/rc-200.webp'
    },
    {
      name: 'KTM RC 160',
      img:  'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/supersport/ktm-rc-160/model-drop-down-image.webp'
    }
  ],
  travel: [
    {
      name: 'KTM 1290 SUPER ADVENTURE S',
      img: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/webp-new/2024-ktm-1290-super-adventure-s.webp'
    },
    {
      name: 'KTM 890 SUPER ADVENTURE R',
      img: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/naked-bike/webp-new/2024-ktm-890-adventure-r.webp'
    },
    {
      name: 'KTM 390 SUPER ADVENTURE X',
      img: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/travel/2025-ktm-390-adv-x/others/2025-390-adventure-x-model.webp'
    },
    {
      name: 'KTM 390 SUPER ADVENTURE',
      img: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/travel/2025-ktm-390-adv/others/2025-390-adventure-model.webp'
    },
    {
      name: 'KTM 250 ADVENTURE',
      img: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/travel/2025-ktm-250-adv/others/2025-250-adventure-model.webp'
    }
  ],
  motocross: [
    {
      name: 'KTM 450 SX-F',
      img: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/motocross/2024-ktm-450-sx-f.webp'
    },
    {
      name: 'KTM 350 EXC-F SIX DAYS',
      img: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/enduro/2024-ktm-350-exc-f-six-days.webp'
    },
    {
      name: 'KTM 250 SX-F',
      img: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/motocross/2024-ktm-250-sx-f.webp'
    },
    {
      name: 'KTM 85 SX',
      img: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/motocross/2024-ktm-85-sx-19-16.webp'
    },
    {
      name: 'KTM 65 SX',
      img: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/motocross/2024-ktm-65-sx.webp'
    }
  ],
  enduro: [
    {
      name: 'KTM 390 ENDURO R',
      img: 'https://cdn.bajajauto.com/-/media/images/ktm/ktm-big-bikes/2025-ktm-enduro-390-r/nav-img/ktm-390-enduro-navigation.webp'
    },
  ]
}
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src="https://cdn.bajajauto.com/-/media/images/ktm-logo-webp.webp" alt="ktm"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className="nav-item mega-parent"
                onClick={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <a className="nav-link" href="#!">MODELS</a>
                {open && (
                  <div className="mega-menu">
                    <div className="left-menu">
                      <p
                        className={active === 'naked' ? 'active' : ''}
                        onMouseEnter={() => setActive('naked')}>
                        NAKED BIKE
                      </p>
                      <p
                        className={active === 'supersport' ? 'active' : ''}
                        onMouseEnter={() => setActive('supersport')}>
                        SUPERSPORT
                      </p>
                      <p
                        className={active === 'travel' ? 'active' : ''}
                        onMouseEnter={() => setActive('travel')}>
                        TRAVEL
                      </p>
                      <p
                        className={active === 'motocross' ? 'active' : ''}
                        onMouseEnter={() => setActive('motocross')}>
                        MOTOCROSS
                      </p>
                      <p
                        className={active === 'enduro' ? 'active' : ''}
                        onMouseEnter={() => setActive('enduro')}>
                        ENDURO
                      </p>
                    </div>
                    <div className="right-menu">
  {data[active].map((bike) => (
    <div className="bike-card" key={bike.name}>
      <img src={bike.img} alt={bike.name} className="bike-img" />
      <div className="bike-name">{bike.name}</div>
    </div>
  ))}
</div>
   </div>
                )}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">KTM PRO-XP</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">KTM APP</a>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/locate">LOCATE US</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/associate">ASSOCIATIONS</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/collect">BIKE COLLECTIONS</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/blog">KTM BLOGS</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/service">KTM SERVICE</Link>
              </li>
            </ul>
            <ul className='navbar-nav'>
            <li className="nav-item-sym">
                <Link className='nav-link' to="/admin"><PiDotsNineFill  /></Link>
              </li>
            <li className="nav-item-sym">
                <Link className='nav-link' to="/login"><IoPersonCircleOutline /></Link>
              </li>
              </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
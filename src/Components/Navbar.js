import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <ul className={`nav bg-${props.mode} `}>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">{props.title}</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/about">About us</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled">Disabled</a>
  </li>
<li className={` nav-item form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.tooglemode} />
  <label className="form-check-label" for="flexSwitchCheckDefault">enable dark mode</label>
</li>
<li className={` text-${props.mode==='light'?'dark':'light'}`}> jdgfkg</li>
<li className='hello' style= {{ backgroundcolor : props.mode==='light'?'dark':'light' }}>hello</li>
</ul>

    </>
  )
}
Navbar.prototype ={
   title: PropTypes.string,
}
Navbar.deafultprops ={
  title : "hsjd"
}




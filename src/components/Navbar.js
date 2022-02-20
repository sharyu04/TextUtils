import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  
  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.Home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      
      <div className="btn-group mx-3" role="group" aria-label="Basic mixed styles example" style={{height:32}}>
        <button type="button" className="btn btn-dark border-light" onClick={props.darkModeColor} style={{lineHeight: 0.5, cursor:'pointer'}}>Black</button>
        <button type="button" className="btn btn-primary border-light" onClick={props.darkModeColor2} style={{lineHeight: 0.5, cursor:'pointer'}}>Blue</button>
        <button type="button" className="btn btn-success border-light" onClick={props.darkModeColor3} style={{lineHeight: 0.5, cursor:'pointer'}}>Green</button>
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable Darkmode':'Disable Darkmode'}</label>
      </div>
    </div>
  </div>
</nav>
  )
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  Home: PropTypes.string
}
Navbar.defaultProps ={
  title: "Enter title here",
  Home: "Home"
}
import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-body-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav me-auto mb-2 mb-lg-0"></div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
                    <label className={`form-check-label text-${props.mode === 'light'? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div>

            </div>
        </div>
    </nav>
  )
}

Navbar.propTypes={
    title:PropTypes.string
}



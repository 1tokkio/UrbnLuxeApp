import React from 'react'

function Navbar(){
  return (
    <>
    {}
    <div className="nav w-100 fixed-top bg-white shadow-sm">Navbar</div>
        <nav className="navbar-expand-lg py-3 justify-contant-between align-items-center w-100 nav-wrapper">
            {}
            <button 
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {}
            <a href="#" className='navbar-brand mx-auto order-0 d-lg-none d-flex'>
                <h2 className='m-0 fw-bold' style={{letterSpacing:'2px'}}></h2>
            </a>
        </nav>
    </>
 )
}

import React from 'react'
import logo from '../img/logo-mahad.jpg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <nav className='navbar bg-secondary navbar-dark text-light navbar-expand-lg fixed-top'>
            <a href='#' className='navbar-brand'>
                <img src={logo} alt='' width='90px'  className='mr-3'/> 
                    Ma'had-al-Suffah (SA)
                      </a>

    {/* button with humburger */}
            <button className='navbar-toggler' data-toggle='collapse' data-target='#navbarCollapse'>
                <span className='navbar-toggler-icon'></span>
            </button>

{/* links collapse on small screen */}
            <div className='collapse navbar-collapse' id='navbarCollapse'>
                <ul className='navbar-nav ml-auto'>
                    <li className='navbar-item'>
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>

                    <li className='navbar-item'>
                        <Link to='/About' className='nav-link'>About</Link>
                    </li>

                    <li className='navbar-item'>
                        <Link to='/Projects' className='nav-link'>Projects</Link>
                    </li>

                    <li className='navbar-item'>
                        <Link to='/School' className='nav-link'>School</Link>
                    </li>

                    <li className='navbar-item'>
                        <Link to='/Sermons' className='nav-link'>Sermons</Link>
                    </li>

                    <li className='navbar-item'>
                        <Link to='/Courses' className='nav-link'>Courses</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

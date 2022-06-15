import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router } from 'react-router-dom'
import Page from './Page'
import { Routes, Route, Link } from "react-router-dom";
const Midnav = () => {
  return (

    <div className='Container'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
 
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
      <Link className='nav-link' to="/Page">ALL</Link>
      </li>
      <li class="nav-item">
      <Link className='nav-link' to="/Page">LIVE</Link>
      </li>
      <li class="nav-item">
      <Link className='nav-link' to="/Page">DRAFT</Link>
      </li>
      <li class="nav-item">
      <Link className='nav-link' to="/Page">ARCHIVED</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Select team
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Midnav;
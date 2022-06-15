import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">KNOWLEDGE</span>
         <div id='nav1'>
         <li><button type="button" class="btn btn-primary" id='navbtn'>CREATE COURSE</button></li>
         <li> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYc_hyGzFzrgwOcwpu_jAhjaRABxpN4GyI1w&usqp=CAU" class="rounded" alt="..." height={"40px"} width={"40px"}/></li>
          <li><a><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a></li>
         </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
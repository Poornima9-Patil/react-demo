import React from 'react'
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <h4>Remote SalesFuel</h4>
    <ul id='ul1'>
    <li><Link className='sidelink' to=""><i class="fa fa-home light" aria-hidden="true"></i>&nbsp;DASHBOARD</Link></li>
    <li><Link className='sidelink' to=""><i class="fa fa-graduation-cap" aria-hidden="true"></i>&nbsp;KNOWLEDGE</Link></li>
    <li><Link className='sidelink' to=""><i class="fa fa-users" aria-hidden="true"></i>&nbsp;MEMBERS</Link></li>
    <li><Link className='sidelink' to=""><i class="fa fa-desktop" aria-hidden="true"></i>&nbsp;TEAMS</Link></li>
    <li><Link className='sidelink' to=""><i class="fa fa-folder-o" aria-hidden="true"></i>&nbsp;VAULT</Link></li>
    <li><Link className='sidelink' to=""><i class="fa fa-comment-o" aria-hidden="true"></i>&nbsp;CHAT</Link></li>
    </ul>

    <ul id='ul2'>
   <li><Link className='sidelink' to=""><i class="fa fa-cog" aria-hidden="true"></i>&nbsp;SETTING</Link></li>
   <li><Link className='sidelink' to=""><i class="fa fa-building-o" aria-hidden="true"></i>&nbsp;COMPANY</Link></li>
    <li><Link className='sidelink' to=""><i class="fa fa-user-circle-o" aria-hidden="true"></i>&nbsp;MY PROFILE</Link></li>
    </ul>
    </div>
  )
}

export default Sidebar;
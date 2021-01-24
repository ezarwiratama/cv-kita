import React from 'react'
import '../components/styling/navbar.css'

function Navbar  () {
  return (
<nav class="nav">
    <div>
        <h4 class="logo">Tiga33</h4>
    </div>
    <ul class="ul">
            <li className="ul a"><a href="">Home</a></li>
            <li className="ul a"><a href="">Project</a></li>
            <li className="ul a"><a href="">Gallery</a></li>
            <li className="ul a"><a href="">About</a></li>
    </ul> 
</nav>
    
  )
}

export default Navbar
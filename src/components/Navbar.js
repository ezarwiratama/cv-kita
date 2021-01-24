import React from 'react'
import '../components/styling/navbar.css'

function Navbar  () {
  return (
<nav class="nav">
    <div>
        <h4 class="logo">Tiga33</h4>
    </div>
    <ul class="ul">
            <li className="ul a"><p>Home</p></li>
            <li className="ul a"><p>Project</p></li>
            <li className="ul a"><p>Gallery</p></li>
            <li className="ul a"><p>About</p></li>
    </ul> 
</nav>
    
  )
}

export default Navbar
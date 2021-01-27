import React from 'react'
import './styling/fototim.css'
import fotoezar from './tempatfoto/1.jpg'
import fototedy from './tempatfoto/2.jpg'
import fotohandis from './tempatfoto/3.jpg'

const Foto = () => {
  return (
<body>  
  <h1 className="sub-title">Our Team</h1>
  <div className="cards">
    <div className="services">
      <div className="card">
        <div className="fototim">
            <img className="fototim" src={fotoezar}alt='ezar'/>
        </div>
        <div>
            <h2>Ezar Wiratama</h2>
            <p>CEO,Founder</p>
            <p>Oxford University</p>
            <div className="sosmed-pribadi">
            <a href="//#region"><span className="fab fa-facebook-f"></span></a>
            <a href="//#region"><span className="fab fa-twitter"></span></a>
            <a href="//#region"><span className="fab fa-instagram"></span></a>
            <a href="//#region"><span className="fab fa-whatsapp"></span></a>
            <a href="//#region"><span className="fab fa-github"></span></a>
            </div>
        </div>
        <button>Contact</button>
      </div>

      <div className="card">
        <div >
            <img className="fototim" src={fototedy}alt='tedy'/>
        </div>
        <div>
            <h2>Tedy Hartono</h2>
            <p>CEO,Founder</p>
            <p>Oxford University</p>
            <div className="sosmed-pribadi">
            <a href="//#region"><span className="fab fa-facebook-f"></span></a>
            <a href="//#region"><span className="fab fa-twitter"></span></a>
            <a href="//#region"><span className="fab fa-instagram"></span></a>
            <a href="//#region"><span className="fab fa-whatsapp"></span></a>
            <a href="//#region"><span className="fab fa-github"></span></a>
            </div>
        </div>
        <button>Contact</button>
      </div>

      <div className="card">
        <div>
            <img className="fototim" src={fotohandis}alt='handis'/>
        </div>
        <div>
            <h2>Handistira Rifat</h2>
            <p>CEO,Founder</p>
            <p>Oxford University</p>
            <div className="sosmed-pribadi">
            <a href="//#region"><span className="fab fa-facebook-f"></span></a>
            <a href="//#region"><span className="fab fa-twitter"></span></a>
            <a href="//#region"><span className="fab fa-instagram"></span></a>
            <a href="//#region"><span className="fab fa-whatsapp"></span></a>
            <a href="//#region"><span className="fab fa-github"></span></a>
            </div>
        </div>
        <button>Contact</button>
      </div>
      
    </div>
  </div>
</body>  
  )
}

export default Foto


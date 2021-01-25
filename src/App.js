import './App.css';
import Header from './components/Header'
import Isi from './components/Isi'
import Foto from './components/Foto'
import Newproject from './components/Newproject'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

// icon
import ICFacebook from './icon/045-facebook.svg'
import ICTwitter from './icon/013-twitter-1.svg'
import ICWhatsapp from './icon/007-whatsapp.svg'
import ICInstagram from './icon/034-instagram.svg'
import ICGithub from './icon/039-github.svg'

export {ICFacebook,ICTwitter,ICWhatsapp,ICInstagram,ICGithub}



function App() {
  return (
    <>
      <navigator>
        <Navbar/>
      </navigator>
      <header> 
        <Header/>
      </header> 
      <div>
        <p><Isi/></p>
      </div>
      <div>
        <Foto/>
     </div>
     <div>
        <Newproject/>
     </div>
     <div>
        <Footer/>
     </div>
    </>
  
    ) 
  }


export default App;

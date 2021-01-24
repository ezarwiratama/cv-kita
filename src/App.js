import './App.css';
import Header from './components/Header'
import Isi from './components/Isi'
import Foto from './components/Foto'
import Newproject from './components/Newproject'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';


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

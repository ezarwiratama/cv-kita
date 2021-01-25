import React from 'react'
import { ICFacebook, ICGithub, ICInstagram, ICTwitter, ICWhatsapp } from '../App'
import '../components/styling/footer.css'


const Icon =({img}) => {
    return (
        <div>
          <img src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
  return (
    <footer>
          <div className="content-social">
            <div className="social">
                <Icon img={ICFacebook} />
                <Icon img={ICTwitter} />
                <Icon img={ICInstagram} />
                <Icon img={ICWhatsapp} />
                <Icon img={ICGithub} />
            </div>
          </div>



          <div className="footer-mid">
            <div className="main-content">
                <div className="left-box">
                    <h2>About us</h2>
                    <div className="content">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>

                <div className="center-box">
                    <h2>Address</h2>
                    <div className="content">
                        <div className="place">
                            <i className='fas fa-map-marker-alt'></i>
                            <span>Cilacap,Jawa Tengah</span>
                        </div>
                        <div className="phone">
                            <i className='fas fa-phone-alt'></i>
                            <span>+62 88220216434</span>
                        </div>
                        <div className="email">
                            <i className='fas fa-envelope'></i>
                            <span>abc@example.com</span>
                        </div>
                    </div>
                </div>
                <div className="right-box">
                  <h2>Contact Us</h2>
                  <div className="content">
                  <form action="#">
                      <div className="email">
                        <div className="text-msg">Email *</div>
                        <input type="email" required></input>
                      </div>
                      <div className="msg">
                        <div className="text-msg">Message *</div>
                        <textarea rows="2" cols="25" required></textarea>
                      </div>
                      <div className="btn">
                          <button type="submit">Send</button>
                      </div>
                  </form>
                </div>
                </div>
            </div>
          </div>
          <div className="copyright">
            <p className="copyright-p">Created By Tiga33 | © 2021 All rights reserved</p>
          </div>
    </footer>
  )
}
export default Footer

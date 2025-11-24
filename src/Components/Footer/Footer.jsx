import React from 'react'
import './Footer.css'
import FooterLogo2 from '../../assets/img/FooterLogo2.png'
import { FaAngleRight, FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow, FaPhoneVolume, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from 'react-icons/fa6';
const Footer = () => {
  return (
    <div>
       <footer>
          <div class="footer-container">
              <div class="footer-column">
                  <div class="logo">
                      <img src={FooterLogo2} alt=""/><h2>Alberto</h2>
                  </div>
                  <p>Subscribe to our newsletter to get updates on
                    our latest offers!</p>
                  <div class="email-form">
                      <input type="email" placeholder="Email Address"/>
                      <button><i class="fa-solid fa-arrow-right"></i></button>
                  </div>
                  <div class="social-icons">
                      <a href="#"><FaFacebook/></a>
                      <a href="#"><FaWhatsapp/></a>
                      <a href="#"><FaTwitter/></a>
                      <a href="#"><FaInstagram/></a>
                  </div>
              </div>
  
              <div class="footer-column">
                  <h3>Links</h3>
                  <ul>
                      <a href="/"><FaAngleRight/> Home</a>
                      <a href="/about"><FaAngleRight/> About us</a>
                      <a href="/products"><FaAngleRight/> Product</a>
                      <a href="/technology"><FaAngleRight/> Technology</a>
                      <a href="/contact"><FaAngleRight/> Contact</a>
                  </ul>
              </div>
  
              <div class="footer-column">
                  <h3>News</h3>
                  <div class="news-item">
                    <img src="https://i.pinimg.com/474x/b9/a3/d7/b9a3d713979b1ff4c11a4b078713a26d.jpg" alt="HomeImages"/>
                      <div class="news-info">
                          <p><strong>Sept 13, 2024</strong></p>
                          <a href="#">How to purchase watches in the forms</a>
                      </div>
                  </div>
                  <div class="news-item">
                    <img src="https://i.pinimg.com/474x/68/7b/a4/687ba457388f85c2c1bd21b3e4f0b49e.jpg" alt="HomeImages"/>
                      <div class="news-info">
                          <p><strong>Sept 13, 2024</strong></p>
                          <a href="#">How to purchase watches in the forms</a>
                      </div>
                  </div>
              </div>
  
              <div class="footer-column">
                <h3>Contact</h3>
                <p class="line"><FaPhoneVolume />  +(787)265-6370</p>
                <hr/>
                <p class="line"><FaEnvelope/> sales@shopalbertopr.com</p>
                <hr/>
                <p class="line"> <FaLocationDot/> Mayaguez and Isabela, Puerto Rico.</p>
              </div>
          </div>
      </footer>
    </div>
  )
}

export default Footer


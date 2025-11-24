import React from 'react'
import './About.css'
import extra1 from '../../assets/img/extra1.webp'
import Samuel1 from '../../assets/img/Samuel1.png'
import Mustapha1 from '../../assets/img/Mustapha1.jfif'
// import Eri2 from '../../assets/img/Eri2.jpg'
import Eri2 from '../../assets/img/Eri2.JPG'
import Fawaz1 from '../../assets/img/Fawaz1.jfif'
import Counter from '../Counter/Counter'
import BackToTop from "../BackToTop/BackToTop";
const About = () => {
  return (
    <div className='eri'>
<div className='about-hero_section'>
 <p> ABOUT US</p>
</div>

      
      <div className="about-us" id="about_id">
  <div className="about-us-text">
    <p className="subheader">HISTORY</p>
    <p className="header">ABOUT US</p>
    <p className="about-us-header">
     We have access to various types of watches ranging from luxrious to smart to vintage.
    </p>

    <p className="about-us-info">
    At Alberto & Co., we believe that a wristwatch is more than just a practical tool – it's an expression of who you are. That’s why we focus on curating designs that cater to both classic tastes and contemporary trends. Our diverse range ensures that you’ll find the perfect piece to suit any occasion
    </p>
    <button className="main-button">FIND MORE</button>
  </div>
  <div className="about-us-img-border">
    <img src={extra1} className="about-us-img" />
  </div>
</div>

<div class="members-section">
        <div class="services-section-textarea projects-section-textarea">
            <p class="services-section-text1">MEMBERS</p>
            <p class="services-section-text2">Our Dedicated Team</p>
            <p class="services-section-text3">For Your Service</p>
            <div class="about-section-span services-section-span"></div>
        </div>
        <div class="members-section-divcards">
            <div class="members-section-divcard1">
                <div class="members-section-divcard1-image"><img src={Samuel1} class="members-section-divcard1-image1"/></div>
                <div class="members-section-divcard1-text">
                    <p>Samuel</p>
                    <p style={{'color': 'rgb(85,37,4)'}}>Sales Manager</p>
                </div>
            </div>

            <div class="members-section-divcard1">
                <div class="members-section-divcard1-image"><img src={Mustapha1} class="members-section-divcard1-image1"/></div>
                <div class="members-section-divcard1-text">
                    <p>Mustapha</p>
                    <p style={{'color': 'rgb(85,37,4)'}}>Product Manager</p>
                </div>
            </div>

            <div class="members-section-divcard1">
                <div class="members-section-divcard1-image"><img src={Fawaz1} class="members-section-divcard1-image1"/></div>
                <div class="members-section-divcard1-text">
                    <p >Fawaz</p>
                    <p style={{'color': 'rgb(85,37,4)'}}>General Manager</p>
                </div>
            </div>

            <div class="members-section-divcard1">
                <div class="members-section-divcard1-image"><img src={Eri2} class="members-section-divcard1-image1"/></div>
                <div class="members-section-divcard1-text">
                    <p>Amole Erioluwa</p>
                  <p style={{'color': 'rgb(85,37,4)'}}>Data Manager</p>
                </div>
            </div>
        </div>
    </div>

    
    <div class="ratings-section">
        <div class="achievements">
        
            <div class="achievements1">
              <Counter/>
              {/* <p class="achievements1-text1 num" data-val="860">000</p>
              <p class="achievements1-text2">Employees</p> */}
            </div>
      
            {/* <div class="achievements1">
              <p class="achievements1-text3">
                <i class="fa fa-star star" aria-hidden="true"></i
                ><i class="fa fa-star star" aria-hidden="true"></i
                ><i class="fa fa-star star" aria-hidden="true"></i
                ><i class="fa fa-star star" aria-hidden="true"></i>
              </p>
              <p class="achievements1-text2 num" data-val="999">000</p>
            </div>
      
            <div class="achievements1">
              <p class="achievements1-text1 num" data-val="1021">000</p>
              <p class="achievements1-text2">Customers Served</p>
            </div>
          </div> */}
    </div>
    </div>
    <BackToTop/>
</div>
    
  )
};

export default About;

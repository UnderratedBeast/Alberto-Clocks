import './Gallery.css'
import BackToTop from '../BackToTop/BackToTop';
import { Link } from "react-router-dom";

function Gallery(){
    return(
        <>
        <div className='gallery-hero_section'>
            <p> GALLERY</p>
        </div>
        <div class="main-gallery-section" id="gallery_id">
 
 {/* <div class="product-section-header">
   <p class="header1">#GALLERY</p>
   <p class="header2">All Available</p>
 </div> */}
<section class="gallery-section">
<div data-aos="fade-up" class="gall-text">
   <h1 className='nunito-header'>Explore Exquisite Timepieces in Our Watch Gallery</h1>
   <p>Victory Timepieces, a gallery of <b>unique and luxurious</b> wristwatches from around the world</p>
   <a href="#" class="explore-btn">Explore Elegant Watch Designs</a>
</div>
<div data-aos="fade-up" class="gall-image">

   <video controls muted loop autoPlay>
       <source src="https://videos.pexels.com/video-files/7033786/7033786-sd_640_360_25fps.mp4"/>
   </video>
</div>
</section>

<div class="slider slider1" style={{
'--width': '100px',
'--height':  '50px',
'--quantity': '10'

}}>
<div class="list">
   <div class="item item1"><img src="https://i.pinimg.com/474x/87/59/1d/87591d75cb7cd15c72b24676ca01508a.jpg" alt="HomeImages"/></div>
   <div class="item item2" ><img src="https://i.pinimg.com/736x/44/1e/5d/441e5d51cb4ec2389d2771689fa26c05.jpg" alt="HomeImages"/></div>
   <div class="item item3" ><img src="https://i.pinimg.com/474x/4e/25/9b/4e259b0130d4eafe44d780341b4fb4da.jpg" alt="HomeImages"/></div>
   <div class="item item4" ><img src="https://i.pinimg.com/474x/af/72/1a/af721a8840c1216f8749c6c80f83fecb.jpg" alt="HomeImages"/></div>
   <div class="item item5" ><img src="https://i.pinimg.com/474x/1e/88/f7/1e88f7999187a5871115b9c5638686bb.jpg" alt="HomeImages"/></div>
   <div class="item item6" ><img src="https://i.pinimg.com/474x/d1/c0/f6/d1c0f6cb30773c23389476c26487ee50.jpg" alt="HomeImages"/></div>
   <div class="item item7" ><img src="https://i.pinimg.com/474x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg" alt="HomeImages"/></div>
   <div class="item item8" ><img src="https://i.pinimg.com/474x/0f/d6/4f/0fd64fb7873595310c23335bf814765e.jpg" alt="HomeImages"/></div>
   <div class="item item9" ><img src="https://i.pinimg.com/474x/de/91/03/de9103189e882acb50b2b8f22fc50daa.jpg" alt="HomeImages"/></div>
   <div class="item item10"><img src="https://i.pinimg.com/474x/15/4a/78/154a7851dd8dd7051de0edcbd381c11f.jpg" alt="HomeImages"/></div>
</div>
</div>
<div class="homestylerImg">
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/68/7b/a4/687ba457388f85c2c1bd21b3e4f0b49e.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Micheal Kors:</b>
       The Michael Kors watch boasts a sleek, modern design, perfect for those looking to make a statement with a stylish yet subtle accessory.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/14/a8/c5/14a8c5058f04a27c63712a6f599d564c.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Micheal Kors:</b>
       With its refined leather strap and polished metal case, this watch transitions seamlessly from casual to formal wear.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/7b/7d/90/7b7d903fcdda4de5eb65918fd2aa8476.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Micheal Kors: </b>
       The Michael Kors timepiece combines form and function, featuring precise quartz movement and water resistance, ideal for everyday wear.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/a2/2e/00/a22e00a5d41909e80d5811646040cdc1.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Micheal Kors: </b>
       Adorned with minimalist detailing, the Michael Kors watch exudes luxury, ideal for the fashion-forward individual.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/55/61/62/556162102671e2bcaf446685d0f11cbb.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Micheal Kors: </b>
       This Michael Kors watch captures contemporary trends while maintaining a timeless appeal, making it a must-have for watch enthusiasts.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/3b/d4/07/3bd407ba8a549cd232022009a094796e.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Citizen Eco-Drive: </b>
       Powered by light, the Citizen Eco-Drive eliminates the need for battery replacements, offering an environmentally conscious choice for the modern wearer.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/b9/a3/d7/b9a3d713979b1ff4c11a4b078713a26d.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Citizen Eco-Drive: </b>
       The Citizen Eco-Drive ensures accurate timekeeping with advanced technology, perfect for those who value reliability.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/a2/a5/90/a2a590365a530f6054462988bb3e3916.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Citizen Eco-Drive: </b>
       Built to last, this watch combines a robust stainless steel case with an elegant design, making it both stylish and durable.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/be/12/32/be1232fc2caae4030686067dd0459756.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Citizen Eco-Drive: </b>
       With its solar-powered movement and sophisticated appearance, the Citizen Eco-Drive is the epitome of sustainable luxury.With its solar-powered movement and sophisticated appearance, the Citizen Eco-Drive is the epitome of sustainable luxury.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/78/08/9d/78089dc23f7e723807c0ee6c7a8ed2c3.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Citizen Eco-Drive: </b>
       The Citizen Eco-Drive is designed to run continuously in any light, offering low-maintenance performance for busy individuals.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/52/c2/5b/52c25bf80145c0721391cc5b202b1613.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Bulova: </b>
       Bulova watches are known for their accurate timekeeping, thanks to their high-performance quartz movement, ensuring reliability.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/66/54/c7/6654c78dcde941e6a688dfbbaefdb71b.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Bulova:</b>
       With roots in American watchmaking, Bulova blends heritage with modern design, creating timepieces that stand out.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/13/1c/5b/131c5bd616415f8ad9a5e950c2185772.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Bulova:</b>
       Bulova watches feature elegant designs, from sleek dress watches to bold chronographs, catering to various styles and occasions.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/4c/a0/46/4ca0467da138969c18313188702b9248.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Bulova:</b>
       Made with premium materials such as stainless steel and sapphire crystal, Bulova watches are designed to withstand daily wear while looking refined.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/9d/ba/da/9dbada69a20d211c51a40d5e6d358dfa.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Bulova:</b>
       Known for pioneering innovation, like the tuning fork technology, Bulova continues to push the boundaries of horology with each new collection.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/3e/24/b2/3e24b282e6c3f27450928cec84b3a4cf.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Rolex:</b>
       Renowned for its impeccable craftsmanship, the Rolex is the ultimate symbol of luxury and success, appealing to connoisseurs of fine watches.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">/
   <img src="https://i.pinimg.com/474x/f9/e8/ad/f9e8adfd66f198b6bdb98463eac2e733.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Rolex:</b>
       Rolex watches are handcrafted with precision, using the finest materials, ensuring durability and timeless beauty.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/fa/2c/15/fa2c15e5fc5297d77394ad9da584c7c4.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Rolex:</b>
       The Rolex’s classic design features bold lines and an unmistakable logo, making it instantly recognizable around the world.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/f3/ba/45/f3ba456bfe5d3c7ad4eb8f970cf22ff4.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Rolex:</b>
       Known for its robust mechanics and long-lasting performance, the Rolex stands as a leader in luxury timepieces.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/e8/00/7c/e8007c2b98ea956bd842061443ccaea7.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Rolex:</b>
       A Rolex watch is more than just a timepiece; it’s a statement of status, worn by some of the most influential people globally.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/71/44/1a/71441acd0992f86fd7c842c43d7897c6.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Patek Philippe:</b>
       Each Patek Philippe watch is a masterpiece, handcrafted with precision and care, reflecting the brand’s commitment to excellence.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/c7/f7/14/c7f714332d05cf9970cd930a04ba625c.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Patek Philippe:</b>
       Known for their classic and refined designs, Patek Philippe watches transcend trends, making them timeless heirlooms.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/2c/4e/62/2c4e629f729acfbad4657970948c9352.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Patek Philippe:</b>
       Patek Philippe is renowned for its complex mechanical movements, including perpetual calendars and minute repeaters, catering to true watch connoisseurs.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/ea/6a/a6/ea6aa631434731d07ac25a6e31775163.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Patek Philippe:</b>
       Owning a Patek Philippe is a mark of prestige, as the brand produces limited quantities, ensuring exclusivity for its wearers.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/b6/27/ce/b627ce4e75996b02e276155dc959d2d1.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Patek Philippe:</b>
       With over 180 years of watchmaking heritage, Patek Philippe has introduced some of the most important innovations in horology, earning a reputation as the pinnacle of luxury watches.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/bf/a1/11/bfa1110be9c1bdb95af1dab0f8e06897.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Omega:</b>
       Omega watches are synonymous with precision and luxury, renowned for their role in space missions and Olympic timing.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/3a/44/df/3a44df1a38196fc030fe60a9710d5bb3.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Omega:</b>
       From the Speedmaster to the Seamaster, Omega watches feature iconic designs recognized worldwide for their elegance and functionality.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/e4/bd/79/e4bd796a9b780398e88899fae8884c4c.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Omega:</b>
       Equipped with cutting-edge mechanical movements, Omega watches offer unparalleled accuracy and resistance to magnetic fields.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/e5/1d/de/e51dde6534533ef9b35177ea50cb7f5e.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Omega:</b>
       With over a century of watchmaking history, Omega continues to innovate while maintaining its tradition of excellence in horology.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/f6/f4/2d/f6f42dc3913f0139c9def3c3491a5b19.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Omega:</b>
       Omega watches are crafted with the finest materials and meticulous attention to detail, making them both luxurious and highly durable.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/54/5a/6c/545a6c8826535dca2d81c84d0d47d07c.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Smart Watches:</b>
       Smartwatches offer the perfect blend of technology and style, keeping you connected with notifications, fitness tracking, and apps right on your wrist.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/da/d4/83/dad48363cea9c1ccc59132f0ff24edea.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Smart Watches:</b>
       From interchangeable straps to customizable digital watch faces, smartwatches allow you to personalize your style and functionality.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/d7/21/dd/d721dd94aa8438636d24bf2504a74318.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Smart Watches:</b>
       With heart rate monitoring, sleep tracking, and activity tracking, smartwatches are perfect companions for maintaining a healthy lifestyle.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/97/5d/a2/975da29c02cc88d44916500af0800913.jpg" alt="HomeImages"/>
   <div class="gallery-text">
       <b>Smart Watches:</b>
       Whether answering calls, sending messages, or controlling music, smartwatches make daily tasks more efficient and hands-free.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
<div data-aos="fade-up" class="home-gallery">
   <img src="https://i.pinimg.com/474x/0b/44/0c/0b440ca1bee296393612fab487b6ee53.jpg" alt="HomeImages" />
   <div class="gallery-text">
       <b>Smart Watches:</b>
       Smartwatches sync effortlessly with smartphones, making them an essential accessory for tech-savvy users who want to stay productive on the go.
       <Link to="/contact" className="contact-btn">
  Contact Us
</Link>
   </div>
</div>
</div>
</div>
<BackToTop/>
{/* <div class="random-section">
  <div class="random-section-img-container"><img src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/09/1.png" class="random-section-image"/></div>
  <div class="random-section-img-container"><img src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/09/2.png" class="random-section-image"/></div>
  <div class="random-section-img-container"><img src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/09/3.png" class="random-section-image"/></div>
  <div class="random-section-img-container"><img src="images/4.png" class="random-section-image"/></div>
  <div class="random-section-img-container"><img src="images/5.png" class="random-section-image"/></div>
  <div class="random-section-img-container"><img src="images/6.png" class="random-section-image"/></div>
</div> */}
        </>
    )
}
export default Gallery;
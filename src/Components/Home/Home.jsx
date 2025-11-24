import React from "react";
import "./Home.css";
import Nav from "react-bootstrap/Nav";
import BackToTop from '../BackToTop/BackToTop'

const Home = () => {
  return (
    <div>
      <div className="home-hero_section">
        <div className="nunito-header"> ALBERTO & CO</div>
      </div>
      <div class="home-hero-extra">
        <div class="home-hero-extra1">
          <p>
            <img
              src="https://demo-watchify.myshopify.com/cdn/shop/files/ser-1.svg?v=1709378261"
              class="home-hero-extra-image"
            />
          </p>
          <div class="home-hero-extra-texts">
            <p class="home-hero-extra-text1">Free Shipping</p>
            <p class="home-hero-extra-text2">Free Shipping for orders $199</p>
          </div>
        </div>

        <div class="home-hero-extra1">
          <p>
            <img
              src="https://demo-watchify.myshopify.com/cdn/shop/files/ser-2.svg?v=1709378261"
              class="home-hero-extra-image"
            />
          </p>
          <div class="home-hero-extra-texts">
            <p class="home-hero-extra-text1">Low Prices</p>
            <p class="home-hero-extra-text2">Low Prices for many luxurious watches</p>
          </div>
        </div>

        <div class="home-hero-extra1">
          <p>
            <img
              src="https://demo-watchify.myshopify.com/cdn/shop/files/ser-3.svg?v=1709378261"
              class="home-hero-extra-image"
            />
          </p>
          <div class="home-hero-extra-texts">
            <p class="home-hero-extra-text1">Customer Service</p>
            <p class="home-hero-extra-text2">We have good customer services</p>
          </div>
        </div>

        <div class="home-hero-extra1">
          <p>
            <img
              src="https://demo-watchify.myshopify.com/cdn/shop/files/ser-4.svg?v=1709378261"
              class="home-hero-extra-image"
            />
          </p>
          <div class="home-hero-extra-texts">
            <p class="home-hero-extra-text1">Customer Protection</p>
            <p class="home-hero-extra-text2">All customers details are protected</p>
          </div>
        </div>
      </div>

{/*Home Single Product */}

      <div class="home-single-product">
        <div class="home-single-product-image">
          <img
            src="https://catier-store-demo.myshopify.com/cdn/shop/files/countdownV1-img.jpg?v=1704533708"
            class="home-single-product-img"
          />
        </div>
        <div class="home-single-product-texts">
          <p class="home-single-product-text1 nunito-header">Watch Single Product</p>
          <p class="home-single-product-text2">
            <span class="span1">$49.00</span> <span class="span2">$65.00</span>
          </p>
          <div class="home-single-product-text3">
            <div class="home-single-product-text3-items">
              <p class="item1">32</p>
              <p>DAYS</p>
            </div>
            <div class="home-single-product-text3-items">
              <p class="item1">18</p>
              <p>HOURS</p>
            </div>
            <div class="home-single-product-text3-items">
              <p class="item1">44</p>
              <p>MINs</p>
            </div>
          </div>
          <p class="home-single-product-text4">
          Elevate your everyday look with our premium Brown Leather Wristwatch, now on sale! Designed with a luxurious brown leather strap, it exudes timeless elegance while offering modern precision. This versatile timepiece is perfect for any occasion
          </p>
          <Nav.Link href="/products">
            <button class="home-single-product-btn">SHOP NOW</button>
          </Nav.Link>
        </div>
      </div>

      <div class="home-new-release">
        <p class="home-new-release-header nunito-header">NEW ARRIVALS</p>
        <div class="home-new-release-images">
          <div class="home-new-release-image">
            <img
              src="https://cdn11.bigcommerce.com/s-ol6dayxf7q/product_images/uploaded_images/instagram-gallery-1.jpg"
              class="home-new-release-img"
            />
          </div>
          <div class="home-new-release-image">
            <img
              src="https://cdn11.bigcommerce.com/s-ol6dayxf7q/product_images/uploaded_images/instagram-gallery-5.jpg"
              class="home-new-release-img"
            />
          </div>
          <div class="home-new-release-image">
            <img
              src="https://cdn11.bigcommerce.com/s-ol6dayxf7q/product_images/uploaded_images/instagram-gallery-9.jpg"
              class="home-new-release-img"
            />
          </div>
          <div class="home-new-release-image">
            <img
              src="https://cdn11.bigcommerce.com/s-ol6dayxf7q/product_images/uploaded_images/instagram-gallery-4.jpg"
              class="home-new-release-img"
            />
          </div>
        </div>
      </div>

       {/* Store Locator - FIXED */}
      {/* <div className="store-locator-extra">
        <img
          src="https://i.pinimg.com/1200x/57/ca/6e/57ca6ec38773a9539342f84c75689bc2.jpg"
          alt="Visit Our Store"
          className="store-locator-extra-image"
        />
        <div className="store-locator-overlay"></div>
        <div className="store-locator-extra-text">
          <p className="store-locator-extra-text1">
            NEED A CLOSER LOOK? COME VISIT US IN STORE
          </p>
          <p className="store-locator-extra-text2">Your specialist watch store</p>
          <Nav.Link href="/contact">
            <button className="store-locator-btn">STORE LOCATOR</button>
          </Nav.Link>
        </div>
      </div> */}

      {/* Store Locator – Clean & Short */}
<div className="store-locator-extra">
  <div className="store-locator-wrapper">
    <img
      src="https://i.pinimg.com/1200x/57/ca/6e/57ca6ec38773a9539342f84c75689bc2.jpg"
      alt="Visit our store"
      className="store-locator-image"
    />
    <div className="store-locator-content">
      <p className="store-locator-title">
        NEED A CLOSER LOOK? COME VISIT US IN STORE
      </p>
      <p className="store-locator-subtitle">Your specialist watch store</p>
      <Nav.Link href="/contact">
        <button className="store-locator-btn">STORE LOCATOR</button>
      </Nav.Link>
    </div>
  </div>
</div>

      <section class="reviews">
        <h1 className="nunito-header">REVIEWS</h1>
    <div class="views">
            <div class="review">
            <div class="review-image">
                <img src="https://i.pinimg.com/474x/5b/d9/94/5bd9944c562fce2e62e8e10092cb5b41.jpg" alt=""/>
            <span>- Ethan Walker</span>
            </div>
            <div class="like">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>I bought an <b>Alberto & Co.</b> watch for work, and I've been impressed by its durability. It has a great look for professional settings, and I’ve received so many compliments already!</p>
            </div>
            <div class="review">
            <div class="review-image">
                <img src="https://i.pinimg.com/474x/e8/d6/35/e8d635a4221b96761a472f7613918200.jpg" alt=""/>
            <span>- Fatima Al-Masri</span>
            </div>
            <div class="like">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>I am absolutely in love with my new <b>Alberto & Co.</b> watch! The design is elegant, and the watch is incredibly lightweight. It's perfect for both business meetings and evening events.</p>
            </div>
            <div class="review">
            <div class="review-image">
                <img src="https://i.pinimg.com/474x/aa/29/51/aa29513a29196803f09d43ad017e77e1.jpg" alt=""/>
            <span>- João Pereira</span>
            </div>
            <div class="like">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <p><b>Alberto & Co.</b> delivers pure class with their watches. The sleek design and reliable performance have made this one of my favorite purchases. It's stylish, yet versatile enough for everyday wear.</p>
            </div>
            <div class="review">
            <div class="review-image">
                <img src="https://i.pinimg.com/474x/63/3e/f2/633ef26979123abd40a31068bea92252.jpg" alt=""/>
            <span>- Clara Moretti</span>
            </div>
            <div class="like">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <p>This watch has become my go-to accessory. The luxurious feel and timeless design of <b>Alberto & Co.</b> make it stand out. It’s a piece that will never go out of style!</p>
            </div>
            <div class="review">
            <div class="review-image">
                <img src="https://i.pinimg.com/474x/6f/29/5f/6f295fbc34f6b5bd786c433c88762177.jpg" alt=""/>
            <span>- Carlos Martínez</span>
            </div>
            <div class="like">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p>I've always been a fan of quality watches, and <b>Alberto & Co.</b> exceeded my expectations. The craftsmanship is superb, and the design is both classic and modern. It's a perfect match for both casual and formal outfits!</p>
            </div>
            <div class="review">
            <div class="review-image">
                <img src="https://i.pinimg.com/474x/d8/ae/33/d8ae334df3c0d657966ae16366e48f9a.jpg" alt=""/>
            <span>- Ayumi Tanaka</span>
            </div>
            <div class="like">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <p>The sleek design of my <b>Alberto & Co.</b> watch caught my attention right away. It's lightweight and comfortable to wear all day. The attention to detail is incredible, and it keeps perfect time!</p>
            </div>
    </div>
    </section>


      <div class="our-blog_section">
        <p class="our-blog_section-header nunito-header">OUR BLOG</p>
        <div class="our-blog-divcards">
          <div class="our-blog-divcard1">
            <div>
              <img
                src="https://i.pinimg.com/1200x/be/41/6d/be416d8676334f7fa3c13e0f585fc486.jpg"
                class="our-blog-divcard1-img"
              />
            </div>
            <div>
              <p class="our-blog-divcard1-text1 nunito-header">NEWS</p>
              <p class="our-blog-divcard1-text2">Luxurious Silver Watch</p>
              <p class="our-blog-divcard1-text3">
              The Appeal of Leather-Strap Watches have always been a symbol of elegance and class. From casual outings to formal events, a leather watch complements your outfit perfectly
              </p>
            </div>
          </div>

          <div class="our-blog-divcard1">
            <div>
              <img
                src="https://i.pinimg.com/1200x/ac/33/35/ac3335ef1ea288be1467c10fc8249461.jpg"
                class="our-blog-divcard1-img"
              />
            </div>
            <div>
              <p class="our-blog-divcard1-text1 nunito-header">NEWS</p>
              <p class="our-blog-divcard1-text2">Stunning Black Belt</p>
              <p class="our-blog-divcard1-text3">
              New Arrivals: Fall Collection 2024 Our highly anticipated Fall 2024 collection is here, featuring watches that combine functionality with cutting-edge designs
              </p>
            </div>
          </div>

          <div class="our-blog-divcard1">
            <div>
              <img
                src="https://i.pinimg.com/1200x/57/ca/6e/57ca6ec38773a9539342f84c75689bc2.jpg"
                class="our-blog-divcard1-img"
              />
            </div>
            <div>
              <p class="our-blog-divcard1-text1 nunito-header">NEWS</p>
              <p class="our-blog-divcard1-text2">Nice Brown Belt</p>
              <p class="our-blog-divcard1-text3">
              Behind the Scenes: How Our Watches Are Made Ever wondered what goes into making the perfect wristwatch? In this exclusive blog, we take you behind the scenes at Alberto & Co
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div id="blog-section">
        <p class="blog-section-header1">#Recent News</p>
        <p class="blog-section-header2">Check Out our New Updates For You</p>
        <div class="blog-section-divcards">
          <div class="blog-section-divcards1">
            <div>
              <img
                src="https://demo-watchify.myshopify.com/cdn/shop/articles/blog-02.jpg?v=1709360838&width=720"
                class="blog-section-divcards-image"
              />
            </div>
            <div class="blog-section-divcards1-texts">
              <p class="blog-section-divcards1-text1">Furniture Website</p>
              <h4>
                {" "}
                I am a very creative person that has great ideas and opinions
                about various situationsI am a very creative person that has
                great ideas and opinions about various situations
              </h4>
            </div>
          </div>
          <div class="blog-section-divcards1">
            <div>
              <img
                src="https://demo-watchify.myshopify.com/cdn/shop/articles/blog-01.jpg?v=1709360782&width=720"
                class="blog-section-divcards-image"
              />
            </div>
            <div class="blog-section-divcards1-texts">
              <p class="blog-section-divcards1-text1">Food Website</p>
              <h4>
                {" "}
                I am a very am a very creative person that has great ideas and
                opinions about various situations
              </h4>
            </div>
          </div>
          <div class="blog-section-divcards1">
            <div>
              <img
                src="https://apollotran.b-cdn.net/prestashop/leo_conosin_demo/img/leoblog/b/1/8/570_350/b-b-blog-6.jpg"
                class="blog-section-divcards-image"
              />
            </div>
            <div class="blog-section-divcards1-texts">
              <p class="blog-section-divcards1-text1">Clothes Website</p>
              <h4>
                {" "}
                I am a very creative person that has great ideas and opinions
                about various situationsI am a very creative person that has
                great ideas and opinions about various situations
              </h4>
            </div>
          </div>
          <div class="blog-section-divcards1">
            <div>
              <img
                src="https://demo-watchify.myshopify.com/cdn/shop/articles/blog-03.jpg?v=1709360868&width=720"
                class="blog-section-divcards-image"
              />
            </div>
            <div class="blog-section-divcards1-texts">
              <p class="blog-section-divcards1-text1">Clothes Website</p>
              <h4>
                {" "}
                I am a very creative person that has great ideas and opinions
                about various situationsI am a very creative person that has
                great ideas and opinions about various situations
              </h4>
            </div>
          </div>
        </div>
      </div> */}
      <BackToTop/>
    </div>
  
  );
};

export default Home;

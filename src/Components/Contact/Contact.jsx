import "./Contact.css";
import contimg from "../../assets/img/contimg.jpg";
import { FaFacebook, FaGlobe, FaLocationArrow, FaPaperPlane, FaPhone } from "react-icons/fa";
import React, { useState } from "react";
import BackToTop from "../BackToTop/BackToTop";


const faqData = [
  {
    question: "What is the best material for a wristwatch strap?",
    answer:
      "The best materials for a wristwatch strap are leather, stainless steel, and rubber depending on the occasion and user preference.",
  },
  {
    question: "How often should I service my wristwatch?",
    answer:
      "A wristwatch should typically be serviced every 3 to 5 years, depending on the brand and usage.",
  },
  {
    question: "What is the difference between automatic and quartz watches?",
    answer:
      "Automatic watches are powered by the motion of the wearer’s wrist, while quartz watches are battery-powered.",
  },
  {
    question: "Are all wristwatches waterproof?",
    answer:
      "No, not all wristwatches are waterproof. Some are water-resistant to certain depths, but it's important to check the specifications of your watch.",
  },
  {
    question: "Can I wear my wristwatch while swimming?",
    answer:
      "Only watches labeled as water-resistant with specific depth ratings should be worn while swimming.",
  },
  {
    question: "How do I know if my wristwatch is authentic?",
    answer:
      "Authentic wristwatches will have official documentation, serial numbers, and high-quality materials. Always buy from authorized retailers.",
  },
  {
    question: "What is the best wristwatch brand for beginners?",
    answer:
      "Some good wristwatch brands for beginners include Bulova, Citizen Eco-Drive, and Michael Kors, offering a balance of affordability and quality.",
  },
  {
    question: "How do I maintain a leather strap wristwatch?",
    answer:
      "Keep the leather strap away from water, direct sunlight, and moisture. Use leather conditioners to keep the strap supple.",
  },
  {
    question: "What is the purpose of the chronograph on a watch?",
    answer:
      "A chronograph functions as a stopwatch and can be used to measure time intervals. It’s popular in racing and aviation watches.",
  },
  {
    question: "Why are Swiss watches considered the best?",
    answer:
      "Swiss watches are known for their precision, craftsmanship, and use of high-quality materials, making them highly regarded in the industry.",
  },
];




const Contact = () => {
  //   const [activeFAQ, setActiveFAQ] = useState(null);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="con">
        <h2>CONTACT</h2>
      </div>

      <div className='faq-section'>
      <h1>Frequently Asked Questions</h1>
      <div>
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3 className="faq-question" onClick={() => toggleFAQ(index)} >
              {faq.question}
            </h3>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>

      {/* <div className="faq-section">
        <h1>Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}{" "}
              <span className="faq-icon">
                
                {activeFAQ ? "×" : "+"}
              </span>
            </div>
         
            {activeFAQ ? (  
              <div className="faq-answer">{faq.answer}</div>
            ) : (
              <div></div>
            )}
          </div>
        ))}
      </div> */}

      <div className="contact">
        <div className="address">
          <div className="circle">
            <FaLocationArrow />
          </div>
          <h3>
            Address: <span>198 West 21th St., PA</span>
          </h3>
        </div>

        <div className="address">
        <div className="circle">
          <FaPhone/>
          </div>
          <h3>
            Phone: <span>+1235 2355 980</span>
          </h3>
        </div>

        <div className="address">
        <div className="circle">
          <FaPaperPlane/>
          </div>
          <h3>
            Email: <span>Info@yoursite.com</span>
          </h3>
        </div>

        <div className="address">
        <div className="circle">
         <FaGlobe/>
         </div>
          <h3>
            Website: <span>Yoursite.com</span>
          </h3>
        </div>
      </div>

      <div className="firstbody">
        <div className="cont">
          <img
            src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/1.png"
            alt="Contact"
          />
          <div className="form">
            <h1>Contact Us</h1>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea
              name="comments"
              id="comments"
              cols="62"
              rows="8"
              placeholder="Message"
            ></textarea>
            <a href="#">
              <button>Send Message</button>
            </a>
          </div>
        </div>
      </div>

      <section className="store-locator">
        <div className="container">
          <h2>Find a Store Near You</h2>

          <div className="search-box">
            <input
              type="text"
              placeholder="Enter city or ZIP code"
              id="location-search"
            />
            <button
              type="submit"
              onClick={() => console.log("Finding location...")}
            >
              Search <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div className="location-info">
            <h3>Main Store - Alberto Company &Co.</h3>
            <p>
              <strong>Address:</strong> MODUPE HOUSE, Oyo Rd, 200211 Mokola Rd,
              Ibadan, Nigeria
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+7872656370">+(787)265-6370</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:sales@shopalbertopr.com">
                sales@shopalbertopr.com
              </a>
            </p>
          </div>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.2047764758076!2d-66.98699507640612!3d18.307415934233145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c02c623cefcb15f%3A0xdfd04069a573cf78!2sPR-119%2C%20Puerto%20Rico!5e1!3m2!1sen!2sng!4v1727735438822!5m2!1sen!2sng"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="other-locations">
            <h3>Other Locations</h3>
            <ul>
              <li>
                <strong>New York City:</strong> 140 NE 39th St, Miami, FL 33137
              </li>
              <li>
                <strong>Australia:</strong> 265 Collins St, Melbourne VIC 3000,
                Australia
              </li>
              <li>
                <strong>Tokyo:</strong> 6 Chome-10-1 Ginza, Chuo City, Tokyo
                104-0061, Japan
              </li>
              <li>
                <strong>Dubai:</strong> Dubai Mall, Financial Center Rd,
                Downtown Dubai, UAE
              </li>
              <li>
                <strong>Switzerland:</strong> Rue du Rhône 41, 1204 Genève,
                Switzerland
              </li>
            </ul>
          </div>
        </div>
      </section>
      <BackToTop/>
    </>
  );
};

export default Contact;

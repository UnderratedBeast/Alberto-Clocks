import React, { useState } from 'react';

const faqData = [
  {
    question: "What is the warranty period for Alberto & Co. wristwatches?",
    answer: "All Alberto & Co. wristwatches come with a 2-year warranty covering manufacturing defects."
  },
  {
    question: "How do I care for my wristwatch?",
    answer: "To ensure longevity, keep your wristwatch away from extreme temperatures, avoid exposure to magnets, and clean it regularly with a soft cloth."
  },
  {
    question: "Where can I purchase Alberto & Co. watches?",
    answer: "You can purchase our wristwatches directly from our website or through authorized retailers listed on our site."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping. Please check our shipping policy for more details."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach our customer support team via email at support@albertoandco.com or through the contact form on our website."
  }
];

const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='faq-section'>
      <h1>Frequently Asked Questions</h1>
      <div style={styles.faqList}>
        {faqData.map((faq, index) => (
          <div key={index} style={styles.faqItem}>
            <h3 onClick={() => toggleFAQ(index)} style={styles.question}>
              {faq.question}
            </h3>
            {openIndex === index && <p style={styles.answer}>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
  },
  faqList: {
    marginTop: '20px',
  },
  faqItem: {
    borderBottom: '1px solid #ccc',
    padding: '10px 0',
  },
  question: {
    cursor: 'pointer',
    color: '#007BFF',
  },
  answer: {
    marginTop: '5px',
    color: '#555',
  },
};

export default Support;



// import "./Support.css"
// function Support(){
//     return(
//         <>
//         <div class="faq-section">
//         <h1>Frequently Asked Questions</h1>
//         <div class="faq-item">
//             <div class="faq-question" onclick="toggleFAQ(0)">
//                 What is the best material for a wristwatch strap? <span class="faq-icon">+</span>
//             </div>
//             <div class="faq-answer">
//                 The best materials for a wristwatch strap are leather, stainless steel, and rubber depending on the occasion and user preference.
//             </div>
//         </div>
//         <div class="faq-item">
//             <div class="faq-question" onclick="toggleFAQ(1)">
//                 How often should I service my wristwatch? <span class="faq-icon">+</span>
//             </div>
//             <div class="faq-answer">
//                 A wristwatch should typically be serviced every 3 to 5 years, depending on the brand and usage.
//             </div>
//         </div>
//         <div class="faq-item">
//             <div class="faq-question" onclick="toggleFAQ(2)">
//                 What is the difference between automatic and quartz watches? <span class="faq-icon">+</span>
//             </div>
//             <div class="faq-answer">
//                 Automatic watches are powered by the motion of the wearer’s wrist, while quartz watches are battery-powered.
//             </div>
//         </div>
//         <div class="faq-item">
//             <div class="faq-question" onclick="toggleFAQ(3)">
//                 Are all wristwatches waterproof? <span class="faq-icon">+</span>
//             </div>
//             <div class="faq-answer">
//                 No, not all wristwatches are waterproof. Some are water-resistant to certain depths, but it's important to check the specifications of your watch.
//             </div>
//         </div>
//         <div class="faq-item">
//             <div class="faq-question" onclick="toggleFAQ(4)">
//                 Can I wear my wristwatch while swimming? <span class="faq-icon">+</span>
//             </div>
//             <div class="faq-answer">
//                 Only watches labeled as water-resistant with specific depth ratings should be worn while swimming.
//             </div>
//         </div>
//         <div class="faq-item">
//             <div class="faq-question" onclick="toggleFAQ(5)">
//                 How do I know if my wristwatch is authentic? <span class="faq-icon">+</span>
//             </div>
//             <div class="faq-answer">
//                 Authentic wristwatches will have official documentation, serial numbers, and high-quality materials. Always buy from authorized retailers.
//             </div>
//         </div>
//         <div class="faq-item">
//             <div class="faq-question" onclick="toggleFAQ(6)">
//                 What is the best wristwatch brand for beginners? <span class="faq-icon">+</span>
//             </div>
//             <div class="faq-answer">
//                 Some good wristwatch brands for beginners include Bulova, Citizen Eco-Drive, and Michael Kors, offering a balance of affordability and quality.
//             </div>
//         </div>
//         <div class="faq-item">
//             <div class="faq-question" onclick="toggleFAQ(7)">
//                 How do I maintain a leather strap wristwatch? <span class="faq-icon">+</span>
//             </div>
//             <div class="faq-answer">
//                 Keep the leather strap away from water, direct sunlight, and moisture. Use leather conditioners to keep the strap supple.
//             </div>
//         </div>
//         <div class="faq-item">
//             <div class="faq-question" onclick="toggleFAQ(8)">
//                 What is the purpose of the chronograph on a watch? <span class="faq-icon">+</span>
//             </div>
//             <div class="faq-answer">
//                 A chronograph functions as a stopwatch and can be used to measure time intervals. It’s popular in racing and aviation watches.
//             </div>
//         </div>
//         <div class="faq-item">
//             <div class="faq-question" onclick="toggleFAQ(9)">
//                 Why are Swiss watches considered the best? <span class="faq-icon">+</span>
//             </div>
//             <div class="faq-answer">
//                 Swiss watches are known for their precision, craftsmanship, and use of high-quality materials, making them highly regarded in the industry.
//             </div>
//         </div>
//     </div>
    
//     {/* <script>
//         let activeFAQ = null;

// function toggleFAQ(index) {
//     const faqItems = document.querySelectorAll('.faq-item');
//     const faq = faqItems[index];
//     const icon = faq.querySelector('.faq-icon');
    
//     if (activeFAQ && activeFAQ !== faq) {
//         // Close the previously active FAQ
//         activeFAQ.classList.remove('faq-active');
//         activeFAQ.querySelector('.faq-icon').textContent = '+';
//     }

//     // Toggle the current FAQ
//     if (faq.classList.contains('faq-active')) {
//         faq.classList.remove('faq-active');
//         icon.textContent = '+';
//     } else {
//         faq.classList.add('faq-active');
//         icon.textContent = '×';
//         activeFAQ = faq;
//     }
// }
//     </script> */}
//         </>
//     )
// }
// export default Support;
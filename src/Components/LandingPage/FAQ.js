import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How can I download the Satta Live application?",
      answer: "You can download the application by clicking on any of the 'Download App' buttons on this website. It will download the APK file directly to your Android device, which you can then install."
    },
    {
      question: "How can I check the latest results?",
      answer: "The latest results for 'Today' and 'Yesterday' are prominently displayed in the Results section on our homepage. We also have a full table with a search feature to find specific games."
    },
    {
      question: "Is the Satta Live application free?",
      answer: "Yes, downloading and using the Satta Live application to check results is completely free for all users."
    },
    {
      question: "How often are results updated?",
      answer: "Our results are updated in real-time. As soon as an official result is announced, it is instantly reflected on our website and mobile application."
    },
    {
      question: "How can I contact support?",
      answer: "You can contact our support team by filling out the form in the Contact section at the bottom of this page, or by using the email address provided there."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section-padding">
      <div className="container">
        <div className="text-center mb-5 animate-fade-up">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find quick answers to common questions about Satta Live.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 animate-fade-up delay-200">
            <div className="accordion-custom">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="glass-panel mb-3 overflow-hidden transition-all"
                  style={{ 
                    border: activeIndex === index ? '1px solid var(--primary-color)' : '1px solid rgba(255,255,255,0.05)',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="p-4 d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 text-white fw-semibold">{faq.question}</h5>
                    <FaChevronDown 
                      className="text-primary transition-all" 
                      style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0)' }} 
                    />
                  </div>
                  
                  <div 
                    className="px-4 pb-4 pt-0 transition-all" 
                    style={{ 
                      maxHeight: activeIndex === index ? '200px' : '0', 
                      opacity: activeIndex === index ? 1 : 0,
                      overflow: 'hidden'
                    }}
                  >
                    <p className="text-secondary mb-0">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

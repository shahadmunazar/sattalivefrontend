import React from 'react';
import { FaUsers, FaChartBar, FaMobileAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--surface-color)' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 animate-fade-up">
            <h2 className="section-title text-start mb-4">About Satta Live</h2>
            <p className="lead text-secondary mb-4">
              Satta Live is the premier destination for enthusiasts looking for real-time, accurate, and reliable results. We provide a seamless experience that bridges the gap between traditional gaming and modern technology.
            </p>
            <p className="text-muted mb-5">
              Our mission is to bring transparency and speed to the result tracking process. Whether you are playing SK Morning, Delhi Bazar, or Desawar, our platform and mobile application ensure you never miss a beat.
            </p>
            
            <div className="d-flex flex-column gap-4">
              <div className="d-flex align-items-start gap-3">
                <div className="bg-primary bg-opacity-25 p-3 rounded-3 text-primary mt-1">
                  <FaChartBar size={24} />
                </div>
                <div>
                  <h5 className="text-white">Real-Time Accuracy</h5>
                  <p className="text-secondary mb-0">Our algorithms update the results the very second they are declared.</p>
                </div>
              </div>
              
              <div className="d-flex align-items-start gap-3">
                <div className="bg-success bg-opacity-25 p-3 rounded-3 text-success mt-1">
                  <FaUsers size={24} />
                </div>
                <div>
                  <h5 className="text-white">Community Trusted</h5>
                  <p className="text-secondary mb-0">Thousands of users rely on our platform daily for their results.</p>
                </div>
              </div>
              
              <div className="d-flex align-items-start gap-3">
                <div className="bg-warning bg-opacity-25 p-3 rounded-3 text-warning mt-1">
                  <FaMobileAlt size={24} />
                </div>
                <div>
                  <h5 className="text-white">Mobile First</h5>
                  <p className="text-secondary mb-0">Designed specifically to give you the best experience on your smartphone.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 animate-fade-up delay-200">
            <div className="position-relative">
              {/* Decorative Image Placeholder */}
              <div className="glass-panel p-2 rounded-4 overflow-hidden" style={{ minHeight: '500px' }}>
                <div className="w-100 h-100 rounded-3" style={{ background: 'linear-gradient(45deg, #1e293b, #0f172a)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="text-center p-5 border border-primary border-opacity-25 rounded-3 m-4 w-100" style={{ background: 'rgba(37,99,235,0.05)' }}>
                       <h2 className="display-4 fw-bold text-white mb-2">10K+</h2>
                       <p className="text-primary mb-5 fs-5">Active Users</p>
                       
                       <h2 className="display-4 fw-bold text-white mb-2">100%</h2>
                       <p className="text-success mb-0 fs-5">Secure Platform</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

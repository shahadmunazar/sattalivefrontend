import React from 'react';
import { FaAndroid, FaChartLine } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="position-relative overflow-hidden" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* Background decorations */}
      <div className="position-absolute rounded-circle" style={{ width: '600px', height: '600px', background: 'var(--primary-color)', opacity: 0.1, filter: 'blur(100px)', top: '-20%', left: '-10%', zIndex: 0 }}></div>
      <div className="position-absolute rounded-circle" style={{ width: '400px', height: '400px', background: 'var(--secondary-color)', opacity: 0.1, filter: 'blur(80px)', bottom: '0', right: '-5%', zIndex: 0 }}></div>
      
      <div className="container position-relative z-index-1">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0 animate-fade-up">
            <span className="badge rounded-pill bg-primary bg-opacity-25 text-primary mb-3 px-3 py-2 fw-medium border border-primary border-opacity-25">
              🚀 The Fastest Results Platform
            </span>
            <h1 className="display-4 fw-bolder mb-4 text-white lh-sm">
              Your Trusted Source for <br />
              <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Live Satta Results
              </span>
            </h1>
            <p className="lead text-secondary mb-5 fs-5">
              Stay ahead with real-time updates for SK Morning, Delhi Bazar, Gali, Desawar, and more. Experience lightning-fast result checking straight from your mobile.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <a href="#download" className="btn-primary-custom btn-lg px-4 py-3 fs-5">
                <FaAndroid size={24} /> Download Application
              </a>
              <a href="#results" className="btn-secondary-custom btn-lg px-4 py-3 fs-5">
                <FaChartLine size={24} /> View Latest Results
              </a>
            </div>
            
            <div className="mt-5 d-flex align-items-center justify-content-center justify-content-lg-start gap-3">
              <div className="d-flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-warning fs-5">★</span>
                ))}
              </div>
              <span className="text-secondary fw-medium">Trusted by 10,000+ Users</span>
            </div>
          </div>
          
          <div className="col-lg-6 animate-fade-up delay-200">
            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
              <div className="glass-panel p-3 rounded-4 shadow-lg position-relative z-index-1">
                 {/* Placeholder for App Mockup */}
                 <div className="bg-dark rounded-3 overflow-hidden d-flex align-items-center justify-content-center" style={{ height: '600px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="text-center p-4">
                      <div className="text-primary mb-3"><FaAndroid size={80} /></div>
                      <h3 className="text-white">Satta Live App</h3>
                      <p className="text-secondary">Premium Mobile Experience</p>
                    </div>
                 </div>
              </div>
              
              {/* Floating Element */}
              <div className="position-absolute glass-panel p-3 rounded-3 shadow-lg d-none d-md-flex align-items-center gap-3" style={{ bottom: '10%', left: '-15%', zIndex: 2, animation: 'float 3s ease-in-out infinite' }}>
                <div className="bg-success bg-opacity-25 p-2 rounded-circle text-success d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                  <FaChartLine />
                </div>
                <div>
                  <div className="text-white fw-bold">Live Updates</div>
                  <div className="text-secondary small">Real-time alerts</div>
                </div>
              </div>
              
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes float {
                  0% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                  100% { transform: translateY(0px); }
                }
              `}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

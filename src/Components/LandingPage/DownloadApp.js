import React from 'react';
import { FaAndroid, FaCheckCircle } from 'react-icons/fa';

const DownloadApp = () => {
  return (
    <section id="download" className="section-padding position-relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="position-absolute rounded-circle" style={{ width: '500px', height: '500px', background: 'var(--primary-color)', opacity: 0.15, filter: 'blur(100px)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }}></div>
      
      <div className="container position-relative z-index-1">
        <div className="glass-panel p-0 overflow-hidden shadow-lg border-primary border-opacity-25" style={{ background: 'var(--gradient-surface)' }}>
          <div className="row g-0 align-items-center">
            
            <div className="col-lg-6 p-5 p-xl-5 text-center text-lg-start animate-fade-up">
              <span className="badge bg-primary bg-opacity-25 text-primary mb-3 py-2 px-3 fw-medium">Official Application</span>
              <h2 className="display-5 fw-bold text-white mb-4">
                Download the <span className="text-primary">Satta Live</span> App Today
              </h2>
              <p className="text-secondary fs-5 mb-4 pb-2" lang="hi">
                अभी आप घर बैठकर ऑनलाइन सट्टा खेलकर कमा सकते हैं अब आपको कहीं जाने की जरूरत नहीं है आपके ही मोबाइल में हम आपके लिए लाए हैं ऑनलाइन सट्टा है इसे ज्वाइन करने के लिए डाउनलोड बटन पर क्लिक करे
              </p>
              
              <ul className="list-unstyled text-start mb-5 d-inline-block d-lg-block mx-auto mx-lg-0">
                <li className="mb-3 text-white fs-5 d-flex align-items-center gap-3">
                  <FaCheckCircle className="text-success" /> Get Instant Notifications
                </li>
                <li className="mb-3 text-white fs-5 d-flex align-items-center gap-3">
                  <FaCheckCircle className="text-success" /> 100% Secure & Private
                </li>
                <li className="mb-3 text-white fs-5 d-flex align-items-center gap-3">
                  <FaCheckCircle className="text-success" /> Easy to Use Interface
                </li>
              </ul>
              
              <a href="https://download.sattalives.com/SattaLive.apk" className="btn-primary-custom btn-lg w-100 w-sm-auto px-5 py-3 fs-4 shadow-lg" style={{ animation: 'pulse 2s infinite' }}>
                <FaAndroid size={28} /> Download Application
              </a>
              <p className="text-muted mt-3 small">Available for Android Devices (APK)</p>
            </div>
            
            <div className="col-lg-6 d-none d-lg-block position-relative h-100 animate-fade-up delay-200" style={{ minHeight: '600px' }}>
              <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'rgba(37, 99, 235, 0.05)' }}>
                {/* Visual Graphic Representation */}
                <div className="bg-dark rounded-4 shadow-lg position-relative" style={{ width: '280px', height: '580px', border: '8px solid #334155', transform: 'rotate(5deg)' }}>
                  <div className="bg-primary text-center p-4 h-100 rounded-3 d-flex flex-column align-items-center justify-content-center">
                    <FaAndroid size={80} className="text-white mb-4" />
                    <h3 className="text-white fw-bold">Satta Live</h3>
                    <div className="mt-4 p-3 bg-white bg-opacity-10 rounded text-start w-100">
                      <div className="w-50 h-2 bg-white bg-opacity-50 rounded mb-2" style={{height:'8px'}}></div>
                      <div className="w-100 h-2 bg-white bg-opacity-25 rounded mb-4" style={{height:'8px'}}></div>
                      <div className="w-75 h-2 bg-white bg-opacity-50 rounded mb-2" style={{height:'8px'}}></div>
                      <div className="w-100 h-2 bg-white bg-opacity-25 rounded" style={{height:'8px'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(37, 99, 235, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
        }
      `}} />
    </section>
  );
};

export default DownloadApp;

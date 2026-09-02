import React from 'react';
import { FaBolt, FaShieldAlt, FaMobileAlt, FaSyncAlt, FaTrophy, FaSearch } from 'react-icons/fa';

const Features = () => {
  const featuresList = [
    {
      icon: <FaBolt />,
      title: 'Fast Results',
      desc: 'Experience lightning-fast result updates directly to your screen the moment they are announced.',
      color: 'var(--primary-color)'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Secure & Reliable',
      desc: 'Our platform is built on modern infrastructure ensuring your data is always safe and uptime is 99.9%.',
      color: 'var(--secondary-color)'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Application',
      desc: 'Take the power of Satta Live wherever you go with our premium, easy-to-use Android app.',
      color: 'var(--accent-color)'
    },
    {
      icon: <FaSearch />,
      title: 'Easy Result Checking',
      desc: 'Find what you need instantly with our clean layout and simple result filtering system.',
      color: '#EC4899' // Pink
    },
    {
      icon: <FaSyncAlt />,
      title: 'Regular Updates',
      desc: 'We constantly maintain and update our platform to provide you with the best user experience.',
      color: '#8B5CF6' // Purple
    },
    {
      icon: <FaTrophy />,
      title: 'Trusted Platform',
      desc: 'Join thousands of satisfied users who trust Satta Live as their daily results portal.',
      color: '#14B8A6' // Teal
    }
  ];

  return (
    <section id="features" className="section-padding position-relative" style={{ backgroundColor: 'var(--surface-color)' }}>
      <div className="container">
        <div className="text-center mb-5 animate-fade-up">
          <h2 className="section-title">Why Choose Satta Live?</h2>
          <p className="section-subtitle">
            We provide a premium experience that combines speed, reliability, and ease of use.
          </p>
        </div>

        <div className="row g-4">
          {featuresList.map((feature, idx) => (
            <div key={idx} className={`col-md-6 col-lg-4 animate-fade-up`} style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
              <div className="glass-panel p-4 h-100 transition-all text-center" style={{ 
                background: 'rgba(15, 23, 42, 0.4)', 
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: 'var(--shadow-md)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = feature.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
              }}
              >
                <div className="d-inline-flex align-items-center justify-content-center rounded-3 mb-4" style={{ 
                  width: '64px', height: '64px', 
                  backgroundColor: `${feature.color}20`, // 20% opacity hex
                  color: feature.color,
                  fontSize: '28px'
                }}>
                  {feature.icon}
                </div>
                <h4 className="text-white mb-3">{feature.title}</h4>
                <p className="text-secondary mb-0">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

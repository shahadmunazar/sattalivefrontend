import React, { useState } from 'react';
import { FaSearch, FaChartLine, FaHistory } from 'react-icons/fa';
import HistoricalChart from './HistoricalChart';

const ResultsArea = ({ items, cat, cats }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('live'); // 'live' or 'historical'
  
  // Filter logic for Live Results
  const filteredItems = items?.filter(item => 
    item.category_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="results" className="section-padding">
      <div className="container">
        <div className="text-center mb-4 animate-fade-up">
          <h2 className="section-title">Live Results & Charts</h2>
          <p className="section-subtitle">
            Stay updated with the most recent numbers or dive into our extensive historical charts.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="d-flex justify-content-center mb-5 animate-fade-up delay-100">
          <div className="glass-panel p-1 rounded-pill d-inline-flex">
            <button 
              className={`btn px-4 py-2 rounded-pill fw-medium transition-all ${activeTab === 'live' ? 'btn-primary text-white shadow' : 'text-secondary'}`}
              onClick={() => setActiveTab('live')}
              style={{ border: 'none' }}
            >
              <FaChartLine className="me-2" /> Live Daily Results
            </button>
            <button 
              className={`btn px-4 py-2 rounded-pill fw-medium transition-all ${activeTab === 'historical' ? 'btn-primary text-white shadow' : 'text-secondary'}`}
              onClick={() => setActiveTab('historical')}
              style={{ border: 'none' }}
            >
              <FaHistory className="me-2" /> Monthly/Yearly Charts
            </button>
          </div>
        </div>

        {activeTab === 'live' && (
          <div className="live-results-container">
            {/* Highlight Cards */}
            <div className="row g-4 mb-5">
              {/* Yesterday Highlight */}
              <div className="col-md-6 animate-fade-up">
                <div className="glass-panel p-5 text-center h-100 position-relative overflow-hidden border-primary border-opacity-25" style={{ background: 'var(--surface-color)' }}>
                  <div className="position-absolute top-0 start-0 w-100" style={{ height: '4px', background: 'var(--gradient-primary)' }}></div>
                  <span className="badge bg-primary mb-3 py-2 px-3 fw-medium">Yesterday</span>
                  <h3 className="text-secondary mb-1">{cat?.name || '---'}</h3>
                  <div className="display-1 fw-bold text-white my-3" style={{ textShadow: '0 0 20px rgba(37,99,235,0.4)' }}>
                    {cat?.now_open_number || '--'}
                  </div>
                </div>
              </div>
              
              {/* Today Highlight */}
              <div className="col-md-6 animate-fade-up delay-100">
                <div className="glass-panel p-5 text-center h-100 position-relative overflow-hidden border-success border-opacity-25" style={{ background: 'var(--surface-color)' }}>
                  <div className="position-absolute top-0 start-0 w-100" style={{ height: '4px', background: 'var(--secondary-color)' }}></div>
                  <span className="badge bg-success mb-3 py-2 px-3 fw-medium">Today LIVE</span>
                  <h3 className="text-secondary mb-1">{cats?.category_name || '---'}</h3>
                  <div className="display-1 fw-bold text-white my-3" style={{ textShadow: '0 0 20px rgba(16,185,129,0.4)' }}>
                    {cats?.open_number || '--'}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Results Table */}
            <div className="glass-panel p-4 animate-fade-up delay-200">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
                <h4 className="text-white m-0">All Live Results</h4>
                
                {/* Search Box */}
                <div className="position-relative" style={{ maxWidth: '300px', width: '100%' }}>
                  <div className="position-absolute top-50 translate-middle-y ms-3 text-muted">
                    <FaSearch />
                  </div>
                  <input 
                    type="text" 
                    className="form-control ps-5" 
                    placeholder="Search games..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="table-responsive rounded-3">
                <table className="table table-hover table-borderless align-middle m-0" style={{ minWidth: '600px' }}>
                  <thead style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                    <tr>
                      <th className="py-3 px-4 text-secondary fw-semibold border-bottom border-secondary border-opacity-25">GAME NAME</th>
                      <th className="py-3 px-4 text-secondary fw-semibold border-bottom border-secondary border-opacity-25 text-center">YESTERDAY</th>
                      <th className="py-3 px-4 text-secondary fw-semibold border-bottom border-secondary border-opacity-25 text-center">TODAY</th>
                      <th className="py-3 px-4 text-secondary fw-semibold border-bottom border-secondary border-opacity-25 text-end">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredItems && filteredItems.length > 0 ? (
                      filteredItems.map((item, i) => (
                        <tr key={item.category_id || i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td className="py-3 px-4">
                            <div className="fw-bold text-white text-uppercase" style={{ letterSpacing: '1px' }}>
                              {item.category_name}
                            </div>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span className="fs-5 text-secondary fw-medium">
                              {item.yesterday_number ? item.yesterday_number : "--"}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span className="fs-5 text-warning fw-bold">
                              {item.today_number ? item.today_number : "--"}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-end">
                            <button className="btn btn-sm btn-outline-primary rounded-pill px-3" onClick={() => setActiveTab('historical')}>
                              History
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center py-5 text-muted">
                          No results found matching your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'historical' && (
          <HistoricalChart />
        )}
      </div>
    </section>
  );
};

export default ResultsArea;

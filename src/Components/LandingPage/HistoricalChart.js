import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaSearch } from 'react-icons/fa';

const HistoricalChart = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const [selectedMonth, setSelectedMonth] = useState(currentMonth.toString().padStart(2, '0'));
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }
  ];

  const years = Array.from({ length: currentYear - 2019 }, (_, i) => (currentYear - i).toString());

  const fetchChartData = async (month, year) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://liveapi.sattalives.com/api/all-months-results?month=${month}&year=${year}`);
      if (response.ok) {
        const data = await response.json();
        setChartData(data?.data || null);
      } else {
        throw new Error('Failed to fetch historical data');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial data on mount
  useEffect(() => {
    fetchChartData(selectedMonth, selectedYear);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchChartData(selectedMonth, selectedYear);
  };

  const daysInMonth = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

  return (
    <div className="historical-chart-container animate-fade-up">
      <div className="glass-panel p-4 mb-4">
        <form onSubmit={handleSearch} className="row g-3 align-items-end">
          <div className="col-md-4">
            <label className="form-label text-secondary small"><FaCalendarAlt /> Select Month</label>
            <select 
              className="form-control form-select text-white" 
              value={selectedMonth} 
              onChange={(e) => setSelectedMonth(e.target.value)}
              style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)' }}
            >
              {months.map(m => <option key={m.value} value={m.value} className="text-dark">{m.label}</option>)}
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label text-secondary small"><FaCalendarAlt /> Select Year</label>
            <select 
              className="form-control form-select text-white" 
              value={selectedYear} 
              onChange={(e) => setSelectedYear(e.target.value)}
              style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)' }}
            >
              {years.map(y => <option key={y} value={y} className="text-dark">{y}</option>)}
            </select>
          </div>
          <div className="col-md-4">
            <button type="submit" className="btn-primary-custom w-100" disabled={loading}>
              {loading ? <span className="spinner-border spinner-border-sm"></span> : <><FaSearch /> View Chart</>}
            </button>
          </div>
        </form>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {!loading && chartData && chartData.categories && (
        <div className="glass-panel p-0 overflow-hidden">
          <div className="bg-primary bg-opacity-10 p-3 border-bottom border-primary border-opacity-25 text-center">
            <h4 className="text-white m-0">Satta Chart - {months.find(m => m.value === selectedMonth)?.label} {selectedYear}</h4>
          </div>
          <div className="table-responsive" style={{ maxHeight: '600px', overflowY: 'auto' }}>
            <table className="table table-hover table-borderless align-middle m-0 text-center" style={{ minWidth: '800px' }}>
              <thead className="position-sticky top-0" style={{ backgroundColor: 'var(--surface-color)', zIndex: 1, boxShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                <tr>
                  <th className="py-3 px-3 text-primary fw-bold border-end border-secondary border-opacity-25" style={{ minWidth: '80px', backgroundColor: 'var(--surface-color)' }}>DATE</th>
                  {chartData.categories.map((cat, idx) => (
                    <th key={idx} className="py-3 px-3 text-secondary fw-semibold border-bottom border-secondary border-opacity-25 text-uppercase" style={{ minWidth: '120px' }}>
                      {cat}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {daysInMonth.map((day) => {
                  const dayResults = chartData.results[day];
                  return (
                    <tr key={day} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td className="py-2 px-3 fw-bold text-white border-end border-secondary border-opacity-25 bg-dark bg-opacity-25">
                        {day.padStart(2, '0')}
                      </td>
                      {chartData.categories.map((_, colIdx) => (
                        <td key={colIdx} className="py-2 px-3">
                          <span className={`fw-medium ${dayResults && dayResults[colIdx] !== '--' ? 'text-warning fs-5' : 'text-muted'}`}>
                            {dayResults && dayResults[colIdx] ? dayResults[colIdx] : '--'}
                          </span>
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {!loading && chartData && !chartData.categories && (
        <div className="glass-panel p-5 text-center">
          <p className="text-muted fs-5 mb-0">No data available for the selected month and year.</p>
        </div>
      )}
    </div>
  );
};

export default HistoricalChart;

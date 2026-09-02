import React, { useEffect, useState } from 'react';
// Import Landing Page Components
import Header from './LandingPage/Header';
import Hero from './LandingPage/Hero';
import Features from './LandingPage/Features';
import ResultsArea from './LandingPage/ResultsArea';
import DownloadApp from './LandingPage/DownloadApp';
import About from './LandingPage/About';
import FAQ from './LandingPage/FAQ';
import Contact from './LandingPage/Contact';
import Footer from './LandingPage/Footer';

const Home = () => {
  const [items, setItems] = useState([]);
  const [monthss, setMonthss] = useState("");
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState("");
  const [catM, setCatM] = useState("");
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://liveapi.sattalives.com/api/today-numbers-history', {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setItems(data?.data?.results || []);
          setCat(data?.data?.category || {});
          setCats(data?.data?.yesterday_number || {});
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        setError('Error fetching data: ' + error.message);
      }
    };

    const fetchMonthData = async () => {
      try {
        const response = await fetch('https://liveapi.sattalives.com/api/all-months-results', {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setMonthss(data?.data?.results || []);
          setCatM(data?.data?.categories || []);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        setError('Error fetching data: ' + error.message);
      }
    };

    fetchData();
    fetchMonthData();
  }, []);

  return (
    <div className="landing-page-wrapper">
      <Header />
      <main>
        <Hero />
        <Features />
        <ResultsArea items={items} cat={cat} cats={cats} />
        <DownloadApp />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
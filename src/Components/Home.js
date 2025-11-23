import React, { useEffect, useState } from 'react'
import logo from "../assests/logo.jpg"

const Home = () => {
  const [items, setItems] = useState([])
  const [monthss, setMonthss] = useState("")
  const [cat, setCat] = useState("")
  const [cats, setCats] = useState("")
  const [catM, setCatM] = useState("")
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      // const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
      try {
        const response = await fetch('https://liveapi.sattalives.com/api/today-numbers-history', {
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`, // Include token in headers
          },
        });

        if (response.ok) {
          const data = await response.json();
          // console.log("sddfd", data?.data);
          setItems(data?.data?.results || []); // Ensure items is set correctly
          setCat(data?.data?.category || {}); // Ensure items is set correctly
          setCats(data?.data?.yesterday_number || {}); // Ensure items is set correctly
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        setError('Error fetching data: ' + error.message);
      }
    };
    const fetchMonthData = async () => {
      // const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
      try {
        const response = await fetch('https://liveapi.sattalives.com/api/all-months-results', {
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`, // Include token in headers
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("sddfd", data?.data?.categories[0]);
          setMonthss(data?.data?.results || []); // Ensure items is set correctly
          setCatM(data?.data?.categories || []); // Ensure items is set correctly
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

  const now = new Date();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();
  return (
    <>
      <div className="containerr col-md-10 col-lg-10">
        <div className="row">
          <div className="col-md-6 col-sm-12 logo">
            <img
              src={logo}
              className="img-responsive"
            />
            <div className="heading">
              <h1>Satta Live</h1>
              <p>सबसे फ़ास्ट रिजल्ट के लिए यही पर बने रहे है</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 text-right download">
            <div className="text-center">
              <p>Get Mobile App click to download button</p>
              <a
                href="https://download.sattalives.com/SattaLive.apk"
                className="btn btn-download"
              >
                Download App
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="result">
              <div>
                <h1>{cat?.now_open_number}</h1>
                <strong>Yesterday</strong>
                <p>{cat.name}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div className="result">
              <div>
                <h1>{cats?.open_number}</h1>
                <strong>Today</strong>
                <p>{cats.category_name}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="download download_banner">
          <div className="row">
            <div className="col-md-6">
            <p lang="hi">अभी आप घर बैठकर ऑनलाइन सट्टा खेलकर कमा सकते हैं अब आपको कहीं जाने की जरूरत नहीं है आपके ही मोबाइल में हम आपके लिए लाए हैं ऑनलाइन सट्टा है इसे ज्वाइन करने के लिए डाउनलोड बटन पर क्लिक करे</p>
            </div>
            <div className="col-md-6">
              <div className="text-center">
                <p>Get Mobile App click to download button</p>
                <a
                  href="https://download.sattalives.com/SattaLive.apk"
                  className="btn btn-download"
                >
                  Download App
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row chart">
          <div className="col-md-12">
            <div className="table-responsive" style={{ marginTop: "30px" }}>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <th>Game</th>
                    <th>Yesterday</th>
                    <th>Today</th>
                  </tr>
                  {items?.map((item, i) => {
                    return (
                      <>
                        <tr key={item.category_id}>
                          <th style={{ fontWeight: "400", textTransform: "uppercase" }}>{item.category_name}</th>
                          <th>{item.yesterday_number ? item.yesterday_number : "--"}</th>
                          <th>{item.today_number ? item.today_number : "--"}</th>
                        </tr>
                      </>
                    )
                  })}
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="download download_banner">
          <div className="row">
            <div className="col-md-6">
              <p>
                अभी आप घर बैठकर ऑनलाइन सट्टा खेलकर कमा सकते हैं अब आपको कहीं जाने की
                जरूरत नहीं है आपके ही मोबाइल में हम आपके लिए लाए हैं ऑनलाइन सट्टा है
                इसे ज्वाइन करने के लिए डाउनलोड बटन पर क्लिक करे{" "}
              </p>
            </div>
            <div className="col-md-6">
              <div className="text-center">
                <p>Get Mobile App click to download button</p>
                <a
                  href="https://download.sattalives.com/SattaLive.apk"
                  className="btn btn-download"
                >
                  Download App
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
          <h1 className="form-group text-center">{`${month} ${year} Chart`}</h1>
            <div className="table-responsive table-hover table-striped">
              <table className="table">
                <thead>
                  <tr>

                    <th className="text-center">Date</th>                 
                    <th className="text-center">{catM[0]}</th>
                    <th className="text-center">{catM[1]}</th>
                    <th className="text-center">{catM[2]}</th>
                    <th className="text-center">{catM[3]}</th>
                    <th className="text-center">{catM[4]}</th>
                    <th className="text-center">{catM[5]}</th>
                    <th className="text-center">{catM[6]}</th>
                    <th className="text-center">{catM[7]}</th>
                    <th className="text-center">{catM[8]}</th>
                    {/* <th className="text-center">{catM[9]}</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <th className="text-center">1</th>
                    {monthss[1]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">2</th>
                    {monthss[2]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">3</th>
                    {monthss[3]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">4</th>
                    {monthss[4]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">5</th>
                    {monthss[5]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">6</th>
                    {monthss[6]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">7</th>
                    {monthss[7]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">8</th>
                    {monthss[8]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">9</th>
                    {monthss[9]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">10</th>
                    {monthss[10]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">11</th>
                    {monthss[11]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">12</th>
                    {monthss[12]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">13</th>
                    {monthss[13]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">14</th>
                    {monthss[14]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">15</th>
                    {monthss[15]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">16</th>
                    {monthss[16]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">17</th>
                    {monthss[17]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">18</th>
                    {monthss[18]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">19</th>
                    {monthss[19]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">20</th>
                    {monthss[20]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">21</th>
                    {monthss[21]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">22</th>
                    {monthss[22]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">23</th>
                    {monthss[23]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">24</th>
                    {monthss[24]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">25</th>
                    {monthss[25]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">26</th>
                    {monthss[26]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">27</th>
                    {monthss[27]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">28</th>
                    {monthss[28]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">29</th>
                    {monthss[29]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">30</th>
                    {monthss[30]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                  <tr>
                  <th className="text-center">31</th>
                    {monthss[31]?.map((item, i) => (
                      <>
                      <th className="text-center">{item}</th>
                      </>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-md-5">
              <select className="form-control form-group" name="month">
                <option value="">Choose Month</option>
                <option value="01">January</option>
                <option value="02">February </option>
                <option value="03">March </option>
                <option value="04">April </option>
                <option value="05">May</option>
                <option value="06">June </option>
                <option value="07">July</option>
                <option value="08" selected="">
                  August
                </option>
                <option value="09">September </option>
                <option value="10">October </option>
                <option value="11">November </option>
                <option value="12">December</option>
              </select>
            </div>
            <div className="col-md-5">
              <select className="form-control" name="year">
                <option value="">Choose Year</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024} selected="">
                  2024
                </option>
              </select>
            </div>
            <div className="col-md-2">
              <button className="btn btn-download btn-block">Select Date</button>
            </div>
          </div>
        </form>
        <div> <h4>DISCLAIMER</h4>
<p>This website is intended for entertainment purposes only. Satta Live does not support or encourage any involvement in gambling or betting activities. If betting or gambling is prohibited in your region, users are advised to do not access this site immediately. We are not liable for any outcomes, whether profits or losses, arising from the use of the information provided. Users must ensure compliance with the legal regulations in their area, and any risks taken are solely their own responsibility.</p>
</div>
        <footer className="footer">
          <div className="containerrr text-center" style={{ height: "30px" }}>
            <p>Copyright © 2021 - 2024 SattaLive</p>
          </div>
        </footer>

      </div>
    </>
  )
}

export default Home 
import React, { useState} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=47faa98c00b88628615e4d2eb7a2d9d9`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="City name..." onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} value={location} />
        </div>

          <div className="location-box">
              <div className="location"> New York City, US</div>
              <div className="date">{dateBuilder(new Date())}</div> 
          </div>

          <div className="weather-box">
            <div className="temp">15°</div>
            <div className='icon'><img src="https://openweathermap.org/img/wn/04n.png" alt=""/></div>
            <div className="weather">Sunny</div>
          </div>
      
      </main>
    </div>
  );
}

export default App;

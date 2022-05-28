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
    <div className={(typeof data.main != "undefined") ? ((data.main.temp < 90) ? 'app cold' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="City name..." onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} value={location} />
        </div>

          <div className="location-box">
              <div className="location">{data.name}</div>
              <div className="date">{dateBuilder(new Date())}</div> 
          </div>

          <div className="weather-box">
            <div className="temp">{data.main ? <h1>{data.main.temp}°F</h1> : null}
</div>
            


            <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          <div className="bottom">
            <div className="feels">
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>

            <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity}</p> : null}
              <p>Humidity</p>
            </div>

            <div className="wind">
            {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
      
      </main>
    </div>
  );
}

export default App;

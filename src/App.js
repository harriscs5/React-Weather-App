import React from 'react';
const api ={
  key: "47faa98c00b88628615e4d2eb7a2d9d9",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="City name..." />
        </div>
      </main>
    </div>
  );
}

export default App;

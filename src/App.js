import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import { Details, Hero } from "./components";

// Iligan City Longitude and Latitude
const longitude = "124.2434";
const latitude = "8.2289";

function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (longitude, latitude) => {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m`
    );
    console.log(response.data.current);
    setWeather(response.data.current);
  };

  useEffect(() => {
    fetchWeather(longitude, latitude);
  }, []);
  if (!weather) {
    return <>Loading..</>;
  }

  return (
    <div className="App">
      <Hero weather={weather} />
      <Details weather={weather} />
    </div>
  );
}

export default App;

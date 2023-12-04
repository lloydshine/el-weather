import { useEffect, useState } from "react";
import axios from "axios";

import { Details, Hero, Navbar } from "./components";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState({
    name: "Iligan",
    lon: "124.2434",
    lat: "8.2289",
  });

  const fetchWeather = async (longitude, latitude) => {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m`
    );
    setWeather(response.data.current);
  };

  useEffect(() => {
    fetchWeather(location.lon, location.lat);
  }, [location]);
  if (!weather) {
    return <>Loading..</>;
  }

  return (
    <div className="App">
      <Navbar />
      <Hero weather={weather} location={location} setLocation={setLocation} />
      <Details weather={weather} />
    </div>
  );
}

export default App;

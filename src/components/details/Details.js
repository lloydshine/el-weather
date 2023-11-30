import "./details.css";
import {
  WiNightCloudyWindy,
  WiNightRainWind,
  WiHumidity,
  WiEarthquake,
} from "react-icons/wi";

export default function Details({ weather }) {
  return (
    <section className="details">
      <div className="info">
        <WiNightCloudyWindy size={100} />
        <p>Wind Speed: {weather.wind_speed_10m}</p>
      </div>
      <div className="info">
        <WiNightRainWind size={100} />
        <p>Precipitation: {weather.precipitation}</p>
      </div>
      <div className="info">
        <WiHumidity size={100} />
        <p>Humidity: {weather.relative_humidity_2m}</p>
      </div>
      <div className="info">
        <WiEarthquake size={100} />
        <p>Surface Pressure: {weather.surface_pressure}</p>
      </div>
    </section>
  );
}

import "./hero.css";

import { Day, Night } from "../../media";
import { SearchBar } from "../";

export default function WeatherHero({ weather, location, setLocation }) {
  const back = {
    background: `linear-gradient(rgba(0, 0, 0, 0.377), rgba(0, 0, 0, 0.373)),
      url(${
        weather.is_day === 0 ? Night : Day
      }) no-repeat center center / cover`,
  };

  return (
    <section className="hero" style={back}>
      <SearchBar setLocation={setLocation} />
      <div className="loc">
        <p className="city">{location.name}</p>
        <p className="temp">{weather.temperature_2m}°</p>
      </div>
    </section>
  );
}

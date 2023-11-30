import "./hero.css";

import { Day, Night } from "../../media";

export default function WeatherHero({ weather }) {
  const back = {
    background: `linear-gradient(rgba(0, 0, 0, 0.377), rgba(0, 0, 0, 0.373)),
      url(${
        weather.is_day === 0 ? Night : Day
      }) no-repeat center center / cover`,
  };

  return (
    <section className="hero" style={back}>
      <p className="city">Iligan</p>
      <p className="temp">{weather.temperature_2m}°</p>
    </section>
  );
}

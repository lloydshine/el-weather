import { useState } from "react";
import "./search.css";

export default function Search() {
  const [city, setCity] = useState("");

  return (
    <section className="search">
      <div>
        <h1>Search City</h1>
        <input
          type="text"
          placeholder="Search City"
          onChange={(e) => setCity(e.target.value)}
        />
        <input type="button" value="Search" />
      </div>
      <div>
        <h1>Temperature for {city}</h1>
      </div>
    </section>
  );
}

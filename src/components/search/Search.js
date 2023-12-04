import { useEffect, useState } from "react";
import axios from "axios";
import "./search.css";

import { FaSearch } from "react-icons/fa";

export default function SearchBar({ setLocation }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleClick = (location) => {
    setSearch(location.name);
    setLocation(location);
    setResults([]);
  };

  useEffect(() => {
    const searchLocation = async () => {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${search}+Iligan`
      );
      setResults(response.data);
    };
    if (search.length === 0) {
      setResults([]);
      return;
    }
    searchLocation(search);
  }, [search]);
  return (
    <div className="search">
      <div className="bar">
        <FaSearch size={15} />
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <div className="results">
        {results.length > 0 &&
          results.map((loc, index) => (
            <div
              className="result"
              key={index}
              onClick={() => handleClick(loc)}
            >
              <p>{loc.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

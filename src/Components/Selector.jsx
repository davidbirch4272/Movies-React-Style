import React, { useState } from "react";
import axios from "axios";
import { FaMagnifyingGlass } from "react-icons/fa6";
import selctor from "./selector.css";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGE0MjA0YTUyZTllNzQ4ZjNhZDFiODAzMzY5ODYxMSIsIm5iZiI6MTc0NzI1MzU5OC42NjEsInN1YiI6IjY4MjRmOTVlMmVjY2I4NDZkZTg2NGRmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f2uS4MRcYaJc0Tn5rGE4JPdg1OHTKTXmcPh-Tr1qZlA";

function Selector() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [sortType, setSortType] = useState("title");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
          params: {
            query: query,
          },
        }
      );

      setMovies(response.data.results || []);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.status_message || "Failed to fetch movies.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchMovies();
    }
  };

  const sortedMovies = [...movies].sort((a, b) => {
    if (sortType === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortType === "year") {
      const yearA = parseInt(a.release_date?.split("-")[0]) || 0;
      const yearB = parseInt(b.release_date?.split("-")[0]) || 0;
      return yearB - yearA;
    }
    return 0;
  });

  return (
    <div className="selector__container">
      <div className="selector__row">
        <div className="movies__header">
          <h2>
            🎬 All <span className="coloring">Movies</span>
          </h2>

          <div className="search__header">
            <input
              type="text"
              placeholder="Fast & Furious..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="search__bar"
            />
            <div className="FaMagnifyingGlass">
              <FaMagnifyingGlass onClick={searchMovies} />
            </div>
          </div>

          <div>
            <label>
              Sort by:{" "}
              <select
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="title">Title (A-Z)</option>
                <option value="year">Year (Newest First)</option>
              </select>
            </label>
          </div>
        </div>
        <div className="movies__Wrapper">
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {sortedMovies.map((movie) => (
            <div className="movie" key={movie.id}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    :  "https://via.placeholder.com/200x300?text=No+Image"
                }
                alt={movie.title}
                className="movie__poster"
              />
              <h2 className="movie__title">{movie.title}</h2>
              <p className="movie__year">
                {movie.release_date?.split("-")[0] || "N/A"}
              </p>
              <p className="movie__imdbID">ID: {movie.id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Selector;

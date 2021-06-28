import axios from "../axios";
import requests from "../requests";
import React, { useState, useEffect } from "react";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "http://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="flex flex-col z-30 relative">
      <h1 className="text-xl  font-semibold text-white p-3">{title}</h1>
      {/* <div className="flex overflow-y-hidden overflow-x-scroll scrollbar-hide p-4 "> */}
      <div className="flex relative items-stretch justify-start overflow-y-hidden overflow-x-scroll scrollbar-hide p-4">
        {/* {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <>
                <img
                  className={`h-36 object-contain mr-4 rounded w-full transform hover:scale-110 transition ease-in-out duration-700 ${
                    isLargeRow && "h-72"
                  }`}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              </>
            )
        )} */}
        {movies.map((movie) => (
          <>
            <a
              href="##"
              className={`relative group block mr-4 flex-shrink-0 h-48 w-60 object-cover cursor-pointer 
              transition duration-300 ease-in transform hover:scale-110 hover:z50 ${
                isLargeRow && "h-72 w-48"
              }`}
            >
              <div
                className="absolute group inset-0 text-white hidden  group-hover:flex transition ease-in-out  duration-600 flex-col 
              justify-end p-4"
              >
                <div>
                  <h3 className="font-bold text-xs">{movie.original_title}</h3>
                  <p className="line-clamp-2 text-xs">{movie.overview}</p>
                </div>
              </div>

              <img
                className="object-cover h-full w-full rounded-md"
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
              />
            </a>
          </>
        ))}
      </div>
    </div>
  );
}

export default Row;

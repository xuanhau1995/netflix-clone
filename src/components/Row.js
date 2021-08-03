import axios from "../axios";
import requests from "../requests";
import React, { useState, useEffect } from "react";
import { PlayIcon } from "@heroicons/react/solid";

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
      <div className="flex space-x-4 justify-between">
        <h1 className="text-xl  font-semibold text-white p-3">{title}</h1>
        <button className="h-12 bg-gray-400 bg-opacity-25 px-6 rounded-xl hover:scale-105 transform transition-all duration-500">
          Expore All
        </button>
      </div>
      <div className="flex relative items-stretch justify-start overflow-y-hidden overflow-x-scroll scrollbar-hide p-4 py-6">
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
              {isLargeRow ? (
                <div className="absolute top-28 right-16 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
                  <PlayIcon className="h-16 " />
                </div>
              ) : (
                <div className="absolute top-8 right-20 opacity-0 group-hover:opacity-100 transition-all duration-700 z-30">
                  <PlayIcon className="h-16 " />
                </div>
              )}
              <div
                className="absolute group inset-0 text-white hidden  group-hover:flex transition ease-in-out z-30  duration-700 flex-col 
              justify-end p-4"
              >
                <div className="bg-gray-600 p-4 rounded-xl bg-opacity-60">
                  <h3 className="font-bold text-xs">{movie.original_title}</h3>
                  <p className="line-clamp-2 text-xs">{movie.overview}</p>
                </div>
              </div>
              <img
                alt="movie"
                loading="eager"
                className="object-cover h-full w-full rounded-xl group-hover:brightness-75 z-10"
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

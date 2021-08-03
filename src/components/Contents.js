import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import Row from "./Row";
import {
  BeakerIcon,
  SearchIcon,
  PlayIcon,
  PlusIcon,
} from "@heroicons/react/solid";
import Footer from "./Footer";
function Banner() {
  const [movie, setMovie] = useState([]);
  console.log(movie);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <>
      <body
        className="w-full  relative bg-black"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
          height: 900,
          objectFit: "contain",
        }}
      >
        <div className="h-full w-full top-0 bg-gradient-to-r from-black to-transparent">
          <div className="text-white px-10 space-y-4 pt-64">
            <h1 className="text-3xl lg:text-8xl font-semibold">
              {movie?.title || movie.name || movie.original_name}
            </h1>
            <p className="max-w-md line-clamp-3">{movie.overview}</p>
            <div className="flex space-x-3">
              <button className="button-white rounded-xl h-14 px-8 hover:scale-105 transform transition-all duration-300 shadow-2xl">
                <PlayIcon className="h-6 pr-2" /> Play
              </button>
              <button className="button-light rounded-xl h-14 px-8 bg-opacity-40 hover:scale-105 transform transition-all duration-300 shadow-2xl">
                <PlusIcon className="h-6" />
                Add My List
              </button>
            </div>
          </div>
          <div className="pt-48 px-8">
            <Row
              title="NETFLIX ORIGINALS "
              isLargeRow
              fetchUrl={requests.fetchNetflixOriginals}
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row
              title="Romances Movies"
              fetchUrl={requests.fetchRomanceMovies}
            />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
          </div>
          <Footer />
        </div>
        <div className="h-48 bg-gradient-to-t from-gray-900 to-transparent absolute bottom-0 w-full">
          {""}
        </div>
      </body>
    </>
  );
}

export default Banner;

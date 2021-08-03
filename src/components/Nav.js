import { BeakerIcon, SearchIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitioNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitioNavBar);
    return () => window.removeEventListener("scroll", transitioNavBar);
  }, []);
  return (
    <header
      className={`${
        show && "bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm"
      } z-50 w-full fixed top-0 flex items-center space-x-4 px-10 justify-between`}
    >
      <div>
        <img
          onClick={() => history.push("/")}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          height={120}
          width={120}
          className="cursor-pointer"
        />
      </div>
      <div className="space-x-4 font-semibold text-white flex-grow hidden md:flex">
        <a href="###">TV Show</a>
        <a href="###">Movies</a>
        <a href="###">New & Popular</a>
        <a href="###">My List</a>
      </div>
      <div className="flex space-x-4 items-center">
        <div className="relative cursor-pointer h-12 pr-3 group bg-opacity-0 hover:bg-opacity-30 flex items-center bg-gray-600  justify-center rounded-full transform transition-all duration-300 hover:pl-36">
          <SearchIcon className="h-6 text-white cursor-pointer" />
          <input
            type="text"
            placeholder="Search ..."
            className="text-sm -mr-36 focus:outline-none group-hover:-translate-x-full transform transition duration-300 bg-transparent opacity-0 group-hover:opacity-100"
          />
        </div>
        <img
          onClick={() => history.push("/profile")}
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
          className="h-8 rounded-full cursor-pointer z-50"
        />
      </div>
    </header>
  );
}

export default Nav;

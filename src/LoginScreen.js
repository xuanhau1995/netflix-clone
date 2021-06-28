import { ChevronRightIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import SignUpScreen from "./components/SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <>
      <div className="relative min-h-screen flex justify-center">
        {/* Header */}
        <div className="flex px-4 py-2 items-center z-30 fixed w-full">
          <div className="flex flex-grow">
            <img
              src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              height={150}
              width={150}
            />
          </div>
          <div>
            <button onClick={() => setSignIn(true)} className="button-primary">
              Sign Up
            </button>
          </div>
        </div>
        {/* gird background */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg"
            className="inset-0 object-cover h-full w-full"
          />
          <div className=" h-full top-0 absolute w-full text-opacity-0 bg-gradient-to-b from-gray-900 to-transparent">
            {" "}
          </div>
          <div className=" h-full bottom-0 absolute w-full text-opacity-0 bg-gradient-to-t from-gray-900 to-transparent">
            {" "}
          </div>
        </div>
        {/* Content */}
        <div className="text-white relative flex items-center justify-center flex-col space-y-4 w-full lg:1/2">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1 className="flex justify-center items-center text-6xl text-center">
                Unlimited movies, TV shows, and more.
              </h1>
              <p className="text-3xl">Watch anywhere. Cancel anytime.</p>
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="flex rounded-md h-10 cursor-pointer flex-shrink w-full md:w-2/4 px-10">
                <input
                  type="text"
                  className="rounded-l-md focus:outline-none px-4 text-gray-700 flex flex-grow h-12"
                  placeholder="Your Email"
                />
                <button
                  onClick={() => setSignIn(true)}
                  className="bg-red-600 flex items-center p-2 h-12 rounded-r-md cursor-pointer hover:bg-red-500 transition ease-in "
                >
                  Get Started
                  <ChevronRightIcon className="h-6" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default LoginScreen;

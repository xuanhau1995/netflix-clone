import React, { useRef } from "react";
import { auth } from "../firebase";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="mx-4">
      <div className="bg-black backdrop-filter backdrop-blur-sm w-auto  sm:w-3/12 rounded-xl space-y-4 px-4 sm:p-10 py-10 bg-opacity-30 border border-gray-800">
        <h1 className="text-4xl mb-6">Sign In</h1>
        <div className="relative">
          <input
            ref={emailRef}
            type="text"
            id="email"
            placeholder=" "
            className="peer h-14 pl-4 w-full rounded focus:outline-none  bg-gray-700 rounded-xl bg-opacity-60 border border-gray-600"
          />
          <label
            htmlFor="email"
            className="top-1 text-xs absolute left-[18px] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 transition-all"
          >
            Email
          </label>
        </div>
        <div className="relative">
          <input
            ref={passwordRef}
            type="password"
            id="password"
            placeholder=" "
            className="peer h-14 pl-4 w-full rounded focus:outline-none  bg-gray-700 rounded-xl bg-opacity-60 border border-gray-600"
          />
          <label
            htmlFor="password"
            className="top-1 text-xs absolute left-[18px] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 transition-all"
          >
            Password
          </label>
        </div>
        <div className="pt-5 space-y-4">
          <button
            onClick={signIn}
            type="submit"
            className="button-primary w-full"
          >
            Sign In
          </button>
          <button className="button-outline w-full">Sign In With Google</button>
          <h1 className="flex items-center pt-6">
            <p className="text-gray-500 mr-2">New to Netflix? </p>
            <p onClick={register} className="hover:underline cursor-pointer">
              Sign Up Now
            </p>
          </h1>
          <p className="text-xs text-gray-500 pb-10">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <a
              href="#"
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Learn more.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInScreen;

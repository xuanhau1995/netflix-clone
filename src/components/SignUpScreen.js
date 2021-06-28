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
    <div className="bg-black w-9/12 md:w-3/12 rounded space-y-4 p-10 py-10 bg-opacity-50 border border-gray-700">
      <h1 className="text-4xl mb-6">Sign In</h1>
      <input
        ref={emailRef}
        type="text"
        placeholder="Email"
        className="h-12 pl-4 w-full rounded focus:outline-none  bg-gray-600"
      />
      <input
        ref={passwordRef}
        type="password"
        placeholder="Password"
        className="h-12 pl-4 w-full rounded focus:outline-none bg-gray-600"
      />
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
          <p className="text-gray-500 mr-2">New to Netflix? </p>{" "}
          <p onClick={register} className="hover:underline cursor-pointer">
            Sign Up Now
          </p>
        </h1>
        <p className="text-xs text-gray-500 pb-10">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <a href="#" className="text-blue-600 hover:underline cursor-pointer">
            {" "}
            Learn more.
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignInScreen;

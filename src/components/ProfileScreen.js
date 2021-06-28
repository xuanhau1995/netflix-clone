import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "./Nav";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <>
      <Nav />
      <div className="flex pt-56 justify-center min-h-screen">
        <div className=" justify-between w-full md:w-1/2 p-10">
          <h1 className="text-3xl p-4 border-b border-gray-800">
            Edit Profile
          </h1>
          <div className="flex py-6 space-x-4">
            <img
              className="h-16"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
              alt=""
            />
            <span className="w-full">
              <h1>{user.email}</h1>
              <h1 className="font-semibold text-2xl">Plans (Curren: Plan)</h1>
              <div>
                
              </div>
              <div className="pt-6">
                <button
                  onClick={() => auth.signOut()}
                  className="button-primary w-full"
                >
                  Log Out
                </button>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileScreen;

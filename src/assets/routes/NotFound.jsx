import React from "react";
import { Link } from "react-router-dom";
import AsideMenu from "../components/AsideMenu";

function NotFound() {
  return (
    <>
      <div id="divisor" className="w-full ">
        <div className="w-10/12 mx-auto">
          <div className="flex justify-center">
            <div>
              <AsideMenu />
            </div>
            <div className="w-full m-4 text-hueso">
              <div className="h-full text-center flex flex-col justify-center">
                <span className="text-6xl">Error 404. </span>
                <h2 className="text-xl">
                  Page not found. Try searching again or back to home.
                </h2>
                <Link
                  id="applyBlur"
                  className="hover:opacity-70 my-6 mx-auto w-32 backdrop-blur-xl px-4 py-2 text-xl rounded-lg text-hueso"
                  to="/"
                >
                  HOME
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;

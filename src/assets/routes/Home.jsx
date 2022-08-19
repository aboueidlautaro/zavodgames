import React from "react";
import AsideMenu from "../components/AsideMenu";
import { Link } from "react-router-dom";
import GamesAPI from "../components/GamesAPI";
import FetchAPI from "../components/FetchAPI";

function Home() {
  return (
    <>
      <div id="divisor" className="w-full h-screen">
        <div className="w-full md:w-10/12 mx-auto">
          <div className="flex justify-center">
            <div>
              <AsideMenu />
            </div>

            <FetchAPI />
          </div>
        </div>
      </div>
      <div className="h-screen w-full" />
    </>
  );
}

export default Home;

import React from "react";
import AsideMenu from "../components/AsideMenu";
import { Link } from "react-router-dom";
import GamesAPI from "../components/GamesAPI";
import FetchAPI from "../components/FetchAPI";

function Home() {
  return (
    <>
      <div id="divisor" className="w-full ">
        <div className="w-10/12 mx-auto">
          <div className="flex flexjustify-center">
            <div>
              <AsideMenu />
            </div>

            <FetchAPI />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

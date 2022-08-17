import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="top-0 sticky backdrop-blur-xl">
      <div className="w-full h-22  text-white font-nunito-">
        <div className="h-22 w-full flex justify-around items-center">
          <div>
            <h2 className="text-white font-extrabold font-bebas tracking-widest text-2xl">
              ZVDGames
            </h2>
          </div>
          <div>
            <input
              className="bg-black/30 focus:ring-0 border-none w-96 rounded-xl placeholder:text-white/30  text-white/70 px-6 font-nunito text-sm"
              type="text"
              placeholder="&#xf002; Search games"
            />
          </div>
          <div className="flex justify-center items-center font-nunito">
            <Link className="mx-2" to="/">
              Login
            </Link>
            <Link className="mx-2" to="/">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

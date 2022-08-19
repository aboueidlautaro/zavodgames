import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const ref = useRef();
  let navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");
  function handleKeyUp(event) {
    // Enter
    if (event.keyCode === "Enter") {
      ref.current.submit();
    }
  }
  const onSub = (e) => {
    e.preventDefault();
    navigate("/search/" + busqueda);
    ref.current.reset();
  };

  const onChange = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <header className="top-0 sticky backdrop-blur-xl z-[10000]">
      <div className="w-full h-32 sm:h-22  text-white font-nunito">
        <div className="h-32 sm:h-22 w-full flex flex-col sm:flex-row justify-center sm:justify-around items-center text-center">
          <div className="w-1/4">
            <Link
              className="text-white font-extrabold font-bebas tracking-widest text-3xl sm:text-2xl"
              to="/"
            >
              <h2>ZVDGames</h2>
            </Link>
          </div>
          <div className="w-10/12 sm:w-1/4 mx-auto text-center my-2 sm:my-0">
            <form
              id="form"
              ref={ref}
              onKeyUp={handleKeyUp}
              onSubmit={onSub}
              onChange={(e) => setBusqueda(e.target.value)}
              tabIndex={0}
            >
              <input
                id="inputSearch"
                className="bg-black/30 focus:ring-0 border-none w-full max-w-96 rounded-xl placeholder:text-white/30  text-white/70 px-6 font-nunito text-sm"
                type="text"
                name="inputSearch"
                placeholder="&#xf002; Search games"
              />
            </form>
          </div>
          <div className="w-full sm:w-1/4 sm:flex justify-center items-center font-nunito">
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

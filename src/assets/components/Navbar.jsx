import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const onClick = () => {
    const aside = window.document.getElementById("asideresponsive");
    if (aside.classList.contains("hidden")) {
      aside.classList.remove("hidden");
      aside.classList.remove("animate__fadeOutUp");
      aside.classList.add("animate__fadeInDown");
    } else {
      aside.classList.remove("animate__fadeInDown");
      aside.classList.add("animate__fadeOutUp");
      setTimeout(() => {
        aside.classList.add("hidden");
      }, 500);
    }
  };

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
    <header
      id="applyBlur"
      className="top-0 w-full fixed backdrop-blur-xl z-[10000]"
    >
      <div className="w-full h-36 sm2:h-22  text-white font-nunito">
        <div className="h-36 sm2:h-22 w-full flex flex-col sm2:flex-row justify-center sm2:justify-around items-center text-center">
          <div className="w-1/4">
            <Link
              className="text-white font-extrabold font-bebas tracking-widest text-3xl sm2:text-2xl"
              to="/"
            >
              <h2>ZVDGames</h2>
            </Link>
          </div>
          <div className="w-full mx-auto text-center my-2 sm2:my-0 justify-center">
            <div className="mx-auto w-10/12 sm2:w-full flex justify-evenly items-center">
              <form
                id="form"
                ref={ref}
                onKeyUp={handleKeyUp}
                onSubmit={onSub}
                onChange={(e) => setBusqueda(e.target.value)}
                tabIndex={0}
                className="w-full mx-4 "
              >
                <input
                  id="inputSearch"
                  className="bg-black/30 focus:ring-0 border-none w-full max-w-96 rounded-xl placeholder:text-white/30  text-white/70 px-6 font-nunito text-sm mx-2"
                  type="text"
                  name="inputSearch"
                  placeholder="&#xf002; Search games"
                />
              </form>
              <button
                id="btnHamburguer"
                className="sm2:hidden ml-3 p-3 bg-hueso text-black rounded-md rotate-90"
                onClick={onClick}
              >
                III
              </button>
            </div>
          </div>
          <div className="w-full sm2:w-1/4 sm2:flex justify-center items-center font-nunito">
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

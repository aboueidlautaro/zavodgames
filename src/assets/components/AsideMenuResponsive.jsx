import React from "react";
import { Link } from "react-router-dom";

function AsideMenuResponsive() {
  return (
    <>
      <aside
        id="asideresponsive"
        className="animate__animated hidden sm2:hidden w-full top-36 text-hueso z-[9999] fixed backdrop-blur-xl"
      >
        <div
          id="asidemenu-container"
          className="w-full text-center min-h-[600px] h-auto flex flex-col rounded-md items-center justify-center backdrop-blur-xl "
        >
          <div className="m-5 h-full p-5 flex flex-col gap-y-2 w-2/12 items-center justify-center">
            <Link className="text-2xl font-bold" to="/">
              Home
            </Link>
            <Link className="text-2xl font-bold" to="/">
              All Games
            </Link>
            <section>
              <h2 className="text-2xl font-bold">Genres</h2>
              <article className="flex flex-col">
                <Link to="/">Action</Link>
                <Link to="/">Racing</Link>
                <Link to="/">Multiplayer</Link>
                <Link to="/">RPG</Link>
                <Link to="/">Cards</Link>
              </article>
            </section>
            <section>
              <h2 className="text-2xl font-bold">Platforms</h2>
              <article className="flex flex-col">
                <Link to="/">PC</Link>
                <Link to="/">Xbox</Link>
                <Link to="/">Playstation</Link>
                <Link to="/">Android</Link>
                <Link to="/">iOS</Link>
              </article>
            </section>
          </div>
        </div>
      </aside>
    </>
  );
}

export default AsideMenuResponsive;

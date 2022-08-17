import React from "react";
import { Link } from "react-router-dom";

function AsideMenu() {
  return (
    <>
      <aside className="top-24 sticky col-span-1 text-hueso">
        <div
          id="asidemenu-container"
          className="w-56 min-h-[600px] h-auto m-3 rounded-md backdrop-blur-xl "
        >
          <div className="p-5 flex flex-col gap-y-2">
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

export default AsideMenu;

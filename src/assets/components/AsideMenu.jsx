import React from "react";
import { Link } from "react-router-dom";
// react icons
import { GiShardSword } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiPotionBall } from "react-icons/gi";
import { GiCardJoker } from "react-icons/gi";
// font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXbox } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faPlaystation } from "@fortawesome/free-brands-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

function AsideMenu() {
  return (
    <>
      <aside className="hidden sm2:block top-24 sticky col-span-1 text-hueso">
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
              <article className="flex flex-col my-2 ml-3">
                <Link className="flex items-center" to="/">
                  <GiShardSword className="mr-1" /> Action
                </Link>
                <Link className="flex items-center" to="/">
                  <FaCar className="mr-1" /> Racing
                </Link>
                <Link className="flex items-center" to="/">
                  <BsFillPeopleFill className="mr-1" />
                  Multiplayer
                </Link>
                <Link className="flex items-center" to="/">
                  <GiPotionBall className="mr-1" />
                  RPG
                </Link>
                <Link className="flex items-center" to="/">
                  <GiCardJoker className="mr-1" />
                  Cards
                </Link>
              </article>
            </section>
            <section>
              <h2 className="text-2xl font-bold">Platforms</h2>
              <article className="flex flex-col my-2 ml-3">
                <Link to="/">
                  <FontAwesomeIcon icon={faDesktop} /> PC
                </Link>
                <Link to="/">
                  <FontAwesomeIcon icon={faXbox} /> Xbox
                </Link>
                <Link to="/">
                  <FontAwesomeIcon icon={faPlaystation} /> Playstation
                </Link>
                <Link to="/">
                  <FontAwesomeIcon icon={faAndroid} /> Android
                </Link>
                <Link to="/">
                  <FontAwesomeIcon icon={faApple} /> iOS
                </Link>
              </article>
            </section>
          </div>
        </div>
      </aside>
    </>
  );
}

export default AsideMenu;

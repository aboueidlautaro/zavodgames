import React from "react";
import { Link } from "react-router-dom";
import {
  faAndroid,
  faApple,
  faLinux,
  faPlaystation,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import "moment/locale/es";
import DivDetailsHover from "./DivDetailsHover";

function GamesAPISearch({ results = [] }) {
  return (
    <>
      {results.map((value, index) => {
        const date = value.released;
        return (
          <div
            className="relative w-full  hover:z-[1000] hover:transition-all transition-all gap-5 mb-2 mx-auto z-0"
            key={index}
          >
            <div
              id="applyBlur"
              className="card text-center text-hueso w-11/12 sm:w-60 bg-red-200 h-auto gap-5 rounded-md pb-2 hover:relative sm:hover:absolute
              m-2 mx-auto"
            >
              <img
                className="sm:h-36 w-full object-cover object-center rounded-t-md "
                src={value.background_image}
                alt=""
              />
              <div className="flex justify-center p-2 text-sm">
                {value.platforms.map((valor, index) => {
                  return (
                    <div key={index}>
                      {(() => {
                        switch (valor.platform.slug) {
                          case "xbox-series-x" ||
                            "xbox360" ||
                            "xbox-old" ||
                            "xbox-one":
                            return (
                              <span className="mx-1">
                                <FontAwesomeIcon icon={faXbox} />
                              </span>
                            );
                          case "pc":
                            return (
                              <span className="mx-1">
                                <FontAwesomeIcon icon={faDesktop} />
                              </span>
                            );
                          case "playstation4" ||
                            "playstation3" ||
                            "playstation2" ||
                            "playstation" ||
                            "ps-vita" ||
                            "psp":
                            return (
                              <span className="mx-1">
                                <FontAwesomeIcon icon={faPlaystation} />
                              </span>
                            );
                          case "nitendo-switch" ||
                            "nintendo-dsi" ||
                            "nintendo-ds" ||
                            "nintendo-3ds" ||
                            "nintendo-64":
                            return (
                              <span className="mx-1">
                                <FontAwesomeIcon icon={faGamepad} />
                              </span>
                            );
                          case "apple" || "macos" || "macintosh" || "apple-ii":
                            return (
                              <span className="mx-1">
                                <FontAwesomeIcon icon={faApple} />
                              </span>
                            );
                          case "android":
                            return (
                              <span className="mx-1">
                                <FontAwesomeIcon icon={faAndroid} />
                              </span>
                            );
                          case "linux":
                            return (
                              <span className="mx-1">
                                <FontAwesomeIcon icon={faLinux} />
                              </span>
                            );
                        }
                      })()}
                    </div>
                  );
                })}
              </div>
              <Link to={`/games/${value.slug}`}>
                <h2 className="mx-auto w-11/12 text-xl font-bold font-josefin">
                  {value.name}
                </h2>
              </Link>
              <div className=" flex justify-between px-4 mt-3">
                <span className="bg-black/20 px-2 py-1 rounded-md  text-xs text-white/80">
                  Valoration
                </span>
                {(() => {
                  if (value.metacritic > 75) {
                    return (
                      <span className="rounded-md px-2 py-1 text-xs border-2 border-green-500">
                        {value.metacritic}
                      </span>
                    );
                  } else if (value.metacritic > 50) {
                    return (
                      <span className="rounded-md px-2 py-1 text-xs border-2 border-yellow-500">
                        {value.metacritic}
                      </span>
                    );
                  } else {
                    return (
                      <span className="rounded-md px-2 py-1 text-xs border-2 border-red-500">
                        {value.metacritic === null ? "0" : value.metacritic}
                      </span>
                    );
                  }
                })()}
              </div>
              <div className="hidden  cardtext px-4">
                <DivDetailsHover
                  title="Release date"
                  value={moment(date).format("LL")}
                />
                <div className="flex justify-between">
                  <span className="bg-black/20 px-2 py-1 rounded-md  text-xs text-white/80">
                    Genres
                  </span>
                  <div>
                    {value.genres.map((generos, index) => {
                      return (
                        <>
                          <span className="inline m-1 text-xs text-white underline">
                            {generos.name}
                          </span>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default GamesAPISearch;

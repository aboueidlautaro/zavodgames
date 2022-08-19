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

function GamesAPISearch({ results = [], errorMessage, loading }) {
  return (
    <div className="w-full m-4 grid grid-cols-4">
      <h2 className="text-center text-3xl text-white font-bold font-josefin">
        Search results
      </h2>
      <div className="mx-auto text-hueso col-span-1">
        <h3>{errorMessage}</h3>
      </div>
      {(() => {
        if (loading === true) {
          return (
            <h3 className="text-center mx-auto text-white flex flex-col justify-center text-2xl">
              Loading...
            </h3>
          );
        } else {
          return (
            <div>
              {results.map((value, index) => {
                return (
                  <div key={index}>
                    <div className="text-center text-hueso">
                      <Link to={`/games/${value.slug}`}>
                        <h2>{value.name}</h2>
                      </Link>
                      <small>{value.released}</small>
                      <div className="flex justify-center text-xs">
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
                                  case "apple" ||
                                    "macos" ||
                                    "macintosh" ||
                                    "apple-ii":
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
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }
      })()}
    </div>
  );
}

export default GamesAPISearch;

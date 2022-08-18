import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXbox } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faPlaystation } from "@fortawesome/free-brands-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faLinux } from "@fortawesome/free-brands-svg-icons";

import { BrowserRouter as Router, Link } from "react-router-dom";

function GamesAPI({ results = [] }) {
  return (
    <>
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
            </div>
          </div>
        );
      })}
    </>
  );
}

export default GamesAPI;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXbox } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

function GamesAPI({ results = [] }) {
  return (
    <>
      {results.map((value, index) => {
        return (
          <div key={index}>
            <div className="text-center text-hueso">
              <h2>{value.name}</h2>
              <small>{value.released}</small>
              {value.platforms.map((valor, id) => {
                {
                  (() => {
                    switch (valor.platform.slug) {
                      case "xbox":
                        return (
                          <p>
                            <FontAwesomeIcon icon={faXbox} />
                          </p>
                        );
                      case "pc":
                        return (
                          <p>
                            <FontAwesomeIcon icon={faDesktop} />
                          </p>
                        );
                    }
                  })();
                }
                return (
                  <div key={id}>
                    <span>{valor.platform.slug}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default GamesAPI;

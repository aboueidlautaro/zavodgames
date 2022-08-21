import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AsideMenu from "./AsideMenu";
import { Markup } from "interweave";
import ImageModal from "./ImageModal";

function IndividualGame({ results = [] }) {
  const { slug } = useParams();

  const [screenData, setScreenData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const gameScreenshotsUrl = `https://api.rawg.io/api/games/${slug}/screenshots?key=2173826c4a9a4f7fabc6bcfdd67008e7`;

  const gameScreenshotsData = (url) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setScreenData(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(null);
      });
  };

  useEffect(() => {
    gameScreenshotsData(gameScreenshotsUrl);
  }, [gameScreenshotsUrl]);

  return (
    <>
      {results.map((value) => {
        return (
          <div key={value.id}>
            <img
              id="imgBackgroundGamePage"
              className="absolute h-auto"
              src={value.background_image}
              alt=""
            />

            <div className="w-full md:w-10/12 mx-auto text-hueso">
              <div className="flex justify-center">
                <div>
                  <AsideMenu />
                </div>
                <div className="font-josefin mt-5 text-center w-full md:w-10/12 mx-auto">
                  <div className="w-10/12 mx-auto text-left">
                    <Link className="hover:opacity-80" to="/">
                      Home
                    </Link>
                    <span> / </span>
                    <Link className="hover:opacity-80" to="/">
                      Games
                    </Link>
                    <span> / {value.name}</span>
                  </div>
                  <div className="mt-5">
                    <a href={value.website} className="text-6xl">
                      <h2>{value.name}</h2>
                    </a>
                  </div>
                  <section className="container-gallery-game w-11/12 sm2:w-10/12">
                    <div className="container-galley-game-images gap-2 rounded-xl">
                      {screenData.map((value) => {
                        return <ImageModal src={value.image} />;
                      })}
                    </div>
                  </section>
                  <div className="w-9/12 mx-auto font-josefin">
                    <h3 className="text-4xl font-black">About</h3>
                    <Markup
                      className=" font-nunito text-xl text-justify"
                      content={value.description}
                    />
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

export default IndividualGame;

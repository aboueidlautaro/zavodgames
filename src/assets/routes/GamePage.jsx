import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AsideMenu from "../components/AsideMenu";
import IndividualGame from "../components/IndividualGame";

function GamePage() {
  const { slug } = useParams();
  const [indGame, setIndGame] = useState([]);

  const gameUrl = `https://api.rawg.io/api/games/${slug}?key=2173826c4a9a4f7fabc6bcfdd67008e7&page_size=24`;

  const gameData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIndGame(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let results = [indGame];

  useEffect(() => {
    gameData(gameUrl);
  }, []);
  return (
    <>
      <div id="divisor" className="w-full ">
        <div className="grid grid-cols-5 w-5/6 mx-auto">
          <div className="md:col-span-1">
            <AsideMenu />
          </div>
          <div className="col-span-5 md:col-span-4 p-5">
            <IndividualGame results={results} />
          </div>
        </div>
      </div>
    </>
  );
}

export default GamePage;

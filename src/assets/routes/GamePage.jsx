import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IndividualGame from "../components/IndividualGame";

function GamePage() {
  const { slug } = useParams();
  const [indGame, setIndGame] = useState([]);

  const gameUrl = `https://api.rawg.io/api/games/${slug}?key=2173826c4a9a4f7fabc6bcfdd67008e7`;

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
      <IndividualGame results={results} />
    </>
  );
}

export default GamePage;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import IndividualGame from "../components/IndividualGame";
import IndividualGameSkeleton from "../components/IndividualGameSkeleton";

function GamePage() {
  const { slug } = useParams();
  const [indGame, setIndGame] = useState([]);
  const [loading, setLoading] = useState(true);

  const gameUrl = `https://api.rawg.io/api/games/${slug}?key=2173826c4a9a4f7fabc6bcfdd67008e7&page_size=24`;

  const gameData = (url) => {
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setIndGame(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }),
      5000;
  };
  let results = [indGame];

  useEffect(() => {
    gameData(gameUrl);
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <IndividualGameSkeleton />
        ) : (
          <IndividualGame results={results} />
        )}
      </div>
    </>
  );
}

export default GamePage;

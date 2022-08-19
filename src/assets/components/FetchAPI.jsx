import React, { useEffect, useState } from "react";
import axios from "axios";
import GamesAPI from "./GamesAPI";
import Pagination from "./Pagination";

function FetchAPI() {
  const [games, setGames] = useState([]);
  const [prev, setPrev] = useState({});
  const [next, setNext] = useState({});
  const [search, setSearch] = useState("");
  const initialUrl =
    "https://api.rawg.io/api/games?key=2173826c4a9a4f7fabc6bcfdd67008e7&page_size=20";

  const ApiData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGames(data.results);
        setPrev(data.previous);
        setNext(data.next);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let results = [];
  if (!search) {
    results = games;
  } else {
    results = games.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  const onPrevious = () => {
    ApiData(prev);
  };
  const onNext = () => {
    ApiData(next);
  };
  const searcher = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    ApiData(initialUrl);
  }, []);

  return (
    <>
      <div className="flex flex-col mx-auto">
        <div>
          <Pagination
            prev={prev}
            next={next}
            onPrevious={onPrevious}
            onNext={onNext}
          />
        </div>
        <div className="w-full m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <GamesAPI results={results} />
        </div>
        <div>
          <Pagination
            prev={prev}
            next={next}
            onPrevious={onPrevious}
            onNext={onNext}
          />
        </div>
      </div>
    </>
  );
}

export default FetchAPI;

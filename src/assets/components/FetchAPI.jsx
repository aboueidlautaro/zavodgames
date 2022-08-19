import React, { useEffect, useState } from "react";
import axios from "axios";
import GamesAPI from "./GamesAPI";
import Pagination from "./Pagination";

function FetchAPI() {
  const [games, setGames] = useState([]);
  const [prev, setPrev] = useState({});
  const [next, setNext] = useState({});
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const initialUrl =
    "https://api.rawg.io/api/games?key=2173826c4a9a4f7fabc6bcfdd67008e7&page_size=24";

  const ApiData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGames(data.results);
        setPrev(data.previous);
        setNext(data.next);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage("There is no result for your search.");
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
        {loading ? (
          <h2 className=" h-full w-full flex justify-center items-center text-2xl text-hueso">
            Loading games...
          </h2>
        ) : (
          <div>
            <div>
              <Pagination
                prev={prev}
                next={next}
                onPrevious={onPrevious}
                onNext={onNext}
              />
            </div>
            <div className="w-full my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md2:grid-cols-4">
              <GamesAPI
                results={results}
                loading={loading}
                errorMessage={errorMessage}
                prev={prev}
                next={next}
              />
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
        )}
      </div>
    </>
  );
}

export default FetchAPI;

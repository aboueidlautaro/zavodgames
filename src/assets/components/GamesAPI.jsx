import React from "react";

function GamesAPI({ results = [] }) {
  return (
    <>
      {results.map((value, index) => (
        <div key={index}>
          <div className="text-center">
            <p>{value.id}</p>
            <p>{value.name}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default GamesAPI;

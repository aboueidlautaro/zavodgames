import React from "react";

function IndividualGame({ results = [] }) {
  return (
    <>
      {results.map((value, index) => {
        return (
          <div key={index}>
            <div className="text-center text-hueso">
              <h2>{value.name}</h2>
              <span></span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default IndividualGame;

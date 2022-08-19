import React from "react";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePreview = () => {
    onPrevious();
  };
  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul className="text-center mt-5 text-hueso font-nunito">
        {prev ? (
          <li className="inline-block ">
            <button
              id="applyBlur"
              className="px-4 py-1 mx-2 rounded-lg"
              onClick={handlePreview}
            >
              Volver
            </button>
          </li>
        ) : (
          <li className="inline-block ">
            <button
              id="applyBlur"
              className="px-4 py-1 mx-2 rounded-lg opacity-50"
              disabled
              onClick={handlePreview}
            >
              Volver
            </button>
          </li>
        )}
        {next ? (
          <li className="inline-block ">
            <button
              id="applyBlur"
              className="px-4 py-1 mx-2 rounded-lg"
              onClick={handleNext}
            >
              Siguiente
            </button>
          </li>
        ) : (
          <li className="inline-block ">
            <button
              id="applyBlur"
              className="px-4 py-1 mx-2 rounded-lg opacity-50"
              disabled
              onClick={handleNext}
            >
              Siguiente
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Pagination;

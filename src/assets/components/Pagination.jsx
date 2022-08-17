import React from "react";

const btnBlack =
  "mx-2 text-xl text-white bg-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-500 dark:hover:bg-gray-700 dark:focus:ring-gray-800";

const btnBlackDisabled =
  "mx-2 text-xl text-white bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-500 dark:hover:bg-gray-700 dark:focus:ring-gray-800";

const btnGray =
  "mx-2 text-xl text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-500 dark:hover:bg-gray-700 dark:focus:ring-gray-800";

const btnGrayDisabled =
  "mx-2 text-xl text-white bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-500 dark:hover:bg-gray-700 dark:focus:ring-gray-800";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePreview = () => {
    onPrevious();
  };
  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul className="text-center my-4">
        {prev ? (
          <li className="inline-block ">
            <button className={btnGray} onClick={handlePreview}>
              Volver
            </button>
          </li>
        ) : (
          <li className="inline-block ">
            <button
              className={btnGrayDisabled}
              disabled
              onClick={handlePreview}
            >
              Volver
            </button>
          </li>
        )}
        {next ? (
          <li className="inline-block ">
            <button className={btnBlack} onClick={handleNext}>
              Siguiente
            </button>
          </li>
        ) : (
          <li className="inline-block ">
            <button className={btnBlackDisabled} disabled onClick={handleNext}>
              Siguiente
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Pagination;

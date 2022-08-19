import React from "react";
import AsideMenu from "../components/AsideMenu";

import FetchAPISearch from "../components/FetchAPISearch";

function SearchPage() {
  return (
    <>
      <div id="divisor" className="w-full ">
        <div className="w-10/12 mx-auto">
          <div className="flex flexjustify-center">
            <div>
              <AsideMenu />
            </div>

            <FetchAPISearch />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPage;

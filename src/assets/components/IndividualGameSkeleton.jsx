import React from "react";

import { Skeleton } from "@mui/material";
import AsideMenu from "./AsideMenu";
import { Link } from "react-router-dom";
import { Markup } from "interweave";

function IndividualGameSkeleton() {
  return (
    <>
      <div>
        <div className="w-full md:w-10/12 mx-auto text-hueso">
          <div className="flex justify-center">
            <div>
              <AsideMenu />
            </div>
            <div className="font-josefin mt-5 text-center w-full md:w-10/12 mx-auto">
              <div className="w-10/12 mx-auto text-left flex items-center">
                <Link className="mx-1 hover:opacity-80" to="/">
                  Home
                </Link>
                <span> / </span>
                <Link className="mx-1 hover:opacity-80" to="/">
                  Games
                </Link>
                <span className="mx-1 "> / </span>
                <span className="w-16 inline-block">
                  <Skeleton animation="wave" variant="text"></Skeleton>
                </span>
              </div>

              <div className="w-1/2 mx-auto mt-5">
                <Skeleton animation="wave" variant="h1">
                  <h2 className="text-center w-screen text-6xl">name game</h2>{" "}
                </Skeleton>
              </div>

              <section className="container-gallery-game w-11/12 sm2:w-10/12">
                <div className="container-galley-game-images gap-2 rounded-xl">
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    width="100%"
                    height="100%"
                  >
                    <img
                      className="w-full h-48 sm2:h-96 md:h-96 md2:h-[600px]"
                      src=""
                      alt=""
                    />
                  </Skeleton>
                  <div className="w-full flex gap-5">
                    <Skeleton
                      animation="wave"
                      variant="rect"
                      width="20%"
                      height={80}
                    ></Skeleton>
                    <Skeleton
                      animation="wave"
                      variant="rect"
                      width="20%"
                      height={80}
                    ></Skeleton>
                    <Skeleton
                      animation="wave"
                      variant="rect"
                      width="20%"
                      height={80}
                    ></Skeleton>
                    <Skeleton
                      animation="wave"
                      variant="rect"
                      width="20%"
                      height={80}
                    ></Skeleton>
                    <Skeleton
                      animation="wave"
                      variant="rect"
                      width="20%"
                      height={80}
                    ></Skeleton>
                  </div>
                </div>
              </section>
              <div className="w-9/12 mx-auto font-josefin">
                <h3 className="text-4xl font-black">About</h3>
                <Skeleton width="100%" height={500}>
                  <Markup
                    className=" font-nunito text-xl text-justify"
                    content={"<p>hola</p>"}
                  />
                </Skeleton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default IndividualGameSkeleton;

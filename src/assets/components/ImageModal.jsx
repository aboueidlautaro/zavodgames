import React, { useState } from "react";

function ImageModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className="image-gallery-game rounded-xl active:opacity-70"
      >
        <img className="rounded-xl" src={props.src}></img>
      </button>
      {show === false ? (
        <div className="hidden bg-black/20 h-screen w-screen top-0 left-0 absolute">
          <div className="animate__animated animate__backInDown left-4 sm:left-6 lg:left-24 top-24 absolute mx-auto w-11/12 h-[calc(100vh-120px)] bg-red-200">
            <img className="h-auto w-full cover" src={props.src} />
            <button className="active:bg-gray-900 hover:opacity-70 transition-all delay-50 absolute top-4 mx-auto bg-gray-700 px-6 py-4 rounded-full">
              Close
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={handleClose}
          className="bg-black/80 h-screen w-screen top-0 left-0 absolute"
        >
          <div className="animate__animated animate__backInDown left-8 sm:left-12 md:left-24 lg:left-[130px] top-72 sm:top-56 sm2:top-24 absolute mx-auto w-11/12 h-[calc(100vh-10px)]">
            <img className="h-auto w-11/12 object-cover" src={props.src} />
            <button
              onClick={handleClose}
              className="hidden md2:inline-block active:bg-gray-900 hover:opacity-70 transition-all delay-50 absolute top-4 -translate-x-16 sm:-translate-x-24 sm2:-translate-x-20 md:-translate-x-28 lg:-translate-x-28 left-2/4 bg-gray-700 px-6 py-4 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageModal;

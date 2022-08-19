import React from "react";
import { Link } from "react-router-dom";

function DivDetailsHover(props) {
  return (
    <div className="py-1 flex justify-between">
      <span className="bg-black/40 px-2 py-1 rounded-md  text-xs text-white/80">
        {props.title}
      </span>
      <Link className="text-xs" to="/">
        {props.value}
      </Link>
    </div>
  );
}

export default DivDetailsHover;

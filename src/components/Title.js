import React from "react";
import uuid from "uuid/v4";
export const Title = props => {
  let str = props.text;
  let arr = str.split("");
  let title = arr.map(x =>
    x !== " " ? (
      <span key={uuid()} className="jump-target">
        {x}
      </span>
    ) : (
      " "
    )
  );
  setTimeout(() => {
    const jumpy = document.querySelectorAll(".jump-target");
    jumpy.forEach(x => {
      x.addEventListener("mouseover", () => x.classList.add("jump"));
      x.addEventListener("animationend", () => x.classList.remove("jump"));
    });
  });
  return title;
};

import { useRef } from "react";
import "./ok.css";
import gsap from "gsap";

import toto from "../../assets/morty.png";

const IMAGES = [
  "url(https://images.unsplash.com/photo-1701467447993-9d000cc7a579?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  "url(https://images.unsplash.com/photo-1548413935-a7d015ff5865?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  `url(${toto})`,
  "url(https://images.unsplash.com/photo-1701076177587-aeabca50f9fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  "url(https://images.unsplash.com/photo-1561344640-2453889cde5b?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
];

const BIG_IMAGE_WIDTH = "36vw";
const MIDDLE_IMAGE_WIDTH = "15vw";
const SMALL_IMAGE_WIDTH = "10vw";

function Gsap() {
  const ref = useRef<HTMLDivElement[]>(new Array(IMAGES.length));

  function handleClick(position: number) {
    const clickedElement = ref.current[position];
    const clicked =
      clickedElement.getAttribute("clicked") === "true" ? "false" : "true";
    clickedElement.setAttribute("clicked", clicked);
    const isClicked = clicked === "true";

    gsap.to(clickedElement, {
      width: isClicked ? BIG_IMAGE_WIDTH : MIDDLE_IMAGE_WIDTH,
      duration: 2.5,
      ease: "elastic(1, .3)",
    });

    ref.current.forEach((el, idx) => {
      if (idx === position) return;
      el.setAttribute("clicked", "false");
      gsap.to(el, {
        width: isClicked ? SMALL_IMAGE_WIDTH : MIDDLE_IMAGE_WIDTH,
        duration: 2,
        ease: "elastic(1, .6)",
      });
    });
  }

  return (
    <>
      <div className="group">
        {IMAGES.map((img, idx) => (
          <div
            key={idx}
            className="item"
            ref={(el) => {
              if (!ref.current[idx] && el) {
                el.setAttribute("clicked", "false");
                ref.current[idx] = el;
              }
            }}
            onClick={() => handleClick(idx)}
            style={{ backgroundImage: img }}
          />
        ))}
      </div>
      <a href="https://codepen.io/supah/pen/rNKraQJ" target="_blank">
        <span>Source</span>
      </a>
    </>
  );
}

export default Gsap;

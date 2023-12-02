import { useState } from "react";

function Hyperplexed() {
  const [currentTitle, setTitle] = useState<string>("HYPERPLEXED");

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //   let interval = null;

  function handleMouseOver(): void {
    let iteration = 0;
    const interval = setInterval(() => {
      const changeTitle = currentTitle
        .split("")
        .map((_, index) => {
          if (index < iteration) {
            return currentTitle[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= currentTitle.length) clearInterval(interval);

      iteration += 1 / 3;

      setTitle(`${changeTitle}`);
    }, 30);
  }

  return (
    <>
      <p className="hyperplexedTitle" onMouseOver={handleMouseOver}>
        {currentTitle}
      </p>
      <a href="https://kprverse.com" target="_blank">
        <span>Source</span>
      </a>
      <a href="https://youtu.be/W5oawMJaXbU" target="_blank">
        <span>2 min tutorial</span>
      </a>
      <a href="https://codepen.io/Hyperplexed/pen/rNrJgrd" target="_blank">
        <span>codepen</span>
      </a>
    </>
  );
}

export default Hyperplexed;

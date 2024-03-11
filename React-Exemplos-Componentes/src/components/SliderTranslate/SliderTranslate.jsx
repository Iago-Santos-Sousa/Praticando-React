import React, { useState } from "react";
import "./SliderTranslate.css";

const SliderTranslate = () => {
  const [slidePosition, setSlidePosition] = useState(0);

  const slideNavigation = (e) => {
    const direction = e.target.value;
    // console.log({ direction });

    direction === "next"
      ? setSlidePosition(slidePosition <= -87.5 ? -87.5 : slidePosition - 12.5)
      : setSlidePosition(slidePosition === 0 ? 0 : slidePosition + 12.5);
  };

  console.log({ slidePosition });

  return (
    <div className="s-wrapper">
      <button
        value="prev"
        onClick={(e) => slideNavigation(e)}
        disabled={slidePosition === 0 && true}
      >
        Prev
      </button>
      <div className="s-content">
        <div
          className="s-contents"
          style={{
            transform: `translateX(${slidePosition}rem)`,
            transition: "0.4s",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((element, i) => (
            <button key={`${element}-${i}`} className="btn">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              quis itaque optio?
            </button>
          ))}
        </div>
      </div>
      <button
        value="next"
        onClick={(e) => slideNavigation(e)}
        disabled={slidePosition === -87.5 && true}
      >
        Next
      </button>
    </div>
  );
};

export default SliderTranslate;

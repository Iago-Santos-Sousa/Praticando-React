import "./ToolTip.css";
import { useState } from "react";

const ToolTip = () => {
  // const [hoveredElement, setHoverElement] = useState(null);

  const tooltipStyle = {
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
  };

  const tooltiptextStyle = {
    visibility: "hidden",
    width: "120px",
    backgroundColor: "black",
    color: "#fff",
    textAlign: "center",
    borderRadius: "6px",
    padding: "5px 0",
    position: "absolute",
    zIndex: 1,
    bottom: "100%",
    left: "50%",
    marginLeft: "-60px",
    opacity: 0,
    transition: "all 1s",
  };

  const handleMouseOver = (e) => {
    const firstElementChild = e.target.firstElementChild;

    if (firstElementChild && firstElementChild.style) {
      e.target.style.color = "red";
      e.target.style.transition = "color ease-out 1s";
      e.target.firstElementChild.style.visibility = "visible";
      e.target.firstElementChild.style.opacity = "1";
    }
  };

  const handleMouseOut = (e) => {
    const firstElementChild = e.target.firstElementChild;

    if (firstElementChild && firstElementChild.style) {
      e.target.style.color = "initial";

      e.target.firstElementChild.style.visibility = tooltiptextStyle.visibility;
      e.target.firstElementChild.style.opacity = tooltiptextStyle.opacity;
    }
  };

  return (
    <div
      id="tooltip"
      onMouseOver={(e) => handleMouseOver(e)}
      onMouseOut={(e) => handleMouseOut(e)}
      style={tooltipStyle}
    >
      Hover over me ToolTip
      <span className="tooltiptext" style={tooltiptextStyle}>
        ToolTip text
      </span>
    </div>
  );
};

export default ToolTip;

import "./ToolTip.css";
import { useState } from "react";

const tooltipStyle = {
  position: "relative",
  display: "block",
  cursor: "pointer",
  width: "max-content",
  margin: "0 auto",
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

const ToolTip = () => {
  // const [hoveredElement, setHoverElement] = useState(null);

  const handleMouseOver = (e) => {
    const firstElementChild = e.target.firstElementChild;

    if (firstElementChild && firstElementChild.style) {
      e.target.style.color = "red";
      e.target.style.transition = "color ease-out 1s";
      e.target.firstElementChild.style.visibility = "visible";
      e.target.firstElementChild.style.opacity = "1";
      e.target.firstElementChild.style.position = "absolute";
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

import { useState } from "react";

const LikeButton = () => {
  const [color, setColor] = useState(false); // false = not liked
  const [edgeColor, setEdgeColor] = useState(false); // false = black border

  const handleBackGround = () => {
    setColor((prev) => !prev);
  };

  const handleMouseEnter = () => {
    setEdgeColor(true);
  };

  const handleMouseLeave = () => {
    setEdgeColor(false);
  };

  const buttonStyle = {
    backgroundColor: color ? "red" : "white",
    border: edgeColor
      ? "2px solid red"
      : color
      ? "2px solid red"
      : "2px solid gray",
    color: color ? "white" : edgeColor ? "red" : "gray",
    borderRadius: "20px",
    padding: "8px 16px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  const heartStyle = {
    color: color ? "white" : edgeColor ? "red" : "gray",
    marginRight: "8px",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <button
        style={buttonStyle}
        onClick={handleBackGround}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span style={heartStyle}>{color ? '🤍' : '❤️' }</span>
         Like
      </button>
    </div>
  );
};

export default LikeButton;

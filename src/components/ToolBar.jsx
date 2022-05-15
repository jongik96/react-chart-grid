import React from "react";
import { Link } from "react-router-dom";
function ToolBar() {
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "8px 8px 8px 25px",
              fontWeight: "700",
        color: "white"
      }}
    >
      <Link to="/chart" style={{ textDecoration: "none", margin: "0 5px" }}>
        Chart
      </Link>{" "}
      |{" "}
      <Link to="/grid" style={{ textDecoration: "none", margin: "0 5px" }}>
        Grid
      </Link>{" "}
      
    </div>
  );
}

export default ToolBar;
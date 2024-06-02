import React from "react";
import { useParams } from "react-router-dom";

const HSL = () => {
  const { h, s, l } = useParams();
  return (
    <div style={{ backgroundColor: `hsl(${h}, ${s}%, ${l}%)` }}>
      HSL({h}, {s}, {l})
    </div>
  );
};

export default HSL;

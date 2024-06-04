import "../assets/app.module.css";
import { motion, useAnimation } from "framer-motion";
// import { routeAnimations } from "../constants/routes";
import { useEffect } from "react";

const HSL = ({ name, sign, position }) => {
  // const { h, s, l } = useParams();
  const controls = useAnimation();

  useEffect(() => {
    const newPosition = {
      x: Math.random() * (window.innerWidth - window.innerWidth * 0.1),
      y: Math.random() * (window.innerHeight - window.innerHeight * 0.1),
    };
    controls.start(newPosition);
  }, [position]);

  console.log("position?", position);
  return (
    <motion.div
      // variants={routeAnimations}
      // initial="initial"
      // animate="final"
      // className="colorPage"
      layout
      animate={controls}
      style={{
        // position: 'absolute',
        borderRadius: "50%",
        width: "100px",
        height: "100px",
        background: "blue",
      }}
    >
      <div>{name}</div>
      <div>{sign}</div>
    </motion.div>
  );
};

export default HSL;

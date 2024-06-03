import "../assets/app.module.css";
import { motion, useAnimation } from "framer-motion";
import { routeAnimations } from "../constants/routes";
import { useEffect } from "react";

const HSL = ({ position }) => {
  // const { h, s, l } = useParams();
  const controls = useAnimation();

  useEffect(() => {
    const newPosition = {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }
    controls.start(newPosition);
  }, [position]);

  console.log("HSL");
  return (
    <motion.div
      // variants={routeAnimations}
      // initial="initial"
      // animate="final"
      // className="colorPage"
      animate={controls}
      style={{
        // position: 'absolute',
        borderRadius: "50%",
        width: "100px",
        height: "100px",
        background: "blue",
      }}
    >
      HSL
    </motion.div>
  );
};

export default HSL;

import styles from "../assets/app.module.css";
import { motion } from "framer-motion";
import { routeAnimations } from "../constants/routes";

const HSL = () => {
  // const { h, s, l } = useParams();
  console.log('HSL');
  return (
    <motion.div
      variants={routeAnimations}
      initial="initial"
      animate="final"
      // className={styles.colorPage}
      // style={{ backgroundColor: `hsl(${h}, ${s}%, ${l}%)` }}
    >
      HSL
    </motion.div>
  );
};

export default HSL;

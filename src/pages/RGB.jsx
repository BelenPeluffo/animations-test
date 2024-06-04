import styles from "../assets/app.module.css";
// import { routeAnimations } from "../constants/routes";
import { motion } from "framer-motion";

const RGB = () => {
  // const { r, g, b } = useParams();
  console.log('RGB');
  return (
    <motion.div
      // className={styles.colorPage}
      // variants={routeAnimations}
      // initial="initial"
      // animate="final"
      // style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
    >
      RGB
    </motion.div>
  );
};

export default RGB;

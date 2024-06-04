import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import styles from "../assets/app.module.css";
import HSL from "./HSL";

const MOCK = [
  { name: "Soyeon", sign: "Virgo" },
  { name: "Minnie", sign: "Scorpio" },
  { name: "Yuqi", sign: "Capricorn" },
];

const Home = () => {
  const location = useLocation();
  return (
    <div className={styles.fill}>
      <NavBar />
      Location: {location.pathname}
      <motion.div
        transition={{ staggerChildren: 0.3 }}
        className={styles.content}
      >
        {/* <Outlet /> */}
        {MOCK.map(({ name, sign, position }) => (
          <HSL key={name} name={name} sign={sign} position={position} />
        ))}
      </motion.div>
    </div>
  );
};

export default Home;

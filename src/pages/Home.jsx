import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "../assets/app.module.css";
import HSL from "./HSL";

const Home = () => {
  const location = useLocation();
  return (
    <div className={styles.fill}>
      <NavBar />
      Location: {location.pathname}
      <div className={styles.content}>
        {/* <Outlet /> */}
        <HSL />
        <HSL />
        <HSL />
      </div>
    </div>
  );
};

export default Home;

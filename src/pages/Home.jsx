import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "../assets/app.module.css";

const Home = () => {
  return (
    <div className={styles.fill}>
      <NavBar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;

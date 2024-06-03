import { Link } from "react-router-dom";
import styles from "../assets/app.module.css";

const StyledLink = ({ to, children }) => {
  return (
    <li className={styles.navItem}>
      <Link
        to={to}
        style={{ color: "inherit" }}
        onClick={() => console.log("to?", to)}
      >
        {children}
      </Link>
    </li>
  );
};

export default StyledLink;

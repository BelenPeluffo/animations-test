import { Link } from "react-router-dom";
import styles from "../assets/app.module.css";

const NavLink = (props) => {
  return (
    <li {...props} style={styles.navItem}>
      <Link style={{ color: "inherit" }} />
    </li>
  );
};

export default NavLink;

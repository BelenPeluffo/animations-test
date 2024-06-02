import { Link } from "react-router-dom";
import styles from "../assets/app.module.css";

const NavLink = ({ props, children }) => {
  return (
    // <li {...props} style={styles.navItem}>
    <li {...props}>
      <Link style={{ color: "inherit" }}>{children}</Link>
    </li>
  );
};

export default NavLink;

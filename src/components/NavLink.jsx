import { Link } from "react-router-dom";
// import styles from "../assets/app.module.css";

const StyledLink = ({ to, children }) => {
  return (
    // <li {...props} style={styles.navItem}>
    <li>
      <Link
        // {...props}
        to={to}
        style={{ color: "inherit" }}
      >
        {children}
      </Link>
    </li>
  );
};

export default StyledLink;

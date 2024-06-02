import { Link } from "react-router-dom";
import styles from "../assets/app.module.css";

const StyledLink = ({ to, children }) => {
  // props && console.log("Outside component: props", props);
  return (
    // <li {...props} style={styles.navItem}>
    <li>
      <Link
        // {...props}
        to={to}
        style={{ color: "inherit" }}
        onClick={(event) => {
          // event.preventDefault();
          console.log("path", props);
        }}
      >
        {children}
      </Link>
    </li>
  );
};

export default StyledLink;

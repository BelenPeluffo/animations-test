import styles from "../assets/app.module.css";
import StyledLink from "./NavLink";

const NavBar = () => {
  return (
    <ul className={styles.nav}>
      <StyledLink to="age/asc">Youger-Older</StyledLink>
      <StyledLink to="age/desc">Older-Younger</StyledLink>
    </ul>
  );
};

export default NavBar;

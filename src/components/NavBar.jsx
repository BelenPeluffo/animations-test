// import styles from "../assets/app.module.css";
import StyledLink from "./NavLink";

const NavBar = () => {
  return (
    <>
      {/* <div style={styles.fill}> */}
      {/* <ul style={styles.nav}> */}
      <StyledLink to="hsl/10/90/50">Red</StyledLink>
      <StyledLink to="hsl/120/100/40">Green</StyledLink>
      <StyledLink to="rgb/33/150/243">Blue</StyledLink>
      <StyledLink to="rgb/240/98/146">Pink</StyledLink>
      {/* </ul> */}
      {/* </div> */}
    </>
  );
};

export default NavBar;

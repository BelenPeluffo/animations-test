import styles from "../assets/app.module.css";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <>
      {/* <div style={styles.fill}> */}
      {/* <ul style={styles.nav}> */}
      <NavLink to="/hsl/10/90/50">Red</NavLink>
      <NavLink to="/hsl/120/100/40">Green</NavLink>
      <NavLink to="/rgb/33/150/243">Blue</NavLink>
      <NavLink to="/rgb/240/98/146">Pink</NavLink>
      {/* </ul> */}
      {/* </div> */}
    </>
  );
};

export default NavBar;

import { useParams } from "react-router-dom";
import styles from "../assets/app.module.css";

const RGB = () => {
  const { r, g, b } = useParams();
  return (
    <div
      className={styles.colorPage}
      style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
    >
      RGB({r}%, {g}%, {b}%)
    </div>
  );
};

export default RGB;

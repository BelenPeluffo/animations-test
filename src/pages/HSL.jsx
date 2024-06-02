import { useParams } from "react-router-dom";
import styles from "../assets/app.module.css";

const HSL = () => {
  const { h, s, l } = useParams();
  return (
    <div
      className={styles.colorPage}
      style={{ backgroundColor: `hsl(${h}, ${s}%, ${l}%)` }}
    >
      HSL({h}, {s}, {l})
    </div>
  );
};

export default HSL;

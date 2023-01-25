import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import styles from "./style.module.css";
const Arrow = ({ dir }) => {
  return (
    <span className={styles.arrow}>
      {dir === "left" ? (
        <AiOutlineArrowLeft className={styles.arrow_icon} strokeWidth={90} />
      ) : (
        <AiOutlineArrowRight className={styles.arrow_icon} strokeWidth={90} />
      )}
    </span>
  );
};
export default Arrow;

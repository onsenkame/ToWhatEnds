import styles from "@/styles/Home.module.scss";
import PrimaryGameScreen from "./PrimaryGameScreen";

export default function Main() {
  return (
    <>
      <div className={styles.btnContainer}>
        <PrimaryGameScreen />
      </div>
    </>
  );
}

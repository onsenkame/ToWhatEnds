import styles from "@/styles/Home.module.scss";

export default function PrimaryGameScreen() {
  return (
    <>
      <div className={styles.gameContainer}>
        <div className={styles.gameScreen}></div>
        <div className={styles.gameButtons}>
          <button className={styles.button}>Button 1</button>
          <button className={styles.button}>Button 2</button>
          <button className={styles.button}>Button 3</button>
          <button className={styles.button}>Button 4</button>
          <button className={styles.button}>Yolo</button>
          <button className={styles.button}>Best Case</button>
        </div>
      </div>
    </>
  );
}

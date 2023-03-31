import styles from "../styles/loader.module.scss";
const ApiLoader: React.FC = () => {
  return (
    <div className={`${styles.loader_wrapper}`}>
      <div className={`${styles.box_wrap}`}>
        <div className={`${styles.box} ${styles.one}`}></div>
        <div className={`${styles.box} ${styles.two}`}></div>
        <div className={`${styles.box} ${styles.three}`}></div>
        <div className={`${styles.box} ${styles.four}`}></div>
        <div className={`${styles.box} ${styles.five}`}></div>
        <div className={`${styles.box} ${styles.six}`}></div>
      </div>
    </div>
  );
};

export default ApiLoader;

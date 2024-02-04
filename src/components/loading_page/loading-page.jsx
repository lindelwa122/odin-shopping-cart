import styles from './loading-page.module.css';

const LoadingPage = () => {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.clock}>
          <div className={styles.twelveMarker}></div>
          <div className={styles.threeMarker}></div>
          <div className={styles.sixMarker}></div>
          <div className={styles.nineMarker}></div>
          <div className={styles.dot}></div>
          <div className={styles.pointer}></div>
        </div>
      </div>
    </>
  )
}

export default LoadingPage;

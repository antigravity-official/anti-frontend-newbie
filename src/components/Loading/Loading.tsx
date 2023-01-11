import styles from './loading.module.scss'

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>환율 정보 불러오는 중</div>
      <div className={styles.spiner}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export default Loading

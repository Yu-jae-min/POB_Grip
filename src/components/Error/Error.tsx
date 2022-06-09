import styles from './error.module.scss'

interface IErrorType {
  warning: string
}

const Error = ({ warning }: IErrorType) => {
  return (
    <div className={styles.failWrap}>
      <span className={styles.fail}>{warning}</span>
    </div>
  )
}

export default Error

import { useWeatherContext } from "../../hooks/useWeatherContext"
import styles from "./Message.module.css"

export default function Message() {

  const { errorMessage } = useWeatherContext()

  return (
    <p className={styles.errorMessage}>{errorMessage}</p>
  )
}

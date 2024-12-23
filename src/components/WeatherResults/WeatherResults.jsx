import { formatTemp } from "../../helpers/formatTemp"
import { useWeatherContext } from "../../hooks/useWeatherContext"
import styles from './WeatherResults.module.css'

export const WeatherResults = () => {

  const { weatherResults } = useWeatherContext()
  const { humidity, temp_max, temp_min, temp } = weatherResults.main

  return (
    <>
      {Object.keys(weatherResults).length > 0 && (
        <div className={styles['weather-results']}>
          <h2 className={styles.title}>El clima de {weatherResults.name} es:</h2>
          <p className={styles.info}>Temperatura: {formatTemp(temp)} <span>&#8451;</span></p>
          <p className={styles.info}>Temperatura Maxima: {formatTemp(temp_max)} <span>&#8451;</span></p>
          <p className={styles.info}>Temperatura Minima: {formatTemp(temp_min)} <span>&#8451;</span></p>
          <p className={styles.info}>Humedad: {humidity}%</p>
        </div>
      )}
    </>
  )
}


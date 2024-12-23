import { useWeatherContext } from '../../hooks/useWeatherContext'
import Spinner from '../../Spinner/Spinner'
import FormWeather from '../FormWeather/FormWeather'
import { WeatherResults } from '../WeatherResults/WeatherResults'
import styles from './Weather.module.css'

export default function Weather() {

  const { loading, weatherResults } = useWeatherContext()

  return (
    <section className={styles.weather}>
      <h1 className={styles.title}>Búsqueda de clima</h1>
      <p className={styles.text}>Rellene los campos para poder obtener los datos del clima en tu ciudad</p>
      <FormWeather />
      {loading && <Spinner />}
      {Object.keys(weatherResults).length > 0 && <WeatherResults />}
    </section>
  )
}

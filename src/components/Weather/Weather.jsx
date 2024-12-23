import FormWeather from '../FormWeather/FormWeather'
import styles from './Weather.module.css'

export default function Weather() {

  return (
    <section className={styles.weather}>
      <h1 className={styles.title}>Búsqueda de clima</h1>
      <p className={styles.text}>Rellene los campos para poder obtener los datos del clima en tu ciudad</p>
      <FormWeather />
    </section>
  )
}

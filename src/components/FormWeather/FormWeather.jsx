import { useWeatherContext } from '../../hooks/useWeatherContext'
import Message from '../Message/Message'
import styles from './Form.module.css'

const timeout = 2500

export default function FormWeather() {

  const { search, handleSearch, fetchWeather, errorMessage, setErrorMessage } = useWeatherContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.values(search).includes("")) {
      setErrorMessage("Todos los campos son obligatorios")
      return
    }
    setErrorMessage("")
    fetchWeather(search)
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      {errorMessage && <Message />}
      <div className={styles.field}>
        <label
          htmlFor="city"
          className={styles.label}
        >Ciudad</label>
        <input
          id='city'
          name='city'
          type="text"
          value={search.city}
          onChange={handleSearch}
          className={styles.input}
        />
      </div>
      <div className={styles.field}>
        <label
          htmlFor="country"
          className={styles.label}
        >País</label>
        <select
          id='country'
          name='country'
          value={search.country}
          onChange={handleSearch}
          className={styles.select}
        >
          <option value="">Seleccione un País</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
      </div>
      <button
        type="submit"
        className={styles.button}
      >Obtener clima</button>
    </form>
  )
}

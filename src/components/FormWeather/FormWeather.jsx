import styles from './Form.module.css'

export default function FormWeather() {

  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label
          htmlFor="city"
          className={styles.label}
        >Ingrese el nombre de la ciudad</label>
        <input
          id='city'
          type="text" 
          className={styles.input}
        />
      </div>
      <div className={styles.field}>
        <label
          htmlFor="country"
          className={styles.label}
        >Ingrese el nombre del país</label>
        <input
          id='country'
          type="text" 
          className={styles.input}
        />
      </div>
      <button
        type="submit"
        className={styles.button}
      >Obtener clima</button>
    </form>
  )
}

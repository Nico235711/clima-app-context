import { useClima } from "../hooks/useClima"

export const Resultado = () => {

  const { resultadoClima } = useClima()
  const { name } = resultadoClima
  const { temp, temp_max, temp_min } = resultadoClima.main

  const kelvin = 273.15

  return (
    <div className="contenedor">
      <h1>El clima de {name} es: </h1>
      <p>
        <span className="temperatura">Temperatura Actual:
        </span> {parseInt(temp - kelvin)}
        <span className="grados">&#x2103;</span>
      </p>
      
      <p>
        <span className="temperatura">Temperatura Mínima:
        </span> {parseInt(temp_min - kelvin)}
        <span className="grados">&#x2103;</span>
      </p>
      
      <p>
        <span className="temperatura">Temperatura Máxima:
        </span> {parseInt(temp_max - kelvin)}
        <span className="grados">&#x2103;</span>
      </p>
    </div>
  )
}

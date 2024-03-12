import { useClima } from "../hooks/useClima"

export const Resultado = () => {

  const { resultadoClima } = useClima()
  const { name } = resultadoClima
  const { temp, temp_max, temp_min } = resultadoClima.main

  return (
    <div className="contenedor">
      <h1>El clima de {name} es: </h1>
      <p>{temp}</p>
      <p>{temp_min}</p>
      <p>{temp_max}</p>
    </div>
  )
}

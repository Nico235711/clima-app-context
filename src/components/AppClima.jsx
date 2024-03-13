import { useClima } from "../hooks/useClima"
import { Formulario } from "./Formulario"
import { Resultado } from "./Resultado"
import { Spinner } from "./Spinner"

export const AppClima = () => {

  const { resultadoClima, cargando, noResultado } = useClima()

  return (
    <main className="dos-columnas">
      <Formulario />

      {
        cargando ? <Spinner /> :
        resultadoClima?.name ? <Resultado /> : <p>{noResultado}</p>
      }
    </main>
  )
}

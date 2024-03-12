import { useClima } from "../hooks/useClima"
import { Formulario } from "./Formulario"
import { Resultado } from "./Resultado"

export const AppClima = () => {

  const { resultadoClima } = useClima()

  return (
    <main className="dos-columnas">
      <Formulario />

      {
        resultadoClima?.name && <Resultado />
      }
    </main>
  )
}

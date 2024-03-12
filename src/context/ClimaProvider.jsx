import { createContext, useState } from "react"

const ClimaContext = createContext()

export const ClimaProvider = ({ children }) => {

  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: ""
  })

  const datosBusqueda = e => {  
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  return (
    <ClimaContext.Provider 
      value={{
        busqueda,
        setBusqueda
      }}
    >
      {children}
    </ClimaContext.Provider>
  )
}

export default ClimaContext
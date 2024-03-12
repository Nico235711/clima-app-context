import { createContext } from "react"

const ClimaContext = createContext()

export const ClimaProvider = ({ children }) => {

  return (
    <ClimaContext.Provider 
      value={{

      }}
    >
      {children}
    </ClimaContext.Provider>
  )
}

export default ClimaContext
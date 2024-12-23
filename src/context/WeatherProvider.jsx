import axios from "axios";
import { createContext, useState } from "react";

const initialState = {
  city: "",
  country: "",
}
const apikey = import.meta.env.VITE_API_KEY
const geoURL = "https://api.openweathermap.org/geo/1.0/direct"
const weatherURL = "https://api.openweathermap.org/data/2.5/weather"

export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const [search, setSearch] = useState(initialState)
  const [errorMessage, setErrorMessage] = useState("")
  const [weatherResults, setWeatherResults] = useState({})
  const [loading, setLoading] = useState(false)

  const handleSearch = (e) => {
    setSearch({
      ...search, // tomo un copia de search asi no pierdo los datos anteriores
      [e.target.name]: e.target.value // el input debe tener los atributos name y value para que se mapeen
    })
  }

  const fetchWeather = async (formData) => {
    try {
      setLoading(true)
      setWeatherResults({})
      const { data } = await axios(`${geoURL}?q=${search.city},${search.country}&appid=${apikey}`)
      const latitude = data[0].lat
      const longitude = data[0].lon
      const { data: weatherData  } = await axios(`${weatherURL}?lat=${latitude}&lon=${longitude}&appid=${apikey}`)
      
      // console.log({ name, main });
      setTimeout(() => {
        setWeatherResults(weatherData)
      }, 1000);
      
    } catch (error) {
      console.log(error);
      setWeatherResults({})
    }
    finally {
      setLoading(false)
      setSearch(initialState)
    }
  }

  return (
    <WeatherContext.Provider value={{
      search,
      handleSearch,
      errorMessage,
      setErrorMessage,
      fetchWeather,
      weatherResults,
      loading
    }}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContextProvider;
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import BtnSection from './components/BtnSection'
import ComparisonCard from './components/ComparisonCard'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [unit, setUnit] = useState("C°")

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos)=> setCoords(pos.coords))
  }, [])

  useEffect(() => {
    const APIKEY = "5f1a2e38a14987f63e23f358b24e5946"
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.latitude}&lon=${coords?.longitude}&appid=${APIKEY}`
    axios.get(URL)
      .then(res => setWeather(res.data))
      .catch(err => console.log(err))
  }, [coords])
  //Haz que se pueda cambiar el lenguaje
  //Que puedas comparar el clima con otra ciudad
  //Cambiar las unidades de medida
  console.log(weather);
  console.log(coords);
  return (  
    <div className="App">
      {/* <h1>Hola</h1>
      <h2>{weather?.name}</h2>
      <h2>Latitud: {coords?.latitude}</h2>  
  <h2>Longitud: {coords?.longitude}</h2>*/}
      <WeatherCard 
      icon = {weather?.weather[0].icon}
      cloud = {weather?.clouds.all}  
      temperature = {weather?.main.temp}
      sensation = {weather?.main.feels_like}
      humidity = {weather?.main.humidity}
      weather={[weather?.weather[0].main, weather?.weather[0].description]}
      />
      <BtnSection />
      <ComparisonCard />
    </div>
  )
}

export default App

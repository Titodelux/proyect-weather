import React from 'react'

const WeatherCard = ({icon,cloud,temperature,sensation,humidity,weather}) => {
    // const [imgIcon, setIcon] = useState()
    // useEffect(() => {
    //     setIcon(`http://openweathermap.org/img/wn/${icon}@2x.png`)
    // }, [])
    const [unit, setUnit] = useState("C°")
    return (
        <section className='card'>
            {/* <h1>Today's Weather</h1>
            <div className="main">
                <div className="icon"><img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" /></div>
                <ul className='infoWeather'>
                    <li> <i></i> <h2>{temperature}</h2> </li>
                    <li> <i></i> <h2>{humidity}%</h2> </li>
                    <li> <i></i> <h2>{sensation}</h2> </li>
                    <li> <i></i> <h2>{cloud}%</h2> </li>
                </ul>
            </div>
            <div className="weather">
                <h1>{weather[0]}</h1>
                <h3>{weather[1]}</h3>
            </div> */}
            <button></button>
            <form>
            </form>
            <h1>Today's weather in <span>{"state, country"}</span></h1>
            <button></button>
            <button></button>
            <div className="icon">
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
                <h2>{weather[0]}</h2>
            </div>
            <div className="gridInfo">
                <li><i></i>{temperature}</li>
                <li><i></i>{sensation}</li>
                <li><i></i>{humidity}</li>
                <li><i></i>{cloud}</li>
            </div>

        </section>
    )
}

export default WeatherCard
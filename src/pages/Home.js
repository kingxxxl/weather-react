import React from 'react';
import Navbar from "../components/NavBar";


function Home() {
    const projectName = "Weather App";
    const [temperature, setTemperature] = React.useState('');
    const [city, setCity] = React.useState("");

    const getWeather = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d9b3692eaddfacd212200faff66c00b`);

        const data = await response.json();
        if (data.cod === "404") {
            setTemperature("City not found");
        } else {
            //f to c
            const temp = (data.main.temp - 273.15).toFixed(0);
            setTemperature(temp + '°C'
            )
            ;
            console.log(temp);
        }

    }
    return (
        <>
            <Navbar projectName={projectName}/>
            <div className="container">
                <h1 className='text-center mb-3'>Weather App</h1>
                <div className="input-group mb-3">
                    <input type="text" onChange={(e) => setCity(e.target.value)} className="form-control"
                           value={city} placeholder="Enter a city"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" onClick={getWeather}
                                type="button">Fetch Forecast!
                        </button>
                    </div>
                </div>
                <div className='data mt-3'>
                    <div className='text-center'>
                        <h3>Temperature</h3>
                        <h3>{temperature}</h3>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home;
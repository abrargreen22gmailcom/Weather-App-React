import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 22.4,
        humidity: 38,
        temp: 23.05,
        tempMax: 23.05,
        tempMin: 23.05,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return(
    <div style={{textAlign:"center"}}>
        <h2>Weather App by Creator</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
    );
}
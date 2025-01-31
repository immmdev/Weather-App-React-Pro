import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./searchBox";
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]=useState({
        city:"Delhi",
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:40,
        feelsLike:24.3,
        weather:"haze",
    });
    let updateInfo=(newInfo)=>{ // step3:- defination of the function so that it could pass to the component as the prop value to render
        setWeatherInfo(newInfo)
    }
    return(
        <>  
            {/* step4:- here the value of the updateInfo prop has been passed */}
            <SearchBox updateInfo={updateInfo}/>
            {/* weatherinfo has been passed as the prop value here   */}
            <InfoBox info={weatherInfo}/>
        </>
    )
}
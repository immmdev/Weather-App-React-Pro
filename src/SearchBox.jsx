import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./searchBox.css";
export default function SearchBox({updateInfo}) { // step 1:- update info is an prop its value need to be defined whre this component will be render
  
  
    const [city, setCity] = useState("");
    let [error,setError]=useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "19fdd7139a089edc71be5a4d34b4b88e";

    const getWeatherInfo = async () => {
        try{
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        const result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].main,
      }
      console.log(result);
      return result; // returning an object that has the datafetch by api
    } catch(err){
       throw err; // trowing error at the time of fetching api data
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
};

  const onSubmitHandle = async (event) => {
    try{
    event.preventDefault();
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);// step2:- the updateInfo prop is used as function in parent component its defination must in the component file where it need to be render
    setError(false);
    } catch(err){
        setError(true);
         // catching error afer submission of the form
    } 
  };

  return (
    <div className="main-container">
      <h1 className="weather-title">weatherApp</h1>
      <form onSubmit={onSubmitHandle}>
      {error && <p style={{color:"red"}}>*City Not Found</p>}
        <div className="input-tab">
          <TextField
            id="city-name"
            label="City Name"
            variant="outlined"
            value={city}
            onChange={handleChange}
            required
          />
          <br></br><br></br>
           <div className="search-button">
            <Button variant="contained" id="search-button" type="submit">
                Search
            </Button>
            </div>
        </div>
    </form>
  
    </div>
  );
}
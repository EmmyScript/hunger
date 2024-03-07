
//mport hn1 from "../assets/image/hn1.jpg";
//import hun2 from "../assets/image/hun2.jpg";
//import hand from "../assets/image/hand.jpg";
import child from "../assets/image/children.jpg"
import flag from "../assets/image/flag.jpg"
import rice from "../assets/image/rice2.jpg"
import begfood from "../assets/image/begfood.jpg"
import goat from "../assets/image/goat.jpg"
import openhand from "../assets/image/openhand.jpg"



//import emmy from "../assets/image/rejoi.jpg"
import { useState } from "react";

// import {BsGlobeAmericas}  from "react-icons/bs";

const Hungry= () => {
  const [cityInput, setCityInput] = useState("");
  const [wedaData, setWedaData] = useState<any>();
  const [wicon, setWicon] = useState(flag);
  const[isLoading, setIsLoading] =useState(false)
//   console.log(process?.env.REACT_APP_WEDA_KEY as string)

  let idoko_weda = "3e1fa36c24f7361930f262555830dbc0";
  const search = async () => {
    setIsLoading(true)
    if (!cityInput) return;
    try {

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${idoko_weda}`;
      const result = await fetch(url);
      const response = await result.json();
      setWedaData(response);
        setIsLoading(false)
        console.log(response);
        setCityInput("")
        
      if (
        response.weather[0].icon === "01d" ||
        response.weather[0].icon === "01n"
      ) {
        setWicon(begfood);
      } else if (

        response.weather[0].icon === "02d" ||
        response.weather[0].icon === "02n"
      ) {
        setWicon(rice);
      } else if (
        response.weather[0].icon === "03d" ||
        response.weather[0].icon === "03n"
      ) {
        setWicon(begfood);
      } else if (
        response.weather[0].icon === "04d" ||
        response.weather[0].icon === "04n"
      ) {
        setWicon(openhand);
      } 
      else if (
        response.weather[0].icon === "09d" ||
        response.weather[0].icon === "09n"
      ) {
        setWicon(openhand);
      }
      else if (
        response.weather[0].icon === "10d" ||
        response.weather[0].icon === "10n"
      ) {
        setWicon(openhand);
      }
      else if (
        response.weather[0].icon === "09d" ||
        response.weather[0].icon === "09n"
      ) {
        setWicon(rice);
      }
      else{
        setWicon(rice)
      }


    } catch (err: any) {
      console.log(err);
      setIsLoading(false)
      
    }
  };

  console.log(cityInput)

  return (
    <div className="row mb-5">
        <div className="empty-div"></div>
    <div className="container">
        
        <div className="header">Global Weather & Hardship APP</div>
      <div className="top-bar">
        {isLoading && <div className="spinner-border loading" >loading....</div>}
        
        <input
          type="text"
          className="cityInput"
          placeholder="search..."

          
          onChange={(e) => setCityInput(e.target.value)}
          value={cityInput}
        />
        <div
          className="search-icons"
          onClick={() => {
            search();
          }}
        >
          <img src={goat} alt="..." />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt=".." />
      </div>
      <div className="weather-tem">
        <h4>
        {wedaData?.main?.temp}
        <sup>o</sup>C
        </h4>
      </div>
      <div className="weather-location">{wedaData?.name}</div>
      <div className="data-container">
        <div className="element">
          <img src={rice} className="icon" alt="..." width={70}  height={70} style={{objectFit:"cover"}}/>
          <div className="data">
            <div className="humidity-percent">{wedaData?.main?.humidity}%</div>
            <div className="text">Humidity of Hungry</div>
          </div>
        </div>

        <div className="element">
          <img src={begfood} className="icon" alt="..." width={70}  height={70} style={{objectFit:"cover"}}/>
          <div className="data">
            <div className="humidity-percent">{wedaData?.wind?.deg}km/h</div>
            <div className="text">Wind Speed/Angry</div>
          </div>
        </div>
        
      </div>
      <div className="scroll-container">
        <div className="scroll-text">@emmyTechy
        <img src={child} alt="..." width={70} height={50} className="rounded-circle" style={{objectFit:"cover",fontSize:"bolder"}}/>
        <img src={openhand} alt="..." width={70} height={50} className="rounded-circle" style={{objectFit:"cover",fontSize:"bolder"}}/>
        9ja are hungry and angry
        </div>
        
      </div>
    </div>
    <div className="empty-div">
      
    </div>
    </div>
  );
  
};

export default Hungry;
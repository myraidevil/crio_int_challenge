import React from "react";
import Header from "./Header";
import SearchBox from './SearchBox'
import CardComponent from "./Card";
import { useSnackbar } from "notistack";
import { useState } from 'react';
import axios from 'axios'


const Home = () =>{
    const { enqueueSnackbar } = useSnackbar();
    const [weatherData, setWeatherData] = useState({})


    const onSearch = async (location) => {
        try{
            const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=d10eed0ed92048518ee53841240205&q=${location}&days=1&aqi=no&alerts=no`)
            // console.log(response.data);
            if(response.status === 200){
                setWeatherData(response.data)
            }
        
        }catch(error){
          if(error.response.status === 400){
            enqueueSnackbar(`${error.response.data.error.message}`, { variant: 'error' });
          }
        }

    };
    return(
        <div>
            <Header/>
            &nbsp;&nbsp;
            <SearchBox onSearch={onSearch}/>
            &nbsp;&nbsp;
            <div style= {{display:'flex', justifyContent:'center', height:'35rem'}} >
                <CardComponent  weatherData={weatherData}/>
            </div>
        </div>
    )
}
export default Home
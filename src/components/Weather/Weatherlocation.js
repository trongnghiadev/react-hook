import {
    useParams
} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Weatherlocation = () => {
    const { woeid } = useParams();
    const [locationWeather, setLocationWeather] = useState({})
    useEffect(() => {
        getWeatherByLocation()
    }, [])


    const getWeatherByLocation = async () => {
        let response = await axios({
            method: 'POST',
            url: "http://localhost:8080/get-data-by-url",
            data: { url: `https://www.metaweather.com/api/location/${woeid}/` }
        });

        if (response && response.data) {
            setLocationWeather(response.data);
        }
    }
    return (<div>
        {JSON.stringify(locationWeather)}
    </div>)
}

export default Weatherlocation;
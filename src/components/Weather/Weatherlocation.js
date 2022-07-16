import {
    useParams
} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import WeatherSatus from "./Child/WeatherStatus";
import { useHistory } from "react-router-dom";
import Weathereveryday from "./Child/Weathereveryday";
import "./Weather.scss";
import _ from "lodash";
import moment from "moment";

const Weatherlocation = (props) => {
    let { woeid } = useParams();
    const [locationWeather, setLocationWeather] = useState({})
    let history = useHistory();
    useEffect(() => {
        getWeatherByLocation()
    }, [])


    const getWeatherByLocation = async () => {
        if (!woeid) {
            woeid = props.woeidformFR;
        }
        let response = await axios({
            method: 'POST',
            url: "http://localhost:8080/get-data-by-url",
            data: { url: `https://www.metaweather.com/api/location/${woeid}/` }
        });

        if (response && response.data) {
            setLocationWeather(response.data);
        }
    }
    const handleBack = () => {
        history.push("/weather");
    }
    return (
        <div className="w-b-l-container">
            {!props.woeidformFR && <div className="back">
                <span onClick={() => { handleBack() }}>---Back---</span>
            </div>}

            <div className="list">
                {!_.isEmpty(locationWeather)
                    && locationWeather.consolidated_weather
                    && locationWeather.consolidated_weather.length > 0
                    && locationWeather.consolidated_weather.map((item, index) => {
                        return (
                            <div key={`weatherday-${index}`} className={`weather-day-${index}`}>
                                {
                                    index === 0 && <div className="location-data">
                                        <div className="title">{locationWeather.title}</div>
                                        <div className="time">{moment(locationWeather.time).format("hh:mm:ss A")}</div>
                                    </div>
                                }
                                <Weathereveryday
                                    dataweather={item}
                                />
                            </div>
                        )
                    })}
            </div>
        </div>)
}

export default Weatherlocation;
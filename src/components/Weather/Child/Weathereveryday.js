import WeatherSatus from "./WeatherStatus";
import "./Child.scss";
import moment from "moment";

const Weathereveryday = (props) => {
    const dataweather = props.dataweather;
    return (<div className="weathereveryday">
        <div className="date">{moment(dataweather.applicable_date).format("ddd MMM YY")}</div>
        <div className="sate">
            <WeatherSatus
                WeatherSatus={dataweather.weather_state_name}
            />
        </div>
        <div className="max"> Max:{Math.round(dataweather.max_temp)}</div>
        <div className="min"> Min: {Math.round(dataweather.min_temp)}</div>
        <div className="wind"> {Math.round(dataweather.wind_speed)}mph</div>
    </div>)
}

export default Weathereveryday;
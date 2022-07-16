import './Child.scss';

const WeatherSatus = (props) => {
    const WeatherSatus = props.WeatherSatus;
    const allWeatherSatus = {
        "Snow": "sn",
        "Thunderstorm": "t",
        "Sleet": "sl",
        "Clear": "c",
        "Hail": "h",
        "Heavy Rain": "hr",
        "Light Cloud": "lc",
        "Heavy Cloud": "hc"
    }

    const getWeatherIcon = (WeatherSatus) => {
        const fetchSate = allWeatherSatus[WeatherSatus];
        return `http://localhost:8080/static/img/weather/${fetchSate}.svg`
    };
    return (<div className="weathersate-conainer">
        <div className="icon-state">
            <img src={getWeatherIcon(WeatherSatus)} />
        </div>
        <div className="name-state">
            {WeatherSatus}
        </div>
    </div>)
}
export default WeatherSatus;
import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "./Search";
import './Weather.scss'

const Weather = () => {
    const [title, setTitle] = useState("");

    useEffect(async () => {
        let response = await axios({
            method: 'POST',
            url: "http://localhost:8080/get-data-by-url",
            data: { url: 'https://www.metaweather.com/api/location/1236594/' }
        });
        setTitle(response.data.title)
    }, []);
    return (
        <div className="weather-app-container">
            <Search />
        </div>)
}



// class Weather extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             title: "",
//         }
//     }


//     async componentDidMount() {
//         let response = await axios({
//             method: 'POST',
//             url: "http://localhost:8080/get-data-by-url",
//             data: { url: 'https://www.metaweather.com/api/location/1236594/' }
//         });
//         console.log("check data", response.data)
//         this.setState({
//             title: response.data.title
//         })
//     }


//     render() {
//         return (<div>
//             inside Weather Component: title = {this.state.title}
//         </div>)
//     }

// }

export default Weather;
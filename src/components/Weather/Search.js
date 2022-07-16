import { useEffect, useState } from "react";
import axios from "axios";
import _, { isEmpty } from "lodash";
import { useHistory } from "react-router-dom";

const Search = () => {
    const [keyword, setKeyword] = useState("");
    const [locationArr, setLocationArr] = useState([]);
    const [IsLoadingData, setIsLoadingData] = useState(false);
    const [isFocus, setIsFocus] = useState(false);

    let history = useHistory();
    const HandleViewDetail = (woeid) => {
        history.push(`/weather/detail/${woeid}`);
    }
    const handleSearchBtn = async () => {
        setIsLoadingData(true);
        setLocationArr([])
        let response = await axios({
            method: 'POST',
            url: "http://localhost:8080/get-data-by-url",
            data: { url: `https://www.metaweather.com/api/location/search/?query=${keyword}` }
        });

        if (response && response.data) {
            let result = response.data;
            let _locationArr = [];
            if (!_.isEmpty(result)) {
                for (let key in result) {
                    _locationArr.push(result[key]);
                }
                setLocationArr(_locationArr);
            } else {
                setLocationArr([])
            }

        }
        setIsLoadingData(false);
        setIsFocus(false);
    }
    return (<div className="Search-container">
        <div className="search-inputs">
            <input type='text'
                placeholder="Search any city..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onFocus={() => setIsFocus(true)}
            />
            <button onClick={() => handleSearchBtn()}>Search</button>
        </div>
        {IsLoadingData === true && <div> Loading Data..... </div>}
        <div className="result-container">
            {locationArr && locationArr.length > 0 && locationArr.map((item, index) => {
                return (
                    <div className="result-child" key={`location-${index}`}>
                        <div className="title">Title: {item.title}</div>
                        <div className="type">Type: {item.location_type}</div>
                        <div className="woeid">
                            <span onClick={() => HandleViewDetail(item.woeid)} title="Click to view detail">
                                <b> WOEID: {item.woeid} </b>
                            </span>
                        </div>
                        <div className="latt_long">latt_long: {item.latt_long}</div>
                    </div>
                )
            })}
            {
                !isFocus && keyword && locationArr && locationArr.length === 0 &&
                <div>
                    Not found data with keyword = {keyword}
                </div>
            }
        </div>




    </div>)
}

export default Search;
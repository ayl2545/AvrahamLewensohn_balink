import axios from "axios";

export default function getData(num) {
    return axios.get(`https://www.metaweather.com/api/location/${num}`)
}


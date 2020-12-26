import axios from 'axios';

let getAll = () => {
    return axios.get("https://restcountries.eu/rest/v2/all");
};

let getRegion = (region) => {
    return axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
};

export {getAll, getRegion};

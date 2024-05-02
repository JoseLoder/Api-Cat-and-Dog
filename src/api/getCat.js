import axios from 'axios';
const URL = 'https://api.thecatapi.com/v1/images/search';

export const getCat = async () => {
    return axios.get(URL)
        .then(function (response) {
            return response.data[0].url;
        })
        .catch(function (error) {
            console.log(error);
        });
}
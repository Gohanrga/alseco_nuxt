import axios from 'axios';

const API_URL = 'http://localhost:3000/';

export class ApiService {

    async get(service) {
        let url = API_URL + service;
        return await axios.get(url);
    }

}
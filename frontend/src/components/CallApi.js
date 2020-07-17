import axios from 'axios';

const api = 'http://localhost:5000';

class CallApi {
    getSomething() {
        return new Promise((resolve) => resolve(axios.get(`${api}`)));
    }

    sendSomething(body) {
        return new Promise((resolve) => resolve(axios.post(`${api}/hello`, body)));
    }
}

export default new CallApi();
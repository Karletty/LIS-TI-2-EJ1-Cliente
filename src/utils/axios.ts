import axios from 'axios';

axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const apiRest = axios.create({
      baseURL: 'http://127.0.0.1:8000'
});

export { apiRest }
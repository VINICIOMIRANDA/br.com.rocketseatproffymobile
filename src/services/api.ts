import axios from 'axios';

const api = axios.create({
    //baseURL: 'd5-6kz.anonymous.mobile.exp.direct:3333'
    baseURL: '192.168.0.108:3333'
});

export default api;
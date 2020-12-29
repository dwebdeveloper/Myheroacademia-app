import axios from 'axios';

const heroInstance = axios.create({
    baseURL: 'https://myheroacademiaapi.com/api/character'
});

heroInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM HERO INSTANCE';

const reqInterceptor = heroInstance.interceptors.request.use(request => {
    console.log(request);
    //edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.request.eject(reqInterceptor)

const resInterceptor = heroInstance.interceptors.response.use(response => {
    console.log(response);
    //edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.eject(resInterceptor)

export default heroInstance;
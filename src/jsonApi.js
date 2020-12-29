import axios from 'axios';

const jsonInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

jsonInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM JSON INSTANCE';

const reqInterceptor = jsonInstance.interceptors.request.use(request => {
    console.log(request);
    //edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.request.eject(reqInterceptor)

const resInterceptor = jsonInstance.interceptors.response.use(response => {
    console.log(response);
    //edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.eject(resInterceptor)

export default jsonInstance;
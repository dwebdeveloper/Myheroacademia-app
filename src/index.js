import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'baseURL';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

//When baseURL is used for entire application use code below 

/*const reqInterceptor = axios.interceptors.request.use(request => {
    console.log(request);
    //edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.request.eject(reqInterceptor)

const resInterceptor = axios.interceptors.response.use(response => {
    console.log(response);
    //edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.eject(resInterceptor)*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

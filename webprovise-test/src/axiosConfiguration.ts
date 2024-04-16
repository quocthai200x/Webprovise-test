import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.openweathermap.org', // Your API base URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json', // Default content type for requests
    // Add any other default headers here
  }
});

// Optionally, you can add interceptors for request and response
instance.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      appid: import.meta.env.VITE_WEATHER_API_KEY,
    };
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // Do something with successful response data
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;

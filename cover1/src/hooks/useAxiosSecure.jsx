import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:1111',
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;

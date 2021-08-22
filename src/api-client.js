import axios from 'axios';
import { REACT_APP_API_URL } from './env.variables';

export const getLaunches = () => {
  return axios.get(REACT_APP_API_URL)
    .then(response => response.data)
    .catch(error => {
      throw error
    });
}
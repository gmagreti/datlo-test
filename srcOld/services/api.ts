import axios from 'axios';
export const api = axios.create({
  baseURL: 'https://www.api.development.datlo.com/',
});

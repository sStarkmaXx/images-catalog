import axios from 'axios';

export default axios.create({
  baseURL: 'http://contest.elecard.ru/frontend_data/',
});

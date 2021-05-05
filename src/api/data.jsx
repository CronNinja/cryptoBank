import axios from 'axios';

export default axios.create({
  baseURL: `/get_coin/`
});
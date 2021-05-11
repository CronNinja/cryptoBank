import axios from 'axios';

export default axios.create({
  baseURL: `"https://coincodex.com/api/coincodex/get_coin/`
});
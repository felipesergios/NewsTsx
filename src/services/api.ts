import axios from 'axios';
const api = axios.create({
    baseURL:'https://apinoticias.tedk.com.br/api'
});
export default api;
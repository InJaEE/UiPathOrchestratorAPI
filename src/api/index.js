import axios from 'axios';
import interceptor from './interceptors';

let baseURL = 'https://win-32pqisil70a/';

const instance = axios.create({ baseURL });
const authInstance = interceptor(instance);

export { instance, authInstance };
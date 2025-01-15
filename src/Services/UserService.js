import axios from 'axios';
import config from '../config/url';

function addUser(user) {
  
  return axios.post(config.url+'/api/register', user);
}

function login(user) {
  return axios.post(config.url+'/api/login', user);
}

export default {
  addUser,
  login
};
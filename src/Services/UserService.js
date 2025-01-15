import axios from 'axios';
import config from '../config/url';

function addUser(user) {
  
  return axios.post(config.url+'/api/register', user);
}

function login(user) {
  return axios.post(config.url+'/api/login', user);
}

function getUser(){
  return axios.get(config.url+'/api/me');
}
export default {
  addUser,
  login,
  getUser
};
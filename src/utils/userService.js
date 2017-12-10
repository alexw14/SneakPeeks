import userAPI from './userAPI';
import tokenService from './tokenService';

function signup(user) {
  return userAPI.signup(user).then(token => tokenService.setToken(token));
}

export default {
  signup
};
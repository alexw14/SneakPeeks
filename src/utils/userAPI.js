const BASE_URL = '/api/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    // Likely duplicate email if !res.ok
    throw new Error('Email already taken!');
  })
  .then(({token}) => token); // Parameter destructuring
}

export default {
  signup
};
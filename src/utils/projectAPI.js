import tokenService from './tokenService';

const BASE_URL = '/api/projects/';

function newProject(project) {
  return fetch(BASE_URL + 'new', authorize('POST', project))
    .then(res => {
      if (res.ok) return res.json();
    })
}

function update(project, id) {
  return fetch(BASE_URL + `${id}`, authorize('PUT', project))
    .then(res => {
      if (res.ok) return res.json();
    })
}

function authorize(method, body) {
  return {
    method: method,
    // headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()}),
    headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() }),
    body: JSON.stringify(body)
  }
}

export default {
  newProject,
  update
}
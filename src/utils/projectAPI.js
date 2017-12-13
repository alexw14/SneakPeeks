const BASE_URL = '/api/projects/';

function newProject(project) {
  return fetch(BASE_URL + 'new', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(project)
  })
  .then(res => {
    if (res.ok) return res.json();
  })
}

function update(project, id) {
  return fetch(BASE_URL + `${id}`, {
    method: 'PUT',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(project)
  })
  .then(res => {
    if (res.ok) return res.json();
  })
}

export default {
  newProject,
  update
}
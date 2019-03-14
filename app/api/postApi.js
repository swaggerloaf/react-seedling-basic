import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getAllPosts() {
  return get('posts');
}

export function addPost() {
  return post('posts');
}

export function putPost(id) {
  return put(`posts/${id}`);
}

export function patchTodo(id) {
  return patch(`posts/${id}`);
}

export function deleteTodo(id) {
  return del(`posts/${id}`);
}

async function get(url) {
  try {
    console.log('getting ' + baseUrl + url);
    let response = await fetch(baseUrl + url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

function post(url, todo) {
  const request = new Request(baseUrl + url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  });
  return fetch(request);
}

function put(url, todo) {
  const request = new Request(baseUrl + url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  });
  return fetch(request);
}

function patch(url, todo) {
  const request = new Request(baseUrl + url, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  });
  return fetch(request);
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });
  return fetch(request);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.warn(error);
}

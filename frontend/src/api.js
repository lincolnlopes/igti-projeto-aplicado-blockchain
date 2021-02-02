export const API_URL = 'http://localhost:3001';
export function TOKEN_POST(body) {
  //console.log(body);
  return {
    url: API_URL + '/tokens',
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    },
  };
}
export function USER_GET(token) {
  return {
    url: API_URL + '/tokens',
    options: {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + '/tokens',
    options: {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    },
  };
}

export function USERS_STORE(token, body) {
  console.log(JSON.stringify(body));
  return {
    url: API_URL + '/users',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function MEET_STORE(token, body) {
  console.log(JSON.stringify(body));
  return {
    url: API_URL + '/meetings',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function MEET_UPDATE(token, body, id) {
  console.log(JSON.stringify(body), id);
  return {
    url: API_URL + '/meetings/' +id,
    options: {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function MEET_GET(token) {
  return {
    url: API_URL + '/meetings',
    options: {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    },
  };
}

export function MEET_SHOW(token, id) {
  return {
    url: API_URL + '/meetings/' + id,
    options: {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    },
  };
}


export function ISSUE_STORE(token, body) {
  console.log(JSON.stringify(body));
  return {
    url: API_URL + '/issues',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function ISSUE_GET(token) {
  return {
    url: API_URL + '/issues',
    options: {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    },
  };
}

export function PASSWORD_LOST(body) {
  console.log(JSON.stringify(body));
  return {
    url: API_URL + '/account/forgot',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function PASSWORD_RESET(body) {
  console.log(JSON.stringify(body));
  return {
    url: API_URL + '/account/reset',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

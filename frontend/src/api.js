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

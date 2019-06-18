
const getResource = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
  }
  const body = await res.json();
  return body;
}

getResource('https://swapi.co/api/films/27678/')
  .then((body) => {
    console.log(body);
  })
  .catch((err) => {
    console.error('Could not fetch', err);
  });
function formatMemes(memes) {
  const { id, name, width, height, url } = memes;
  return {
    id,
    name,
    width,
    height,
    url
  };
}

function checkStatus(response) {
  response.status === 200
    ? console.log('Successful request!')
    : console.log(`Oops, we get a ${response.status} error`);
  return response;
}

fetch('https://api.imgflip.com/get_memes')
  .then(response => checkStatus(response))
  .then(data => data.json())
  .then(json => json.data.memes)
  .then(memes => memes.map(response => console.log(formatMemes(response))));

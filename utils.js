export { checkStatus, formatMemes, filterBySize, sortAscendant };

function checkStatus(response) {
  response.status === 200
    ? console.log('Successful request!')
    : console.error(`Oops, we get a ${response.status} error`);
  return response;
}

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

function filterBySize(memes, size) {
  return memes.filter(meme => meme.width >= size || meme.height >= size);
}

function sortAscendant(response) {
  return response.sort((a, b) => Number(a.id) - Number(b.id));
}

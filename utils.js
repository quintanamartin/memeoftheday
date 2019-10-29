export { checkStatus, formatMemes };

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

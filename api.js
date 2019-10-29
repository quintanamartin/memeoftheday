export { getMemes, ENDPOINT };
import { checkStatus } from './utils.js';
const ENDPOINT = 'https://api.imgflip.com/get_memes';

function getMemes(url) {
  return fetch(url)
    .then(checkStatus)
    .then(response => response.json())
    .then(json => json.data.memes)
    .catch(error => console.error(error.message));
}

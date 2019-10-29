import { getMemes, ENDPOINT } from './api.js';
import { formatMemes } from './utils.js';

function filterBySize({ height, width }, size) {
  return height < size || width < size;
}

getMemes(ENDPOINT);

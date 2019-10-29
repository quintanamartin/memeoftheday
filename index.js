import { getMemes, ENDPOINT } from './api.js';
import { formatMemes, filterBySize, sortAscendant } from './utils.js';

const main = document.getElementsByTagName('main');
const memeImage = document.querySelector('.meme');
const buttonMeme = document.querySelector('.get-meme');

const memesArr = getMemes(ENDPOINT)
  .then(response => filterBySize(response, 500))
  .then(result => result.map(meme => formatMemes(meme)))
  .then(formattedMemes => sortAscendant(formattedMemes));

memesArr.then(response => {
  console.dir(response);
});

function getMemeOfTheDay(memes) {
  const currentDate = new Date().getDate();
  const memeURL = memes[currentDate - 1].url;
  memeImage.setAttribute('src', `${memeURL}`);
}

function getRandomMeme(memes) {
  const randomNumber = Math.floor(Math.random() * memes.length);
  const memeAlt = memes[randomNumber].name;
  const memeUrl = memes[randomNumber].url;
  memeImage.setAttribute('src', `${memeUrl}`);
  memeImage.setAttribute('alt', `${memeAlt}`);
  return memes[randomNumber];
}

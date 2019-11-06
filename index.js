import { getMemes, ENDPOINT } from './api.js';
import { formatMemes, filterBySize, sortAscendant } from './utils.js';

const main = document.getElementsByTagName('main');
const memeImage = document.querySelector('.meme');
const buttonMeme = document.querySelector('.get-meme');
let memesArr;

function getMemeOfTheDay(memes) {
  const currentDate = new Date().getDate();
  const memeURL = memes[currentDate].url;
  memeImage.setAttribute('src', `${memeURL}`);
}

function getRandomMeme(memes) {
  const randomNum = Math.floor(Math.random() * memes.length);
  const randomNumber = memes[randomNum];
  return randomNumber;
}

function showRandomMeme() {
  const randomMeme = getRandomMeme(memesArr);
  console.log(randomMeme);
  const memeAlt = memesArr[randomNumber].name;
  const memeUrl = memesArr[randomNumber].url;
  memeImage.setAttribute('src', `${memeUrl}`);
  memeImage.setAttribute('alt', `${memeAlt}`);
  return memeImage;
}

getMemes(ENDPOINT)
  .then(response => filterBySize(response, 500))
  .then(result => result.map(meme => formatMemes(meme)))
  .then(formattedMemes => sortAscendant(formattedMemes))
  .then(sortedMemes => {
    console.dir(sortedMemes);
    memesArr = sortedMemes;
    getMemeOfTheDay(memesArr);
  });

buttonMeme.addEventListener('click', showRandomMeme());

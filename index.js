import { getMemes, ENDPOINT } from './api.js';
import { formatMemes, filterBySize, sortAscendant } from './utils.js';

const main = document.getElementsByTagName('main');
const memeImage = document.querySelector('.meme');
const buttonMeme = document.querySelector('.get-meme');
let memesArr;

function getMemeOfTheDay(memes) {
  const currentDate = new Date().getDate();
  const memeURL = memes[currentDate - 1].url;
  memeImage.setAttribute('src', `${memeURL}`);
}

function getRandomNumber(memes) {
  const randomNum = Math.floor(Math.random() * memes.length);
  const randomNumber = memes[randomNum];
  return randomNumber;
}

function getRandomMeme(memesArr) {
  const randomMeme = getRandomNumber(memesArr);
  memeImage.alt = randomMeme.name;
  memeImage.src = randomMeme.url;
  //return memeImage;
}

function showRandomMeme() {
  buttonMeme.addEventListener('click', getRandomMeme(memesArr));
}

getMemes(ENDPOINT)
  .then(response => filterBySize(response, 500))
  .then(result => result.map(meme => formatMemes(meme)))
  .then(formattedMemes => sortAscendant(formattedMemes))
  .then(sortedMemes => {
    console.dir(sortedMemes);
    memesArr = sortedMemes;
    getMemeOfTheDay(memesArr);
    buttonMeme.addEventListener('click', function() {
      showRandomMeme();
    });
  });

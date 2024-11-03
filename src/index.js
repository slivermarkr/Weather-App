import generateJoke from "./generateJoke.js";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";

const laughImg = document.querySelector("#laughImg");
const getJokeBtn = document.querySelector("#jokeBtn");
laughImg.src = laughing;

getJokeBtn.addEventListener("click", generateJoke);
generateJoke();

import axios from "axios";
export default async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const response = await axios.get("https://icanhazdadjoke.com", config);
  document.querySelector("#joke").innerHTML = response.data.joke;
}

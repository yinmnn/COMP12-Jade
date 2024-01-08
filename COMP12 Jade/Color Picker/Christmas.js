const colours = ["#e52222", "#981a1a", "#184e07", "#0c8228", "#fffefe"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randdomNumber = getRandomNumber();
  console.log(randdomNumber);

  document.body.style.backgroundColor = colours[randdomNumber];
  color.textContent = colours[randdomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colours.length);
}
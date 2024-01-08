const colours = ["#ffffff", "	#ff7b00", "	#fccd67", "#000000", "#4a4a4a"];
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
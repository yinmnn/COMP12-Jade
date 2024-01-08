const alpha = [
    "Alpha1.PNG",
    "Alpha2.PNG",
    "Alpha3.PNG",
    "Alpha4.PNG",
    "Alpha5.PNG"
  ];

  const anime = [
    "Anime1.jpg",
    "Anime2.jpg",
    "Anime3.jpg",
    "Anime4.jpg",
    "Anime5.jpg",
    "Anime6.jpg",
    "Anime7.jpg"
  ];
  
  const btn = document.getElementById("btn");
  
  btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundImage = `url('${alpha[randomNumber]}')`;
  });
  
  function getRandomNumber() {
    return Math.floor(Math.random() * alpha.length);
  }

  const btn1 = document.getElementById("btn-ran");
  
  btn1.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundImage = `url('${anime[randomNumber]}')`;
  });
  
  function getRandomNumber() {
    return Math.floor(Math.random() * anime.length);
  }
  
  
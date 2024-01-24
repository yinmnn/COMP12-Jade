// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
  //starting here is modification 1 for random people (cartoon or friends)
  {
    id: 5,
    name: 'Sung Jinwoo',
    job: 'Hunter',
    img: 'https://staticg.sportskeeda.com/editor/2023/12/1ed68-17017741463507-1920.jpg?w=840',
    text: 'The Weakest Hunter of All Mankind. An infamously weak E-Rank Hunter, he got the chance of a lifetime when he was selected as the Player of the System, giving him the unique ability to grow in strength without restraint.',
  },
  {
    id: 6,
    name: 'Kagayama Tobio',
    job: 'Volleyball Setter',
    img: 'https://haikyuu.store/wp-content/uploads/2021/02/5-unique-things-you-did-not-know-about-kageyama-tobio-1024x576.png',
    text: "He is the team's starting setter and was notoriously known as the King of the Court in Junior High for his tyrannical sets and authoritarian-style leadership.",
  },
  {
    id: 7,
    name: 'Gojo Satoru',
    job: 'very powerful sorcerer',
    img: 'https://butwhytho.net/wp-content/uploads/2023/09/Gojo-Jujutsu-Kaisen-But-Why-Tho-2.jpg',
    text: 'An exceptional and extremely confident sorcerer, Gojo believes himself to be an invincible and unstoppable force. He is not afraid to call his enemies out by calling them weak.',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

const startBtn = document.querySelector('.start-btn');
const endBtn = document.querySelector('.end-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

//Modification 2 and 3

//show first person
startBtn.addEventListener('click', function () {
  currentItem = 0;
  showPerson(currentItem);
});


//show last person
endBtn.addEventListener('click', function () {
  currentItem = 6;
  showPerson(currentItem);
});

